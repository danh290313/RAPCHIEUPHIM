import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ScreenImage from '~/assets/Images/movies/booking/bg-screen.png';
import * as ticketActions from '~/redux/actions/ticketActions';
import movieApi from '../../../api/movieApi';
import showtimeApi from '../../../api/showtimeApi';

const initialMovieInfo = { name: '', smallImageURl: '' };
const initialScheduleInfo = {
  price: 3000,
  branchName: '',
  startDate: '',
  startTime: '',
  room: { name: '' },
};

const handleMoney = money => {
  let total = '';
  const moneyString = String(money);
  let temp = '';
  for (let i = moneyString.length - 1; i >= 0; --i) {
    temp = moneyString[i] + temp;
    if (temp.length === 3) {
      if (i !== 0) {
        temp = '.' + temp;
      }
      total = temp + total;
      temp = '';
    }
  }
  total = temp + total;
  return total;
};
const BookingSeat = props => {
  // gọi useEffect để lấy các ghế trong schedule đúng 1 lần rồi bỏ vào testSeats
  const [seats, setSeats] = useState([]);
  const [ticketSeats, setTicketSeats] = useState([]);
  const [movieInfo, setMovieInfo] = useState(initialMovieInfo);
  const [scheduleInfo, setScheduleInfo] = useState(initialScheduleInfo);
  const scheduleID = useSelector(state => state.ticket.scheduleID);
  const movieID = useSelector(state => state.ticket.movieId);
  useEffect(() => {
    // lấy tên phòng, địa chỉ, thời gian chiếu (định dạng giờ, ngày)
    const fetchScheduleInfor = async scheduleID => {
      const data = await showtimeApi.getScheduleByID(scheduleID);
      setScheduleInfo(data);
    };
    fetchScheduleInfor(scheduleID);
  }, [scheduleID]);

  useEffect(() => {
    // Lấy hình với tên phim
    const fetchMovieInfo = async movieID => {
      const data = await movieApi.getById(movieID);
      setMovieInfo(data);
    };
    fetchMovieInfo(movieID);
  }, [movieID]);

  useEffect(() => {
    const getSeatsFromAPI = async scheduleID => {
      const seatsFromAPI = await showtimeApi.getSeatsFromSchedule(scheduleID); // {id : number, name: string, isOccupied: number (0,1)}
      const seatsDTO = seatsFromAPI?.map(seat => ({
        key: seat.name,
        value: seat.id,
        isBooked: seat.isOccupied === 1,
      }));
      setSeats(seatsDTO);
    };

    getSeatsFromAPI(scheduleID);
  }, [scheduleID]);

  const choosenSeatHandler = e => {
    const seatButtons = document.querySelectorAll('.seat-button');
    const targetClassList = e.target.classList;
    targetClassList.toggle('notChosen');
    if (targetClassList.contains('notChosen')) {
      targetClassList.add('btn-outline-danger');
      targetClassList.remove('btn-danger');
      setTicketSeats(prevState =>
        prevState.filter(seat => seat.id !== Number(e.target.value))
      );
      if (ticketSeats.length === 5) {
        // - lấy những thằng đã được đặt
        const bookedSeats = seats
          .filter(seat => seat.isBooked)
          .map(seat => seat.value); // [1,3,2]
        const mapIDSeatTicket = ticketSeats.map(seat => seat.id);
        seatButtons.forEach(btn => {
          if (btn.hasAttribute('value')) {
            const stringValue = btn.getAttribute('value'); // "1", "3"
            // giờ thì bỏ disable những thằng không nằm trong  mapIDSeatTicket ở trên,
            // những thằng mà đã được booked thì không được phép bỏ disable
            if (
              mapIDSeatTicket.indexOf(Number(stringValue)) === -1 &&
              bookedSeats.indexOf(Number(stringValue)) === -1
            ) {
              btn.disabled = false;
              btn.classList.remove('btn-secondary');
              btn.classList.add('btn-outline-danger');
            }
          }
        });
      }
    } else {
      targetClassList.add('btn-danger');
      targetClassList.remove('btn-outline-danger');
      if (ticketSeats.length === 4) {
        // disable các nút kia vì chỉ tối đa đặt 5 ghế
        const mapIDSeatTicket = ticketSeats.map(seat => seat.id);
        seatButtons.forEach(btn => {
          if (btn.hasAttribute('value')) {
            const stringValue = btn.getAttribute('value');
            if (
              stringValue !== e.target.value &&
              mapIDSeatTicket.indexOf(Number(stringValue)) === -1
            ) {
              btn.disabled = true;
              btn.classList.remove('btn-outline-danger');
              btn.classList.add('btn-secondary');
            }
          }
        });
      }
      setTicketSeats(prevState =>
        [
          ...prevState,
          { name: e.target.name, id: Number(e.target.value) },
        ].sort((a, b) => a.name.localeCompare(b.name))
      );
    }
  };

  const dispatch = useDispatch();
  const handleSubmitSeats = () => {
    if (ticketSeats.length === 0) {
      return;
    }
    ticketActions.addSeatsAction(dispatch, ticketSeats);
  };

  return (
    <Container className='my-4 mx-auto' style={{ padding: '0 3rem' }}>
      <div className='header'>
        <h5
          className='bg-black text-white text-center text-uppercase p-2'
          style={{ margin: '0' }}
        >
          booking online
        </h5>
        <div
          className='py-3 px-1 fw-semibold'
          style={{ backgroundColor: '#fff1ce' }}
        >
          <div className='d-flex'>
            <div
              className='px-2 fw-semibold'
              style={{ borderRight: '3px solid #000' }}
            >
              {scheduleInfo.branchName}
            </div>
            <div
              className='px-2 fw-semibold'
              style={{ borderRight: '3px solid #000' }}
            >
              {scheduleInfo.room.name}
            </div>
            <div className='px-2 fw-semibold'>Số ghế (260/260)</div>
          </div>
          <div className='time px-2'>
            11/04/2023 20:30 ~ 11/04/2023 22:28
            {`${scheduleInfo.startDate} ${scheduleInfo.startTime}`}
          </div>
        </div>
      </div>
      <div className='body py-4'>
        <div
          className=' text-center fw-semibold py-1'
          style={{ backgroundColor: '#bcbdc0' }}
        >
          Người / Ghế
        </div>
        <div className='monitor-bg my-4'>
          <img src={ScreenImage} className='w-100' alt='' />
        </div>
        <div className='seats-info px-5 py-3' style={{ margin: 'auto' }}>
          <div className='seats-info--seats mx-auto' style={{ width: '400px' }}>
            {seats.map((seat, index) => {
              let className = 'btn p-0 rounded-0';
              if (seat.isBooked) {
                className += ' btn-secondary';
              } else {
                className += ' btn-outline-danger notChosen';
              }

              return (
                <button
                  key={index}
                  className={`${className} seat-button`}
                  disabled={seat.isBooked}
                  style={{
                    width: '30px',
                    height: '23px',
                    fontSize: '0.85rem',
                    margin: '0.1rem',
                  }}
                  value={seat.value}
                  name={seat.key}
                  onClick={choosenSeatHandler}
                >
                  {seat.key}
                </button>
              );
            })}
          </div>
          <div className='seats-info--info my-4'>
            <ul
              className='d-flex justify-content-evenly'
              style={{ listStyle: 'none' }}
            >
              <li>
                <div
                  className='d-inline-block mx-2'
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#bb2d3b',
                  }}
                ></div>
                Checked
              </li>
              <li>
                <div
                  className='d-inline-block mx-2'
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#aaa',
                  }}
                ></div>
                Đã được đặt
              </li>
              <li>
                <div
                  className='d-inline-block mx-2'
                  style={{
                    width: '12px',
                    height: '12px',
                    border: '1px solid #bb2d3b',
                  }}
                ></div>
                Chưa chọn
              </li>
            </ul>
          </div>
          <div className='booked-seats-and-total-money d-flex justify-content-around  gap-3'>
            <div className='booked-seats-and-total-money--movie-info d-flex gap-3'>
              <div className='left'>
                <img src={movieInfo.smallImageURl} alt='' width='100' />
              </div>
              <div className='right text-uppercase'>{movieInfo.name}</div>
            </div>
            <div
              className='booked-seats-and-total-money--schedule-info-seats '
              style={{}}
            >
              <div className='d-flex gap-5'>
                <div className='fs-small'>Rạp:</div>
                <div className='fw-bold' style={{ marginLeft: '-3px' }}>
                  {scheduleInfo.branchName}
                </div>
              </div>
              <div className='d-flex gap-2 '>
                <div className='fs-small'>Giờ chiếu:</div>
                <div className='fw-bold'>{`${scheduleInfo.startTime.substring(
                  0,
                  scheduleInfo.startTime.lastIndexOf(':')
                )}, ${scheduleInfo.startDate}`}</div>
              </div>
              <div className='d-flex gap-4'>
                <div className='fs-small'>Phòng:</div>
                <div
                  className='fw-bold'
                  style={{ marginLeft: '1px', fontWeight: 'bold' }}
                >
                  {scheduleInfo.room.name}
                </div>
              </div>
              <div className='d-flex gap-4'>
                <div className='fs-small'>Ghế:</div>
                <div className='fw-bold' style={{ marginLeft: '15px' }}>
                  {ticketSeats.length !== 0
                    ? ticketSeats.reduce(
                        (prev, cur) =>
                          prev === ''
                            ? prev + cur.name
                            : prev + ', ' + cur.name,
                        ''
                      )
                    : 'Bạn chưa chọn ghế nào.'}
                </div>
              </div>
            </div>
            <div className='booked-seats-and-total-money--total-money'>
              <div className='d-flex gap-2'>
                <div className='fs-small'>Giá mỗi vé:</div>
                <div className='fw-bold'>
                  {handleMoney(scheduleInfo.price)} VND
                </div>
              </div>
              <div className='d-flex gap-2'>
                <div className='fs-small'>Tổng tiền:</div>
                <div className='fw-bold'>
                  {handleMoney(ticketSeats.length * scheduleInfo.price)} VND
                </div>
              </div>
              <div className='d-flex flex-row-reverse my-3'>
                <button className='btn btn-success' onClick={handleSubmitSeats}>
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookingSeat;

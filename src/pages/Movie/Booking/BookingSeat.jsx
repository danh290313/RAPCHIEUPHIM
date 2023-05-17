import { useCallback, useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ScreenImage from '~/assets/Images/movies/booking/bg-screen.png';
import MarioImage from '~/assets/Images/movies/super-mario.jpg';
import showtimeApi from '../../../api/showtimeApi';

const BookingSeat = props => {
  // gọi useEffect để lấy các ghế trong schedule đúng 1 lần rồi bỏ vào testSeats
  const [seats, setSeats] = useState([]);
  const [ticketSeats, setTicketSeats] = useState([]);
  console.log(
    '🚀 ~ file: BookingSeat.jsx:53 ~ BookingSeat ~ ticketSeats:',
    ticketSeats
  );
  const scheduleID = useSelector(state => state.ticket.scheduleID);
  useEffect(() => {
    // lấy hình với tên phim , tên phòng, địa chỉ, thời gian chiếu (định dạng giờ, ngày)
  }, []);
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
    console.log(e.target.classList);
    console.log('e.target.value', e.target.value);
    console.log('e.target.name', e.target.name);

    const targetClassList = e.target.classList;
    targetClassList.toggle('notChosen');
    if (targetClassList.contains('notChosen')) {
      targetClassList.add('btn-outline-danger');
      targetClassList.remove('btn-danger');
      setTicketSeats(prevState =>
        prevState.filter(seat => seat.id !== Number(e.target.value))
      );
    } else {
      targetClassList.add('btn-danger');
      targetClassList.remove('btn-outline-danger');
      setTicketSeats(prevState =>
        [
          ...prevState,
          { name: e.target.name, id: Number(e.target.value) },
        ].sort((a, b) => a.name.localeCompare(b.name))
      );
    }
  };

  return (
    <Container className='my-4 mx-auto' style={{ maxWidth: '850px' }}>
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
              CGV Hùng Vương Plaza
            </div>
            <div
              className='px-2 fw-semibold'
              style={{ borderRight: '3px solid #000' }}
            >
              Cinema 5
            </div>
            <div className='px-2 fw-semibold'>Số ghế (260/260)</div>
          </div>
          <div className='time px-2'>11/04/2023 20:30 ~ 11/04/2023 22:28</div>
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
                  className={className}
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
          <div
            className='booked-seats-and-total-money d-flex justify-content-around'
            style={{ maxHeight: '100px' }}
          >
            <div className='booked-seats-and-total-money--movie-info d-flex gap-3'>
              <div className='left'>
                <img src={MarioImage} alt='' width='100' />
              </div>
              <div className='right text-uppercase'>
                phim anh em super mario
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookingSeat;

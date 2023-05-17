import { useCallback, useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ScreenImage from '~/assets/Images/movies/booking/bg-screen.png';
import MarioImage from '~/assets/Images/movies/super-mario.jpg';
import showtimeApi from '../../../api/showtimeApi';

const initialSeats = [
  { key: 'A1', value: 'a1', isBooked: false },
  { key: 'A2', value: 'a2', isBooked: false },
  { key: 'A3', value: 'a3', isBooked: true },
  { key: 'B1', value: 'b1', isBooked: false },
  { key: 'B2', value: 'b2', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
  { key: 'C1', value: 'c1', isBooked: true },
  { key: 'C2', value: 'c2', isBooked: false },
  { key: 'C3', value: 'c3', isBooked: false },
];

const BookingSeat = props => {
  // gọi useEffect để lấy các ghế trong schedule đúng 1 lần rồi bỏ vào testSeats
  const [seats, setSeats] = useState(initialSeats);
  const scheduleID = useSelector(state => state.ticket.scheduleID);
  useEffect(() => {
    const getSeatsFromAPI = async scheduleID => {
      const seatsFromAPI = await showtimeApi.getSeatsFromSchedule(scheduleID); // {id : number, name: string, isOccupied: number (0,1)}
    };

    getSeatsFromAPI(scheduleID);
  }, [scheduleID]);

  const choosenSeatHandler = useCallback(e => {
    console.log(e.target.classList);
    const targetClassList = e.target.classList;
    targetClassList.toggle('notChosen');
    if (targetClassList.contains('notChosen')) {
      targetClassList.add('btn-outline-danger');
      targetClassList.remove('btn-danger');
      setSeats(prevState =>
        [
          ...prevState,
          {
            key: e.target.value.toUpperCase(),
            value: e.target.value,
            isBooked: true,
          },
        ].sort((a, b) => a.key - b.key)
      );
    } else {
      targetClassList.add('btn-danger');
      targetClassList.remove('btn-outline-danger');
      setSeats(prevState =>
        prevState.filter(seatObj => seatObj.value !== e.target.value)
      );
    }
  }, []);
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

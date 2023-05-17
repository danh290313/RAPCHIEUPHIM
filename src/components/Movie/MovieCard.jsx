import { Fragment, useRef } from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as TicketActions from '~/redux/actions/ticketActions';
import ButtonWithIcon from '../UI/ButtonWithIcon';
import LoadingModal from '../UI/LoadingModal';
import BuyTicketModal from './BuyTicketModal';
const MovieCard = props => {
  const { movieId, image, title, filmGenres, duration, premiereDate } = props;
  const modalRef = useRef();
  const dispatch = useDispatch();

  const buyTicketBtnHandler = () => {
    // Lưu vào redux id phim và fetch chi nhánh, giờ chiếu phim  từ id phim
    TicketActions.addMovieAction(dispatch, movieId);
    modalRef.current.showModal();
  };

  return (
    <Fragment>
      {/* <LoadingModal />*/}
      <BuyTicketModal ref={modalRef} />
      <Card style={{ width: '12rem' }} className='border border-0'>
        <Link to={`/movie/movie-detail/${movieId}`}>
          <Card.Img
            variant='top'
            src={image}
            className='border border-dark border-4 rounded-0'
          />
        </Link>
        <Card.Body className='px-0'>
          <Card.Title className='fs-6 text-uppercase pb-2'>{title}</Card.Title>
          <Card.Text>
            <Stack className='fs-6 pb-4'>
              <div>
                <span className='fw-semibold'>Thể loại:</span>
                <span>{filmGenres}</span>
              </div>
              <div>
                <span className='fw-semibold'>Thời lượng: </span>
                <span>{duration} phút</span>
              </div>
              <div>
                <span className='fw-semibold'>Khởi chiếu:</span>
                <span>{premiereDate}</span>
              </div>
            </Stack>
          </Card.Text>
          <ButtonWithIcon
            variant='danger'
            styles='float-end text-red-500'
            btnContent='mua vé'
            btnContentStyles='text-uppercase'
            gap='2'
            onClickHandler={buyTicketBtnHandler}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-ticket-detailed'
              viewBox='0 0 16 16'
            >
              <path d='M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z' />
              <path d='M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z' />
            </svg>
          </ButtonWithIcon>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
export default MovieCard;

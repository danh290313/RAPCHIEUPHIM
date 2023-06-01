import { Fragment, useRef } from 'react';
import { Card, Button } from 'antd';
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
    TicketActions.addMovieDurationAction(dispatch, duration);
    modalRef.current.showModal();
  };

  const cardContent = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <div className='my-1'>
          <span
            className='fw-bold'
            style={{ color: 'black', fontSize: '1rem' }}
          >
            {title}
          </span>
        </div>
        <div>
          <span className='fw-semibold'>Thể loại:</span>
          <span>{filmGenres}</span>
        </div>
        <div>
          <span className='fw-semibold'>Thời lượng: </span>
          <span>{duration} phút</span>
        </div>
        <div className='mb-5'>
          <span className='fw-semibold'>Khởi chiếu:</span>
          <span>{premiereDate}</span>
        </div>
      </div>
      <div style={{ flexGrow: 0 }}>
        <Button
          onClick={buyTicketBtnHandler}
          className='blue-button'
          style={{ position: 'absolute', bottom: '20px', right: '10px' }}
          type='primary'
        >
          Đặt vé
        </Button>
      </div>
    </div>
  );

  const imageCover = (
    <Link to={`/movie/movie-detail/${movieId}`}>
      <img src={image} style={{ width: '250px', height: '370px' }} />
    </Link>
  );
  return (
    <Fragment>
      {/* <LoadingModal />*/}
      <BuyTicketModal ref={modalRef} />
      <Card
        hoverable
        style={{ width: '250px', height: '570px', position: 'relative' }}
        cover={imageCover}
      >
        <Card.Meta
          description={cardContent}
          style={{ fontSize: '0.8rem' }}
        ></Card.Meta>
      </Card>
    </Fragment>
  );
};
export default MovieCard;

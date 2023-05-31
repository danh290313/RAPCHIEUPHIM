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
        <div>
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
        <div>
          <span className='fw-semibold'>Khởi chiếu:</span>
          <span>{premiereDate}</span>
        </div>
      </div>
      <div style={{ flexGrow: 0 }}>
        <Button
          onClick={buyTicketBtnHandler}
          style={{ position: 'absolute', bottom: '20px', right: '10px' }}
          type='primary'
        >
          Đặt vé
        </Button>
      </div>
    </div>
  );

  return (
    <Fragment>
      {/* <LoadingModal />*/}
      <BuyTicketModal ref={modalRef} />
      <Card
        hoverable
        style={{ width: '250px', height: '550px', position: 'relative' }}
        cover={<img src={image} height='350' />}
      >
        {/* <Link to={`/movie/movie-detail/${movieId}`}> */}
        {/*   <Card.Img */}
        {/*     variant='top' */}
        {/*     src={image} */}
        {/*     className='border border-dark border-4 rounded-0' */}
        {/*   /> */}
        {/* </Link> */}
        <Card.Meta
          description={cardContent}
          style={{ fontSize: '0.8rem' }}
        ></Card.Meta>
      </Card>
    </Fragment>
  );
};
export default MovieCard;

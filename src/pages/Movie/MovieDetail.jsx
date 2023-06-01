import { useEffect, useRef, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import movieApi from '../../api/movieApi';
import BuyTicketModal from '../../components/Movie/BuyTicketModal';
import MovieDetailMultiTabs from '../../components/Movie/MovieDetailMultiTabs';
import * as TicketActions from '~/redux/actions/ticketActions';
import { Button } from 'antd';

const initialMovieState = {
  id: '',
  name: '',
  director: '',
  actors: '',
  categories: '',
  releaseDate: '',
  duration: '',
  language: '',
  longDescription: '',
  smallImageURl: '',
  trailerURL: '',
};
const MovieDetail = props => {
  const params = useParams();
  const [movie, setMovie] = useState(initialMovieState);
  const { movieId } = params;
  const modalRef = useRef();
  const dispatch = useDispatch();

  const buyTicketBtnHandler = () => {
    // Lưu vào redux id phim và fetch chi nhánh, giờ chiếu phim  từ id phim
    TicketActions.addMovieAction(dispatch, movieId);
    modalRef.current.showModal();
  };

  useEffect(() => {
    const getMovieDetail = async movieId => {
      const movie = await movieApi.getById(movieId);
      setMovie(movie);
    };
    getMovieDetail(movieId);
  }, [movieId]);
  return (
    <>
      <BuyTicketModal ref={modalRef} />
      <Container className='py-5'>
        <Stack direction='horizontal'>
          <h2>Nội Dung Phim</h2>
        </Stack>
        <hr className='border border-2 border-dark' />
        <Stack direction='horizontal' gap={4}>
          <img src={movie.smallImageURl} alt='' className='img-fluid' />

          <div className='w-100'>
            <h4 className='text-uppercase'>{movie.name}</h4>
            <hr />
            <div className='movie-info fs-6'>
              <div>
                <label className='fw-semibold'>Đạo diễn: </label>
                <span>&nbsp; {movie.director}</span>
              </div>
              <div>
                <label className='fw-semibold'>Diễn viên: </label>
                <span>&nbsp; {movie.actors}</span>
              </div>
              <div>
                <label className='fw-semibold'>Thể loại: </label>
                <span>&nbsp; {movie.categories}</span>
              </div>
              <div>
                <label className='fw-semibold'>Khởi chiếu: </label>
                <span>&nbsp; {movie.releaseDate}</span>
              </div>
              <div>
                <label className='fw-semibold'>Thời lượng: </label>
                <span>&nbsp; {movie.duration} phút</span>
              </div>
              <div className='mb-3'>
                <label className='fw-semibold'>Ngôn ngữ: </label>
                <span>&nbsp; {movie.language}</span>
              </div>
              <div>
                <Button
                  onClick={buyTicketBtnHandler}
                  className='blue-button'
                  type='primary'
                >
                  Đặt vé
                </Button>
              </div>
            </div>
          </div>
        </Stack>
        <div>
          <MovieDetailMultiTabs
            movieDescription={movie.longDescription}
            trailerSrc={movie.trailerURL}
          />
        </div>
      </Container>
    </>
  );
};
export default MovieDetail;

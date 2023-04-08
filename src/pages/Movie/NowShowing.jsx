import { Container, Stack } from 'react-bootstrap';
import MarioImage from '~/assets/Images/movies/super-mario.jpg';
import MovieCard from '../../components/Movie/MovieCard';

import styles from './NowShowing.scss';
function NowShowing() {
  return (
    <Container className='py-5'>
      <Stack direction='horizontal'>
        <h2>Phim Đang Chiếu</h2>
        <h4
          className='ms-auto text-uppercase align-self-end fw-light text-body-tertiary te '
          style={{ cursor: 'pointer' }}
        >
          Phim sắp chiếu
        </h4>
      </Stack>
      <hr />
      <MovieCard
        movieId={1}
        image={MarioImage}
        title='phim anh em super mario'
        filmGenres='Hài, Hoạt Hình, Phiêu Lưu'
        duration='93'
        premiereDate='07-04-2023'
      />
    </Container>
  );
}

export default NowShowing;

import { Container, Stack } from 'react-bootstrap';
import MarioImage from '~/assets/Images/movies/super-mario.jpg';
import ButtonWithIcon from '../../components/UI/ButtonWithIcon';
import MovieDetailMultiTabs from '../../components/Movie/MovieDetailMultiTabs';
const MovieDetail = props => {
  // lấy api về
  // const {
  //   director,
  //   cast,
  //   genres,
  //   releaseDate,
  //   duration,
  //   languages,
  //   movieDescription,
  //   trailerSrc,
  // }
  const filmName = 'Phim anh em super mario';
  const director = 'Aaron Horvath, Michael Jelenic';
  const cast = ' Chris Pratt, Anya Taylor-Joy, Charlie Day, … ';
  const genres = 'Hài, Hoạt Hình, Phiêu Lưu';
  const releaseDate = '07/04/2023';
  const duration = ' 93 phút';
  const languages = 'Tiếng Anh - Phụ đề Tiếng Việt; Lồng tiếng';
  const movieDescription =
    'Câu chuyện về cuộc phiêu lưu của anh em Super Mario đến vương quốc Nấm.';
  const trailerSrc = 'https://www.youtube.com/embed/UGO_i2tf1BM ';
  return (
    <Container className='py-5'>
      <Stack direction='horizontal'>
        <h2>Nội Dung Phim</h2>
      </Stack>
      <hr className='border border-2 border-dark' />
      <Stack direction='horizontal' gap={4}>
        <img src={MarioImage} alt='' className='img-fluid' />

        <div className='w-100'>
          <h4 className='text-uppercase'>{filmName}</h4>
          <hr />
          <div className='movie-info fs-6'>
            <div>
              <label className='fw-semibold'>Đạo diễn: </label>
              <span>&nbsp; {director}</span>
            </div>
            <div>
              <label className='fw-semibold'>Diễn viên: </label>
              <span>&nbsp; {cast}</span>
            </div>
            <div>
              <label className='fw-semibold'>Thể loại: </label>
              <span>&nbsp; {genres}</span>
            </div>
            <div>
              <label className='fw-semibold'>Khởi chiếu: </label>
              <span>&nbsp; {releaseDate}</span>
            </div>
            <div>
              <label className='fw-semibold'>Thời lượng: </label>
              <span>&nbsp; {duration}</span>
            </div>
            <div className='mb-4'>
              <label className='fw-semibold'>Ngôn ngữ: </label>
              <span>&nbsp; {languages}</span>
            </div>
            <ButtonWithIcon
              variant='danger'
              styles=''
              btnContent='mua vé'
              btnContentStyles='text-uppercase'
              gap='2'
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
          </div>
        </div>
      </Stack>
      <div>
        <MovieDetailMultiTabs
          movieDescription={movieDescription}
          trailerSrc={trailerSrc}
        />
      </div>
    </Container>
  );
};
export default MovieDetail;

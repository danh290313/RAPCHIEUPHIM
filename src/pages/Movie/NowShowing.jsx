import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import MarioImage from '~/assets/Images/movies/super-mario.jpg';
import MovieCard from '../../components/Movie/MovieCard';

import styles from './NowShowing.scss';

import movieApi from '~/api/movieApi';

function NowShowing() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getListMovies = async () => {
      const movies = await movieApi.getAll();
      setMovies(movies);
      setFilteredItems(movies);
    };
    getListMovies();
  }, []);

  console.log('movies', movies);

  const [searchTerm, setSearchTerm] = useState('');

  const [filteredItems, setFilteredItems] = useState([]);
  console.log('fileter', searchTerm);

  const handleSearch = () => {
    const filtered = movies.filter(item =>
      item?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    movies && (
      <Container className='py-5'>
        <Stack direction='horizontal' className='grid grid-cols-[2,3,2]'>
          <Stack className='w-50'>
            <h2>Phim Đang Chiếu</h2>
          </Stack>
          <Stack className='w-100'>
            <div className='searchMovie '>
              <div className='p-1'>
                <div className='relative w-full'>
                  <input
                    type='search'
                    id='search-dropdown'
                    className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
                    placeholder='Search menu...'
                    value={searchTerm}
                    onChange={event => {
                      setSearchTerm(event.target.value);
                    }}
                    required
                  />
                  <button
                    type='submit'
                    className='absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-700 rounded-r-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                  >
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      ></path>
                    </svg>
                    <span className='sr-only'>Search</span>
                  </button>
                </div>

                <div className='space-x-2'>
                  <label
                    class='block text-gray-700 text-sm font-bold mb-2'
                    for='moviesee'
                  >
                    Những phim xem nhiều nhất gần đây:
                  </label>
                  {movies.slice(0, 4).map(item => (
                    <button
                      key={item.id}
                      className='px-4 py-2 border border-gray-300 rounded'
                      onClick={() => {
                        setSearchTerm(item.name);
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Stack>
          <Stack className='w-50'>
            <h4
              className='ms-auto text-uppercase align-self-end fw-light text-body-tertiary te '
              style={{ cursor: 'pointer' }}
            >
              Phim sắp chiếu
            </h4>
          </Stack>
          {/* 
          

          */}
        </Stack>
        <hr />
        {/* <Grid container spacing={2}>
          {movies?.map(
            (
              { id, smallImageURl, name, categories, duration, releaseDate },
              i
            ) => {
              return (
                <Grid key={i} item md={3} sm={12}>
                  <MovieCard
                    movieId={id}
                    image={smallImageURl}
                    title={name}
                    filmGenres={categories}
                    duration={duration}
                    premiereDate={releaseDate}
                  />
                </Grid>
              );
            }
          )}
        </Grid> */}

        <Grid container spacing={2}>
          {filteredItems.length > 0 ? (
            filteredItems?.map(
              (
                { id, smallImageURl, name, categories, duration, releaseDate },
                i
              ) => {
                return (
                  <Grid key={i} item md={3} sm={12}>
                    <MovieCard
                      movieId={id}
                      image={smallImageURl}
                      title={name}
                      filmGenres={categories}
                      duration={duration}
                      premiereDate={releaseDate}
                    />
                  </Grid>
                );
              }
            )
          ) : (
            <div
              className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 max-w-full flex items-center justify-center'
              role='alert'
              style={{ width: '100%', textAlign: 'center' }}
            >
              <p>Không tìm thấy phim mà bạn đang tìm kiếm</p>
            </div>
          )}
        </Grid>
      </Container>
    )
  );
}

export default NowShowing;

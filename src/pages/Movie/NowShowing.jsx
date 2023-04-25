import { Container, Stack } from 'react-bootstrap';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import MarioImage from '~/assets/Images/movies/super-mario.jpg';
import MovieCard from '../../components/Movie/MovieCard';

import styles from './NowShowing.scss';

import movieApi from '~/api/movieApi';

function NowShowing() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getListMovies = async () => {
      const movies = await movieApi.getAll();
      setMovies(movies);
    };
    getListMovies();
  }, []);

  console.log('movies', movies);

  return (
    movies && (
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
        <Grid container spacing={2}>
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
        </Grid>
      </Container>
    )
  );
}

export default NowShowing;

import { ToastContainer } from 'react-toastify';

import MovieSlide from '~/components/MovieSlide/MovieSlide';
import { useEffect } from 'react';
import movieApi from '../../api/movieApi';
import Banner from '~/components/Banner';

import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import { Image } from 'react-bootstrap';
import HeaderMenu from '~/layouts/components/HeaderMenu';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function HomePage() {
  const movieId = useSelector(state => state.ticket.movieId);
  console.log('movieId: ', movieId);
  return (
    <div className={cx('wrapper')}>
      <ToastContainer />
      <HeaderMenu />
      <div className={cx('silde_show')}>
        <Banner />
      </div>

      <div className={cx('background-title')}>
        <div className={cx('title')}>
          <h2> movive</h2>
        </div>
      </div>
      <div className={cx('movieSlide')}>
        <MovieSlide />
      </div>
      <div className={cx('background-title')}>
        <div className={cx('title2')}>
          <h2> movive</h2>
        </div>
      </div>

      <div className={cx('event')}>
        <div>
          <Image
            rounded
            thumbnail
            src='https://www.cgv.vn/media/wysiwyg/packages/214x245.jpg'
          />
        </div>
        <div>
          <Image
            rounded
            thumbnail
            src='https://www.cgv.vn/media/wysiwyg/2021/U22_WEB_496x247.jpg'
          />
        </div>
        <div>
          <Image
            rounded
            thumbnail
            src='https://www.cgv.vn/media/wysiwyg/2021/CGV-DIGITAL-HALL-RENTAL-214x245.png'
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

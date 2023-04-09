import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '../Images/';
import MenuDetail from '~/components/MenuDetail/MenuDetail';
import Cinema from '~/components/MenuDetail/Cinema';
import Member from '~/components/MenuDetail/Member';
import Curtereplex from '~/components/MenuDetail/Curtereplex';

const cx = classnames.bind(styles);

function Header() {
    const currentUser = true;
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content-right')}>
                    <Link to="/" className={cx('logo-right')}>
                        <img src={images.logo} alt="" />
                    </Link>
                </div>
                <div className={cx('content-center')}>
                    <MenuDetail>
                        <div className={cx('content-detail')}>PHIM</div>
                    </MenuDetail>
                    <Cinema>
                        <div className={cx('content-detail')}>RẠP CGV </div>
                    </Cinema>
                    <Member>
                        <div className={cx('content-detail')}>THÀNH VIÊN</div>
                    </Member>
                    <Curtereplex>
                        <div className={cx('content-detail')}>CULTUREPLEX</div>
                    </Curtereplex>
                </div>
                <div className={cx('content-left')}>
                    <Link to="kenh" className={cx('logo-kenh')}>
                        <img src={images.logoCenter} alt="" />
                    </Link>
                    <Link to="muave" className={cx('logo-muave')}>
                        <img src={images.logoRight} alt="" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;

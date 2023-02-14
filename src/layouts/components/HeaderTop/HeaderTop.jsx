import classnames from 'classnames/bind';
import styles from './HeaderTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSpinner } from '@fortawesome/free-solid-svg-icons';
import images from '../Images/';
import {Link, Outlet}  from 'react-router-dom';
const cx = classnames.bind(styles);

function HeaderTop() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('tuyendung')}>
                    <img src={images.tuyendung} alt="" className={cx('icon-tuyendung')} />
                    <span className={cx('content-detail')}>Tuyển dụng </span>
                </div>
                <div className={cx('tinmoi')}>
                    <img src={images.tinmoi} alt="" className={cx('icon-tinmoi')} />
                    <span className={cx('content-detail')}>Tin mới và ưu đải</span>
                </div>
                <div className={cx('vecuatoi')}>
                    <img src={images.vecuatoi} alt="" className={cx('icon-vecuatoi')} />
                    <span className={cx('content-detail')}>Vé của tôi</span>
                </div>
                <li className={cx('content-detail')}>
                    <FontAwesomeIcon icon={faUser} className={cx('icon-dangnhap')} />
                    <span className={cx('dangnhap')}>
                     <Link to={`/customer/account`}> Đăng nhập/Đăng ký </Link>    
               
                    </span>
                  
                </li>
            </div>
        </>
    );
}

export default HeaderTop;

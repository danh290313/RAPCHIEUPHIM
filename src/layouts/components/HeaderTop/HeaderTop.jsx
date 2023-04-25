import classnames from 'classnames/bind';
import styles from './HeaderTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSpinner } from '@fortawesome/free-solid-svg-icons';
import images from '../Images/';
import { getUserInfoAction, logoutAction } from '~/redux/actions/authActions';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
const cx = classnames.bind(styles);

function HeaderTop() {
    const user = useSelector((state) => state.auth.user);
    const isLogined = user ? true : false;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = (e) => {
        e.preventDefault();
        dispatch(logoutAction());
        navigate('/');
    };
    useEffect(() => {
        if (isLogined) {
            dispatch(getUserInfoAction());
        }
    }, [dispatch, isLogined]);

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
                    {!user ? (
                        <div>
                            <FontAwesomeIcon icon={faUser} className={cx('icon-dangnhap')} />
                            <span className={cx('dangnhap')}>
                                <Link to={`/customer/login`}> Đăng nhập/Đăng ký </Link>
                            </span>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <img
                                    src="https://icon-library.com/images/customer-icon/customer-icon-29.jpg"
                                    alt="avatar"
                                    width={50}
                                    height={50}
                              
                                />
                                    <span className={cx('name-user')}>
                                        
                                    <Link to={`/customer/profile`}> {user.name}</Link>
                                        </span>
                                <span>
                                    <a className={cx('logout')} onClick={onLogout} href="/logout">
                                        Đăng xuất
                                    </a>
                                </span>
                            </div>

                          
                        </div>
                    )}
                </li>
            </div>
        </>
    );
}

export default HeaderTop;

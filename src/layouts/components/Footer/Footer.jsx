import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Image } from 'react-bootstrap';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div>
             <div className={cx('foot')}>
                <Image
                    thumbnail
                    src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/brand-type-film-footer-min-600.png"
                ></Image>
            </div>
            <div className={cx('foot-next')}>
                <div className={cx('foot-detail')}>
                    <div className={cx('foot-detail-label')}>CGV Việt Nam</div>
                    <div>Giới Thiệu</div>
                    <div>Tiện Ích Online</div>
                    <div>Tuyển Dụng</div>
                    <div>Liên Hệ</div>
                    <div>Quảng Cáo CGV</div>
                </div>
                <div className={cx('foot-detail')}>
                    <div className={cx('foot-detail-label')}>Điều khoản sử dụng</div>
                    <div>Điều Khoản Chung</div>
                    <div>Điều Khoản Giao Dịch</div>
                    <div>Chính Sách Thanh Toán</div>
                    <div>Chính Sách Bảo Mật</div>
                    <div>Câu Hỏi Thường Gặp</div>
                </div>
                <div className={cx('foot-detail', 'followUs')}>
                    <div className={cx('foot-detail-label')}>Kết nối với chúng tôi</div>
                    <ul className={cx('foot-detail', 'followUs2')}>
                        <li className={cx('follow-fb')}>
                            <a href="https://www.facebook.com/cgvcinemavietnam" target="_blank"></a>
                        </li>
                        <li className={cx('follow-yt')}></li>
                        <li className={cx('follow-line')}></li>
                        <li className={cx('follow-instagram')}></li>
                    </ul>
                    <div className={cx('follow-infor')}>
                        <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG" alt="" />
                    </div>
                </div>
                <div className={cx('foot-detail', 'foot-detail-label')}>Chăm sóc khách hàng</div>
            </div>
        </div>
      );
}

export default Footer;

import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
const cx = classNames.bind(styles);

function HeaderMenu() {
    return (
        <>
            <ul className={cx('wrapperMenu')}>
                <li className={cx('theater')}>danh</li>
                <li className={cx('now-sh')}>adfa</li>
                <li className={cx('special')}></li>
                <li className={cx('event')}></li>
                <li className={cx('ticket')}></li>
                <li className={cx('dc')}></li>
                <li className={cx('login-header')}></li>
            </ul>
        </>
    );
}

export default HeaderMenu;

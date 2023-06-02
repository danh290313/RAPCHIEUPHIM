import { ToastContainer } from 'react-toastify';

import styles from './ForgetPassword.module.scss';

import classNames from 'classnames/bind';
import ForgetPasswordForm from '../../components/ForgetPassword/ForgetPassword';
const cx = classNames.bind(styles);

function ForgetPassword() {
  return (
    <div className={cx('swapper')}>
      <ToastContainer />
      <div className={cx('login')}>
        <ForgetPasswordForm />
      </div>
      <div className={cx('advertise')}>
        <img src='https://www.cgv.vn/media/wysiwyg/2020/2.jpg' />
      </div>
    </div>
  );
}

export default ForgetPassword;

import FormLoginResign from "../../components/Modal/FormLoginResign";
import styles from './Login.module.scss'
import classNames from "classnames/bind";
  const cx = classNames.bind(styles);



function Login() {
    return (
        <div className={cx('swapper')}>
          <div className={cx('login')}>
            <FormLoginResign />

          </div>
          <div className={cx('advertise')}>
            <img src='https://www.cgv.vn/media/wysiwyg/2020/2.jpg' />
          </div>
        </div>
        
      );
}

export default Login;
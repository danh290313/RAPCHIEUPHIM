//import toast from 'react-hot-toast';
import { toastError, toastSuccess } from '~/utils/toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  password: '',
  accessToken: localStorage.getItem('accessToken'),
  isVerified: false,
  isVerifyCodeResetPassword: false,
  isReset: false,
  isLogined: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'REGISTER_SUCCESS': {
      toast.success('Đăng kí thành công');
      return {
        ...state,
        user: payload,
      };
    }
    case 'LOGIN_SUCCESS': {
      toastSuccess('Đăng nhập thành công');
      localStorage.setItem('user', JSON.stringify(payload));
      localStorage.setItem('accessToken', payload.accessToken);
      return {
        ...state,
        user: payload,
        accessToken: payload.accessToken,
        isLogined: true,
      };
    }
    case 'REGISTER_FAIL': {
      toastError('Đăng kí thất bại !!!');
      return {
        ...state,
      };
    }

    case 'LOGIN_FAIL': {
      toast.error('Login failed. Please try again.');
      return {
        ...state,
      };
    }
    case 'LOGOUT': {
      localStorage.clear();
      return {
        ...state,
        user: null,
        accessToken: null,
        isLogined: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;

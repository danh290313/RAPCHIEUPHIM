import toast from 'react-hot-toast';

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
      return {
        ...state,
        user: payload,
      };
    }
    case 'LOGIN_SUCCESS': {
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
      toast.error('Dữ liệu không hợp lệ!');
      return {
        ...state,
      };
    }

    case 'LOGIN_FAIL': {
      toast.error('Tài khoản không hợp lệ!');
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

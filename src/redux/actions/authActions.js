import authApi from '../../api/authApi';

export const setAccessToken = (token) => ({
  type: 'ACCESS_TOKEN',
  payload: token,
});

export const loginAction = (data) => async (dispatch) => {
  try {
    const response = await authApi.login(data);
    console.log('first', response);
    if (response) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response,
      });
    } else {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: response.error ,
      });
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const registerAction = (data) => async (dispatch) => {
  try {
    const response = await authApi.register(data);
  
    console.log('first', response);
    if (!response.error) {
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: data,
      });
    } else {
      dispatch({
        type: 'REGISTER_FAIL',
        payload: response.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getUserInfoAction = () => async (dispatch, getState) => {
  try {
    let { accessToken } = getState().auth;
    const response = await authApi.getUserInfo(accessToken);
    if (!response.error) {
      dispatch({
        type: 'GET_USER_INFO_SUCCESS',
        payload: response,
      });
    } else {
      dispatch({
        type: 'GET_USER_INFO_FAIL',
        payload: response.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'GET_USER_INFO_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateProfileAction = (data) => async (dispatch, getState) => {
  try {
    let { accessToken } = getState().auth;
    await authApi.updateUserInfo(data, accessToken);
    const response = await authApi.getUserInfo(accessToken);
    if (!response.error) {
      dispatch({
        type: 'UPDATE_PROFILE_SUCCESS',
        payload: response,
      });
    } else {
      dispatch({
        type: 'UPDATE_PROFILE_FAIL',
        payload: response.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'UPDATE_PROFILE_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};




export const logoutAction = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
  });
};

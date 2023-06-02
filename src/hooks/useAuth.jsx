import { logoutUser } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { post } from "@/utils/request";
import { login as loginService } from "@/services/authencation";
import { loginSuccess, loginStart, loginFail } from "@/redux/authSlice";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "@/utils/toast";
import axios from "axios";
function useAuth() {
  const { currentUser, loading, error } = useSelector((state) => state.auth);
  const token = currentUser?.token;
  const dispatch = useDispatch();
  // const login = (email, password) => dispatch(loginUser(email, password));
  const login = async (email, password) => {
    try {
      dispatch(loginStart());
      const abortController = new AbortController();
      const { signal } = abortController;
      const data = await loginService(email, password, signal);
      console.log({ data });
      if (data?.status === "success") {
        toastSuccess("Login success");
        return dispatch(loginSuccess(data));
      } else {
        toastError(data?.msg);
        return dispatch(loginFail(data));
      }
    } catch (err) {
      console.error(err);
      if (err?.response?.data?.msg) {
        toastError(err.response.data.msg);
        return dispatch(loginFail(err.response.data.msg));
      } else {
        toastError(err.message);
        return dispatch(loginFail(err.message));
      }
    }
  };
  const logout = () => dispatch(logoutUser());
  return {
    currentUser,
    loading,
    error,
    login,
    logout,
    token,
  };
}

export default useAuth;

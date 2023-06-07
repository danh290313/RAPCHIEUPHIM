import { Formik, Form, FastField, FormGroup, Field } from 'formik';
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '~/components/custom-fields/InputField';
import {loginSchema}  from '~/utils/schemas';

import styles from './FormLogin.module.scss';
import classNames from 'classnames/bind';
import { loginAction } from '~/redux/actions/authActions';


const cx = classNames.bind(styles);

function FormLogin() {


   // const { login, error, loading, currentUser } = useAuth();
    const [value, setValue] = useState();
    const handleSubmit = async (value) => { };
    
    const isLogined = useSelector((state) => state.auth.isLogined);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
        console.log(data);
      dispatch(loginAction(data));
    };
  
    useEffect(() => {
      if (isLogined) {
        navigate('/');
      }
    }, [navigate, isLogined]);
  
    // if (user) {
    //   return <Navigate to="/" />;
    // }

    return (
        <>
            <Formik initialValues={{ }} validationSchema={loginSchema} onSubmit={onSubmit}>
                {(formikProps) => {
                    //do somthing here
                    // console.log(values, errors, touched);
                    return (
                        <Form>
                            <div className={cx('w-full')}>
                                <Field label='Email hoặc số điện thoại ' name="username" component={InputField} placeholder="email" />
                            </div>
                            <div className={cx('w-full')}>
                                <Field label='Mật khẩu' type="password" name="password" component={InputField} placeholder="password" />
                            </div>
                
                            <button type="submit" className={cx('btn-submit')}>
                            {false ? (
                            <div className="flex items-center">
                                <ArrowPathIcon className="mr-4 h-5 w-5 animate-spin" />
                                Signing in
                            </div>
                            ) : (
                            " Sign In"
                            )}
                            </button>
                          
                        </Form>
                    );
                }}
            </Formik>

            <span className={cx('forgetPassword')}>
                <Link to={`/forgetPassword`} >  Bạn muốn tìm lại mật khẩu ? </Link>
                
            </span>
        </>
    );
}

export default FormLogin;

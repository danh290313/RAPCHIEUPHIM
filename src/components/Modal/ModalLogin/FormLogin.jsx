import { useState } from 'react';
import { Formik, Form, FastField, FormGroup, Field } from 'formik';
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Link} from 'react-router-dom'

import InputField from '~/components/custom-fields/InputField';
import {loginSchema}  from '~/utils/schemas';

import styles from './FormLogin.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function FormLogin() {
    

   // const { login, error, loading, currentUser } = useAuth();
    const [value, setValue] = useState();
    const handleSubmit = async (value) => {};

    return (
        <>
            <Formik initialValues={{ sdt: '' }} validationSchema={loginSchema} onSubmit={handleSubmit}>
                {(formikProps) => {
                    //do somthing here
                    // console.log(values, errors, touched);
                    return (
                        <Form>
                            <div className={cx('w-full')}>
                                <Field label='Email hoặc số điện thoại ' name="email" component={InputField} placeholder="email" />
                            </div>
                            <div className={cx('w-full')}>
                                <Field label='Mật khẩu' name="password" component={InputField} placeholder="password" />
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

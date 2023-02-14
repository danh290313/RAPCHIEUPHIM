import { useState } from 'react';
import { Formik, Form, FastField, FormGroup, Field } from 'formik';
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Link} from 'react-router-dom'

import InputField from '~/components/custom-fields/InputField';
import {RegisterSchema}  from '~/utils/schemas';

import styles from './FormRegister.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function FormRegister() {
    

   // const { login, error, loading, currentUser } = useAuth();
    const [value, setValue] = useState();
    const handleSubmit = async (value) => {};

    return (
        <>
            <Formik initialValues={{ sdt: '' }} validationSchema={RegisterSchema} onSubmit={handleSubmit}>
                {(formikProps) => {
                    //do somthing here
                    // console.log(values, errors, touched);
                    return (
                        <Form>
                            <div className={cx('w-full')}>
                                <FastField label='Tên' name="name" component={InputField} placeholder="Tên" />
                            </div>
                            <div className={cx('w-full')}>
                                <FastField label='Số điện thoại ' name="phoneNumber" component={InputField} placeholder="Số điện thoại" />
                            </div>
                            <div className={cx('w-full')}>
                                <FastField label='Email hoặc số điện thoại ' name="email" component={InputField} placeholder="email" />
                            </div>
                            <div className={cx('w-full')}>
                                <FastField label='Mật khẩu' name="password" component={InputField} placeholder="password" />
                            </div>
                
                            <button type="submit" className={cx('btn-submit')}>
                            {false ? (
                            <div className="flex items-center">
                                <ArrowPathIcon className="mr-4 h-5 w-5 animate-spin" />
                                Signing up
                            </div>
                            ) : (
                            " Sign Up"
                            )}
                            </button>
                          
                        </Form>
                    );
                }}
            </Formik>

        </>
    );
}

export default FormRegister;

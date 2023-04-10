import { useEffect, useState } from 'react';
import { Formik, Form, FastField, FormGroup, Field } from 'formik';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Link , Navigate , useNavigate} from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useDispatch, useSelector } from 'react-redux';

import InputField from '~/components/custom-fields/InputField';
import { RegisterSchema } from '~/utils/schemas';
import DatePickerField from '~/components/custom-fields/DatePickerField/DatePickerField';
import styles from './FormRegister.module.scss';
import { registerAction } from '~/redux/actions/authActions';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function FormRegister() {
    // const { login, error, loading, currentUser } = useAuth();
    const [value, setValue] = useState();
    const username = useSelector((state) => state.auth.username);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (value) => {

        const reContructVal = {
            fullName: value.name,
            username: value.username,
            birthday: value.birthday,
            phone_number: value.phone_number,
            address: value.address,
            password: value.password,
            roles: [
                {
                    "id": 1,
                    "name": "ROLE_CLIENT"
                }
            ] 
          };
        dispatch(registerAction(reContructVal));
    };

    useEffect(() => {
        if (username) {
          navigate('/');
        }
      }, [navigate, username]);

    return (
        <>
            <Formik initialValues={{  }} validationSchema={RegisterSchema} onSubmit={handleSubmit}>
                {(formikProps) => {
                    //do somthing here
                    // console.log(values, errors, touched);
                    return (
                        <Form>
                            <div className={cx('w-full')}>
                                <FastField
                                    label="Họ và Tên"
                                    name="name"
                                    component={InputField}
                                    placeholder="Họ và Tên"
                                />
                            </div>
                            <div className={cx('w-full')}>
                                <FastField
                                    label="Số điện thoại "
                                    name="phone_number"
                                    component={InputField}
                                    placeholder="Số điện thoại"
                                />
                            </div>
                            <div className={cx('w-full')}>
                                <FastField label="Email" name="username" component={InputField} placeholder="email" />
                            </div>

                            <div className={cx('w-full')}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <FastField
                                        name="birthday"
                                        component={DatePickerField}
                                        label="Day of birth"
                                        inputFormat="DD/MM/YYYY"
                                    />
                                </LocalizationProvider>
                            </div>

                            <div className={cx('w-full')}>
                                <FastField
                                    label="Mật khẩu"
                                    name="password"
                                    component={InputField}
                                    placeholder="password"
                                />
                            </div>

                            <div className={cx('w-full')}>
                                <FastField
                                    label="Địa chỉ"
                                    name="address"
                                    component={InputField}
                                    placeholder="address"
                                />
                            </div>

                            <button type="submit" className={cx('btn-submit')}>
                                {false ? (
                                    <div className="flex items-center">
                                        <ArrowPathIcon className="mr-4 h-5 w-5 animate-spin" />
                                        Signing up
                                    </div>
                                ) : (
                                    ' Sign Up'
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

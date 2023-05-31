import { FormGroup, Grid, TextField, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Alert, AlertTitle } from '@mui/material';
import classNames from 'classnames/bind';
import { FastField, Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import InputField from '~/components/custom-fields/InputField';
import SelectMuiField from '~/components/custom-fields/SelectMuiField/SelectMuiField';

import { toastError, toastSuccess } from '~/utils/toast';
import styles from './Profile.module.scss';
import React, { useEffect, useState } from 'react';
import DatePickerField from '~/components/custom-fields/DatePickerField/DatePickerField';
import { useNavigate } from 'react-router-dom';

import { customerSchema } from '~/utils/schemas';
import authApi from '~/api/authApi';
import { ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);

export function Profile() {
  const currentUser = useSelector(state => state.auth.user);
  const token = currentUser?.accessToken;

  const nav = useNavigate();
  const [customer, setCustomer] = useState();

  const userId = currentUser?.id;
  const id = customer?.id;

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await authApi.getUserInfo(userId, token);
        setCustomer(res);
      } catch (error) {}
    };
    getUserInfo();
  }, []);

  const initialValues = {
    name: customer?.name,
    phoneNumber: customer?.phone_number,
    birthday: customer?.birthday,
    address: customer?.address,
  };

  const handleSubmit = value => {
    const reContructVal = {
      id: id,
      name: value.name,
      phone_number: value.phoneNumber,
      birthday: value.birthday,
      address: value.address,
    };

    const updateUserInfo = async () => {
      const response = await authApi.updateUserInfo(id, reContructVal, token);
      response.status === 200
        ? toastSuccess(response.message)
        : toastError(response.message);
    };
    updateUserInfo();
  };

  return (
    customer && (
      <div className={cx('wrapper')}>
        <ToastContainer />
        <h4 class='text-red-700 flex justify-center'>Thông tin cá nhân </h4>
        {/* //<div className={cx('title')}>Thông tin cá nhân</div> */}
        <div className={cx('body')}>
          <Formik
            initialValues={initialValues}
            validationSchema={customerSchema}
            onSubmit={handleSubmit}
            validateOnBlur={true}
          >
            {props => {
              return (
                <>
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <FastField
                            name='name'
                            component={InputField}
                            label='Họ & tên'
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name='phoneNumber'
                            component={InputField}
                            label='Số điện thoại'
                          />
                        </FormGroup>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Field
                              name='birthday'
                              component={DatePickerField}
                              label='Ngày sinh'
                              inputFormat='DD/MM/YYYY'
                            />
                          </LocalizationProvider>
                        </FormGroup>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name='address'
                            component={InputField}
                            label='Địa chỉ'
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                    <div className={cx('btn-submit')}>
                      <button
                        type='submit'
                        className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    )
  );
}

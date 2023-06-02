import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import * as Yup from 'yup';

import './ForgetPassword.scss';
import authApi from '../../api/authApi';

import { toastError, toastSuccess } from '~/utils/toast';

function ForgetPasswordForm() {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Địa chỉ email không hợp lệ')
      .required('Vui lòng nhập địa chỉ email'),
  });

  const handleSubmit = values => {
    console.log('object', values);
    const resetPassword = async () => {
      const res = await authApi.resetPassword(values?.email);
      res.status === 200 ? toastSuccess(res.message) : toastError(res.message);
    };
    resetPassword();
  };

  return (
    <>
      <div className='title mb-5 '>
        <h1>Bạn muốn tìm lại mật khẩu</h1>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label
                for='helper-text'
                class='block mb-2 text-lg font-medium text-gray-900 dark:text-white'
              >
                <em>*</em>
                Email hoặc số điện thoại
              </label>
              <Field
                type='email'
                name='email'
                class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
              <ErrorMessage name='email' component='div' class='text-red-500' />
            </div>

            <button
              type='submit'
              class='mt-4 bg-red-500 text-white py-2 w-full rounded-full flex items-center justify-center'
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <span className='login'>
        <Link to={`/customer/login`}> Quay lại trang đăng nhập </Link>
      </span>
    </>
  );
}

export default ForgetPasswordForm;

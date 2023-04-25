import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import FieldsetContainer from '../UI/FieldsetContainer/FieldsetContainer';
import FormikControl from '../UI/FormikControl';
const branchList = [
  {
    key: 'CGV Hùng Vương Plaza',
    value: 'branch1',
  },
  {
    key: 'CGV Thủ Đức',
    value: 'branch2',
  },
  { key: 'CGV Thảo Điền Pearl', value: 'branch3' },
];
const timeList = [
  { key: '10:30 AM', value: '10:30' },
  { key: '1:00 PM', value: '13:00' },
  { key: '7:30 PM', value: '19:30' },
];

const validate = values => {
  const errors = {};
  if (!values.time) {
    errors.time = 'Xin vui lòng chọn ngày';
  }

  return errors;
};
const initialValues = {
  date: new Date(),
  branch: branchList[0].value,
  time: '',
};

const onSubmitHandler = values => {
  console.log(
    '🚀 ~ file: BuyTicketStep1Form.jsx:8 ~ onSubmit ~ values:',
    values
  );
};
const BuyTicketStep1Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validate={validate}
    >
      {formik => {
        return (
          <Form>
            <FieldsetContainer legend='Chọn Ngày'>
              <FormikControl name='date' control='date' />
            </FieldsetContainer>
            <FieldsetContainer legend='Chọn Rạp'>
              <FormikControl
                control='largeRadios'
                name='branch'
                options={branchList}
              />
            </FieldsetContainer>
            <FieldsetContainer legend='Chọn Khung Giờ'>
              <FormikControl
                control='largeRadios'
                name='time'
                options={timeList}
              />
            </FieldsetContainer>
            <div className='my-3 text-end'>
              <Button variant='success' type='submit'>
                Tiếp tục
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BuyTicketStep1Form;

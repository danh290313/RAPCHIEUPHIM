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
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
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

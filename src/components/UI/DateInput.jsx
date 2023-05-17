import { Field } from 'formik';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DateInput = props => {
  const { name, label = undefined, onChangeHandler = null, ...rest } = props;
  return (
    <div className='form-control'>
      <Field name={name} {...rest}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <ReactDatePicker
              id={name}
              {...field}
              selected={value}
              minDate={new Date()}
              onChange={val => {
                setFieldValue(name, val);
                console.log(
                  '🚀 ~ file: DateInput.jsx:21 ~ DateInput ~ val:',
                  val
                );
                onChangeHandler(val);
              }}
              dateFormat='dd/MM/yyy'
            />
          );
        }}
      </Field>
    </div>
  );
};

export default DateInput;

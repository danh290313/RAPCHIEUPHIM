import { Field } from 'formik';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'react-datepicker/dist/react-datepicker.css';

dayjs.extend(customParseFormat);

const disabledDate = current => {
  return current < dayjs().subtract(1, 'day').endOf('day');
};
const DateInput = props => {
  const { name, label = undefined, onChangeHandler = null, ...rest } = props;
  return (
    <Field name={name} {...rest}>
      {({ form, field }) => {
        const { setFieldValue } = form;
        const { value } = field;
        return (
          <DatePicker
            id={name}
            {...field}
            allowClear={false}
            disabledDate={disabledDate}
            onChange={(date, dateString) => {
              setFieldValue(name, date);
              disabledDate(date);
              onChangeHandler(date);
            }}
          />
        );
      }}
    </Field>
  );
};

export default DateInput;

import DateInput from './DateInput';
import LargeRadioButtons from './LargeRadioButtons';
const FormikControl = props => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
    case 'textarea':
      break;
    case 'date':
      return <DateInput {...rest} />;
    case 'largeRadios':
      return <LargeRadioButtons {...rest} />;
    default:
  }
};

export default FormikControl;

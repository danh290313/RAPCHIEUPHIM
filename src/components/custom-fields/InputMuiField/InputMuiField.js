import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { FormGroup, Label } from 'reactstrap';
import styles from './InputMuiFied.module.scss';
import classNames from 'classnames/bind';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
const cx = classNames.bind(styles);
InputMuiFied.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputMuiFied.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};
// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "var(--primary)",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "yellow",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       border: "var(--cool-border)",
//     },
//     "&:hover fieldset": {
//       borderColor: "var(--primary)",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "green",
//     },
//   },
// });

function InputMuiFied(props) {
  const { field, form, type, label, placeholder, disabled, autoFocus } = props;
  const { name } = field;

  const { errors, touched, setTouched, setFieldError } = form;
  const showError = errors[name] && touched[name]; // có message lỗi và touched=true thì trả ra true

  return (
    <FormGroup>
      <TextField
        label={label}
        //disabled={disabled}
        placeholder={placeholder}
        type={type}
        autoFocus={autoFocus}
        sx={{
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: showError
              ? '1px solid red'
              : 'var(--cool-border) !important',
          },
          '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
            color: 'var(--primary)',
          },
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: showError
              ? '1px solid red'
              : '2px solid var(--primary) !important',
          },
          '& .MuiOutlinedInput-root:hover fieldset': {
            borderColor: !showError && '#333 !important',
          },
        }}
        InputLabelProps={{
          style: {
            // fontSize: "1.4rem",
            color: showError && 'red',
          },
          shrink: true,
        }}
        fullWidth
        InputProps={{
          style: {
            // fontSize: "1.4rem",
            borderColor: showError ? 'red' : '#333',
          },
          ...field,
        }}
      />
      {showError && <span className={cx('error')}>{errors[name]}</span>}
    </FormGroup>
  );
}

export default InputMuiFied;

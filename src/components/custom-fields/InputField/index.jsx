import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import styles from './InputField.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled, autoFocus } = props;
  const { name } = field;
  const { errors, touched } = form;

  const showError = errors[name]; // có message lỗi và touched=true thì trả ra true
  // console.log('form: ', form);
  // console.log('field: ', field);
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <input
        id={name}
        {...field} // field có 4 thuộc tính là name , value, onChange,onBlur
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
        className={cx('input', { invalid: showError })}
        autoFocus={autoFocus}
      />

      <span className={cx('error')}>{errors[name]}</span>
    </FormGroup>
  );
}

export default InputField;

import classNames from 'classnames/bind';
import { ErrorMessage, Field } from 'formik';
import { Fragment } from 'react';
import styles from './LargeRadioButtons.scss';
import TextError from './TextError';
const cx = classNames.bind(styles);
const LargeRadioButtons = props => {
  const { name, options, onChangeHandler = null, ...rest } = props;
  return (
    <Fragment>
      <div className={cx('toggle')}>
        <Field name={name} {...rest}>
          {({ form, field }) => {
            const { setFieldValue } = form;

            return options?.map(option => {
              return (
                <Fragment key={option.key}>
                  <input
                    type='radio'
                    {...field}
                    id={option.value}
                    value={option.value}
                    checked={option.value == field.value}
                    onChange={e => {
                      setFieldValue(name, option.value);
                      if (name === 'branch') setFieldValue('time', '');
                      if (onChangeHandler) {
                        onChangeHandler(e.target.value);
                      }
                    }}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </Fragment>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </Fragment>
  );
};

export default LargeRadioButtons;

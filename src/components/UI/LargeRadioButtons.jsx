import classNames from 'classnames/bind';
import { Field } from 'formik';
import { Fragment } from 'react';
import styles from './LargeRadioButtons.scss';
const cx = classNames.bind(styles);
const LargeRadioButtons = props => {
  const { name, options, ...rest } = props;
  return (
    <div className={cx('toggle')}>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <Fragment key={option.key}>
                <input
                  type='radio'
                  {...field}
                  id={option.value}
                  value={option.value}
                  checked={option.value === field.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
};

export default LargeRadioButtons;

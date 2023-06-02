import styles from './FieldsetContainer.scss';
const FieldsetContainer = props => {
  const { legend } = props;
  return (
    <fieldset className='mt-2'>
      <legend>{legend}</legend>
      {props.children}
    </fieldset>
  );
};

export default FieldsetContainer;

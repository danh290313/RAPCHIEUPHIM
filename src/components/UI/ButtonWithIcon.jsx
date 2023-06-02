import { Button, Stack } from 'react-bootstrap';

const ButtonWithIcon = props => {
  const { variant, styles, btnContent, btnContentStyles, gap, onClickHandler } =
    props;

  const icon = props.children;
  return (
    <Button onClick={onClickHandler} variant={variant} className={styles}>
      <Stack direction='horizontal' gap={gap}>
        {icon}
        <span className={btnContentStyles}>{btnContent}</span>
      </Stack>
    </Button>
  );
};

export default ButtonWithIcon;

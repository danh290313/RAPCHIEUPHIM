import React, { useEffect, useImperativeHandle, useState } from 'react';
import { Button, Modal } from 'antd';
import BuyTicketStep1Form from './BuyTicketStep1Form';

const BuyTicketModal = React.forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useImperativeHandle(ref, () => {
    return {
      showModal: handleShow,
    };
  });

  return (
    <>
      <Modal
        title='Đặt vé xem phim'
        centered
        open={show}
        onOk={() => {
          const buttonElement = document.getElementById('btn-submit-step1');
          console.log('btn element: ', buttonElement);
          buttonElement.click();
        }}
        onCancel={handleClose}
        okText='Đặt vé'
        cancelText='Hủy'
        
        okButtonProps={{ className: 'blue-button' }}
      >
        <BuyTicketStep1Form />
      </Modal>
    </>
  );
});

export default BuyTicketModal;

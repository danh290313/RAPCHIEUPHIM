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
        onOk={() => console.log('ok modal clicked')}
        onCancel={handleClose}
      >
        <BuyTicketStep1Form />
      </Modal>
      {/* <Modal size='xl' show={show} onHide={handleClose} scrollable> */}
      {/*   <Modal.Header closeButton style={{ backgroundColor: '#eee' }}> */}
      {/*     <Modal.Title className='text-uppercase text-secondary'> */}
      {/*       Đặt vé xem phim */}
      {/*     </Modal.Title> */}
      {/*   </Modal.Header> */}
      {/*   <Modal.Body style={{ backgroundColor: '#eee' }}> */}
      {/*     <BuyTicketStep1Form /> */}
      {/*   </Modal.Body> */}
      {/* </Modal> */}
    </>
  );
});

export default BuyTicketModal;

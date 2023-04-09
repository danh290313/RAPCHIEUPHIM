import Spinner from 'react-bootstrap/Spinner';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LoadingModal = () => {
  return (
    <>
      <Modal show={true} size='sm' backdrop='static' keyboard={false} centered>
        <Modal.Body className='text-center'>
          <Spinner animation='grow' variant='danger' />
          <div className='text-danger fs-5'>Đang tải dữ liệu</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoadingModal;

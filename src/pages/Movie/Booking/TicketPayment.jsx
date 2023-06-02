import {
  Button,
  Card,
  Col,
  Divider,
  Image,
  Radio,
  Row,
  Space,
  Typography,
} from 'antd';
import dayjs from 'dayjs';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleMoney } from './BookingSeat';
import AtmCard from '~/assets/Images/atm-card.png';
import VisaCard from '~/assets/Images/visa.png';
import MomoCard from '~/assets/Images/momo.webp';
import ZaloPay from '~/assets/Images/zalopay.png';
import ShoppeePay from '~/assets/Images/shoppee.jpg';
import * as ticketActions from '~/redux/actions/ticketActions';

const imgStyle = {
  width: '30px',
  height: '30px',
};

const initialMovieInfo = { name: '', smallImageURl: '' };
const initialScheduleInfo = {
  price: 3000,
  branchName: '',
  startDate: '',
  startTime: '',
  room: { name: '' },
};

const TicketPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState(1);
  const {
    state = {
      movieInfo: initialMovieInfo,
      scheduleInfo: initialScheduleInfo,
      totalMoney: 0,
    },
  } = useLocation();
  const { movieInfo, scheduleInfo } = state;
  const ticketSeats = useSelector(state => state.ticket.seats);
  console.log('scheduleInfo', scheduleInfo);
  console.log(
    '🚀 ~ file: TicketPayment.jsx:24 ~ TicketPayment ~ ticketSeats:',
    ticketSeats
  );
  const onChangePaymentMethodHandler = e => {
    setPaymentMethod(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paymentHandler = e => {
    // lưu lại đã chọn cách thanh toán nào vào redux
    ticketActions.addPaymentMethod(dispatch, paymentMethod);
    navigate('/movie/ticket-payment/qrcode', {
      replace: true,
      state: { totalMoney: state.totalMoney },
    });
  };
  return (
    <div style={{ padding: '2rem 0rem' }}>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title
            level={3}
            style={{
              color: '#fff',
              background: '#000',
              textTransform: 'uppercase',
            }}
          >
            Thanh toán
          </Title>
        </Col>
      </Row>
      <Row gutter={[10, 8]}>
        <Col span={16} className='gutter-row'>
          <Card size='small' title='HÌNH THỨC THANH TOÁN'>
            <Radio.Group
              onChange={onChangePaymentMethodHandler}
              value={paymentMethod}
            >
              <Space direction='vertical'>
                <Radio value={1}>
                  <div className='flex items-center'>
                    <img src={AtmCard} style={imgStyle} />
                    <span className='block ps-1'>ATM card (Thẻ nội địa)</span>
                  </div>
                </Radio>
                <Radio value={2}>
                  <div className='flex items-center'>
                    <img src={VisaCard} style={imgStyle} />
                    <span className='block ps-1'>
                      Thẻ quốc tế (Visa, Master, Amex, JCB)
                    </span>
                  </div>
                </Radio>
                <Radio value={3}>
                  <div className='flex items-center'>
                    <img src={MomoCard} style={imgStyle} />
                    <span className='block ps-1'>Ví MoMo</span>
                  </div>
                </Radio>
                <Radio value={4}>
                  <div className='flex items-center'>
                    <img src={ZaloPay} style={imgStyle} />
                    <span className='block ps-1'>ZaloPay</span>
                  </div>
                </Radio>
                <Radio value={5}>
                  <div className='flex items-center'>
                    <img src={ShoppeePay} style={imgStyle} />
                    <span className='block ps-1'>ShopeePay</span>
                  </div>
                </Radio>
              </Space>
            </Radio.Group>
          </Card>
        </Col>
        <Col span={8}>
          <Space
            direction='vertical'
            size={'middle'}
            style={{ display: 'flex' }}
          >
            <Card
              size='small'
              title='Tổng cộng'
              headStyle={{ textAlign: 'center' }}
            >
              <Card.Grid
                style={{ width: '25%', padding: '0.9rem' }}
                hoverable={false}
              >
                <Typography.Text type='secondary'>STD</Typography.Text>
              </Card.Grid>
              <Card.Grid
                style={{ width: '75%', padding: '0.9rem' }}
                hoverable={false}
              >
                <Typography.Text
                  type='secondary'
                  style={{ paddingLeft: '40px' }}
                >
                  {state.totalMoney} VND
                </Typography.Text>
              </Card.Grid>
              <Card.Grid
                style={{
                  width: '100%',
                  textAlign: 'center',
                  padding: '0.9rem',
                }}
                hoverable={false}
              >
                <Typography.Text strong>{state.totalMoney} VND</Typography.Text>
              </Card.Grid>
            </Card>
            <Card
              size='small'
              title='Khuyến mãi'
              headStyle={{ textAlign: 'center' }}
              style={{ textAlign: 'center' }}
            >
              <Typography.Text strong style={{ textAlign: 'center' }}>
                0.00 VND
              </Typography.Text>
            </Card>
            <Card
              size='small'
              title='Tổng số tiền thanh toán'
              headStyle={{ textAlign: 'center' }}
              style={{ textAlign: 'center' }}
            >
              <Typography.Text strong style={{ textAlign: 'center' }}>
                {state.totalMoney} VND
              </Typography.Text>
            </Card>
          </Space>
        </Col>
      </Row>
      <div
        className='booked-seats-and-total-money d-flex justify-content-between rounded border-2 bg-white shadow-gray-50 shadow mx-auto my-3'
        style={{ maxWidth: '924px' }}
      >
        <div className='booked-seats-and-total-money--movie-info d-flex gap-3'>
          <div className='left '>
            <img src={movieInfo.smallImageURl} alt='' width='100' />
          </div>
          <div className='right text-uppercase pt-3'>{movieInfo.name}</div>
        </div>
        <div className='booked-seats-and-total-money--schedule-info-seats pt-3'>
          <div className='d-flex'>
            <div className='fs-small' style={{ paddingRight: '60px' }}>
              Rạp:
            </div>
            <div className='fw-bold'>{scheduleInfo.branchName}</div>
          </div>
          <div className='d-flex gap-2 '>
            <div className='fs-small'>Giờ chiếu:</div>
            <div className='fw-bold'>{`${scheduleInfo.startTime}, ${dayjs(
              scheduleInfo.startDate
            ).format('DD/MM/YYYY')}`}</div>
          </div>
          <div className='d-flex gap-4'>
            <div className='fs-small' style={{ paddingRight: '20px' }}>
              Phòng:
            </div>
            <div
              className='fw-bold'
              style={{ marginLeft: '1px', fontWeight: 'bold' }}
            >
              {scheduleInfo.room.name}
            </div>
          </div>
          <div className='d-flex gap-4'>
            <div className='fs-small' style={{ paddingRight: '22px' }}>
              Ghế:
            </div>
            <div className='fw-bold' style={{ marginLeft: '15px' }}>
              {ticketSeats.length !== 0
                ? ticketSeats.reduce(
                    (prev, cur) =>
                      prev === '' ? prev + cur.name : prev + ', ' + cur.name,
                    ''
                  )
                : 'Bạn chưa chọn ghế nào.'}
            </div>
          </div>
        </div>
        <div className='booked-seats-and-total-money--total-money pt-3 pe-3'>
          <div className='d-flex gap-2'>
            <div className='fs-small'>Giá mỗi vé:</div>
            <div className='fw-bold'>{handleMoney(scheduleInfo.price)} VND</div>
          </div>
          <div className='d-flex gap-2'>
            <div className='fs-small'>Tổng tiền:</div>
            <div className='fw-bold'>{state.totalMoney} VND</div>
          </div>
          <div className='d-flex flex-row-reverse my-3'>
            <Button
              type='primary'
              className='blue-button'
              onClick={paymentHandler}
            >
              Tiếp tục
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPayment;

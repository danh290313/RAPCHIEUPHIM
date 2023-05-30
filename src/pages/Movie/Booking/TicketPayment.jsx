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
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleMoney } from './BookingSeat';

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
    state = { movieInfo: initialMovieInfo, scheduleInfo: initialScheduleInfo },
  } = useLocation();
  const { movieInfo, scheduleInfo } = state;
  const ticketSeats = useSelector(state => state.ticket.seats);
  console.log(
    '🚀 ~ file: TicketPayment.jsx:24 ~ TicketPayment ~ ticketSeats:',
    ticketSeats
  );
  const onChangePaymentMethodHandler = e => {
    setPaymentMethod(e.target.value);
  };

  const navigate = useNavigate();
  const paymentHandler = e => {
    navigate('/movie/ticket-payment/qrcode');
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
                <Radio value={1}>ATM card (Thẻ nội địa)</Radio>
                <Radio value={2}>Thẻ quốc tế (Visa, Master, Amex, JCB)</Radio>
                <Radio value={3}>Ví MoMo</Radio>
                <Radio value={4}>ZaloPay</Radio>
                <Radio value={5}>ShopeePay</Radio>
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
                  style={{ paddingLeft: '1rem' }}
                >
                  210.000 VND
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
                <Typography.Text strong>210.000 VND</Typography.Text>
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
                210.000 VND
              </Typography.Text>
            </Card>
          </Space>
        </Col>
      </Row>
      <Card size='small' style={{ marginTop: '2rem' }}>
        <Row align='top'>
          <Col span={2}>col-2</Col>
          <Col span={20}>
            <Space direction='horizontal' align='start'>
              <Space
                style={{ borderRight: '1x dashed #000', maxWidth: '350px' }}
                align='start'
              >
                <Image height={150} src={movieInfo.smallImageURl} />
                <Typography.Text
                  style={{ textTransform: 'uppercase' }}
                  type='secondary'
                >
                  {movieInfo.name}
                </Typography.Text>
              </Space>
              <Space direction='vertical'>
                <Space>
                  <Typography.Text>Rạp</Typography.Text>
                  <Typography.Text>{scheduleInfo.branchName}</Typography.Text>
                </Space>
                <Space>
                  <Typography.Text>Suất chiếu</Typography.Text>
                  <Typography.Text>{`${scheduleInfo.startTime.substring(
                    0,
                    scheduleInfo.startTime.lastIndexOf(':')
                  )}, ${scheduleInfo.startDate}`}</Typography.Text>
                </Space>
                <Space>
                  <Typography.Text>Phòng chiếu</Typography.Text>
                  <Typography.Text>{scheduleInfo.room.name}</Typography.Text>
                </Space>
                <Space>
                  <Typography.Text>Ghế</Typography.Text>
                  <Typography.Text>
                    {ticketSeats.length !== 0
                      ? ticketSeats.reduce(
                          (prev, cur) =>
                            prev === ''
                              ? prev + cur.name
                              : prev + ', ' + cur.name,
                          ''
                        )
                      : 'Bạn chưa chọn ghế nào.'}
                  </Typography.Text>
                </Space>
              </Space>
              <div className=''>
                <Divider type='vertical' />
              </div>
              <Space direction='vertical'>
                <Space>
                  <Typography.Text>Giá vé</Typography.Text>
                  <Typography.Text>
                    {handleMoney(scheduleInfo.price)} VND
                  </Typography.Text>
                </Space>
                <Space>
                  <Typography.Text>Khuyến mãi</Typography.Text>
                  <Typography.Text>0.00 VND</Typography.Text>
                </Space>
                <Space>
                  <Typography.Text>Tổng tiền</Typography.Text>
                  <Typography.Text>
                    {handleMoney(ticketSeats.length * scheduleInfo.price)} VND
                  </Typography.Text>
                </Space>
              </Space>
            </Space>
          </Col>
          <Col span={2} flex>
            <Button type='primary' onClick={paymentHandler}>
              Thanh toán
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default TicketPayment;

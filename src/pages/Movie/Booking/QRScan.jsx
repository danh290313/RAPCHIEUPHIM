import { Col, Divider, QRCode, Row, Space, Typography } from 'antd';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CGVImage from '~/assets/Images/cgv.png';
import MomoImage from '~/assets/Images/momo.webp';
import VisaImage from '~/assets/Images/visa.png';
import DomesticCardImage from '~/assets/Images/atm-card.png';
import ZaloPayImage from '~/assets/Images/zalopay.png';
import ShopeePayImage from '~/assets/Images/shoppee.jpg';

const leftStyle = {
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
};

const imageStyle = {
  height: '40px',
  width: '40px',
};

const QRScan = () => {
  const afterFiveMinutesFromNow = new Date().getTime() + 300000;
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const { state } = useLocation();

  const paymentMethod = useSelector(state => state.ticket.paymentMethod);

  console.log('typeof ', typeof paymentMethod);
  console.log('payment method: ', paymentMethod);
  let cardObj = { cardImage: '', cardText: '', cardColor: '' };
  switch (paymentMethod) {
    case 1:
      cardObj.cardImage = DomesticCardImage;
      cardObj.cardText = 'ATM ngân hàng nội địa';
      cardObj.cardColor = '#13c2c2';
      break;
    case 2:
      cardObj.cardImage = VisaImage;
      cardObj.cardText = 'Visa, Master, Amex, JCB';
      cardObj.cardColor = '#030852';
      break;
    case 3:
      cardObj.cardImage = MomoImage;
      cardObj.cardText = 'MoMo';
      cardObj.cardColor = '#c41d7f';
      break;
    case 4:
      cardObj.cardImage = ZaloPayImage;
      cardObj.cardText = 'ZaloPay';
      cardObj.cardColor = '#1677ff';
      break;
    case 5:
      cardObj.cardImage = ShopeePayImage;
      cardObj.cardText = 'Shopee Pay';
      cardObj.cardColor = '#d4380d';
      break;
    default:
      break;
  }

  const countDown = useCallback(() => {
    const now = new Date().getTime();
    const second = 1000;
    const minute = second * 60;
    const gap = afterFiveMinutesFromNow - now;
    let textMinute = Math.floor(gap / minute);
    textMinute = textMinute >= 10 ? textMinute : '0' + textMinute;

    let textSecond = Math.floor((gap % minute) / second);
    textSecond = textSecond >= 10 ? textSecond : '0' + textSecond;
    if (Number(textMinute) < 0 && Number(textSecond) < 0) return;
    setMinutes(textMinute);
    setSeconds(textSecond);
  }, []);
  setInterval(countDown, 1000);
  // console.log('minutes', minutes);
  // console.log('second', seconds);
  let temp;
  if (parseInt(minutes) <= 0 && parseInt(seconds) <= 0) {
    temp = '00:00';
  } else {
    temp = `${minutes}:${seconds}`;
  }
  // console.log('🚀 ~ file: QRScan.jsx:43 ~ QRScan ~ temp:', temp);

  return (
    <Row
      style={{
        margin: '2rem auto',
        border: '1px solid #ddd',
        borderRadius: '10px',
        maxWidth: '750px',
      }}
    >
      <Col span={8}>
        <Row>
          <Col span={24}>
            <Space
              direction='vertical'
              style={{
                display: 'flex',
                background: cardObj.cardColor,
                color: '#fff',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                height: '100%',
              }}
            >
              <div
                style={{
                  ...leftStyle,
                  padding: '1.5rem 0 1rem .7rem',
                  borderBottom: '1px solid #aaa',
                }}
              >
                <Typography.Text
                  type='secondary'
                  style={{ color: '#fff', fontSize: '1.1rem' }}
                >
                  Đơn hàng hết hạn sau
                </Typography.Text>
                <Typography.Text style={{ fontSize: '1.5rem', color: '#fff' }}>
                  {temp}
                </Typography.Text>
              </div>
              <div style={{ ...leftStyle, padding: '1rem 0 1rem .7rem' }}>
                <Typography.Text
                  type='secondary'
                  style={{
                    fontSize: '0.8rem',
                    color: '#ddd',
                  }}
                >
                  Nhà cung cấp
                </Typography.Text>
                <Typography.Text
                  style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                  }}
                >
                  CGV
                </Typography.Text>
              </div>
              <hr />
              <div style={{ ...leftStyle, padding: '1rem 0 1rem .7rem' }}>
                <Typography.Text
                  type='secondary'
                  style={{ fontSize: '0.8rem', color: '#ddd' }}
                >
                  Số tiền
                </Typography.Text>
                <Typography.Text style={{ color: '#fff', fontSize: '1.2rem' }}>
                  {state.totalMoney} VND
                </Typography.Text>
              </div>
              <hr />
              <div
                style={{
                  ...leftStyle,
                  padding: '1rem 0 2rem .7rem',
                  color: '#fff',
                  fontSize: '0.8rem',
                }}
              >
                <Typography.Text
                  type='secondary'
                  style={{ fontSize: '0.8rem', color: '#ddd' }}
                >
                  Đơn hàng
                </Typography.Text>
                <Typography.Text style={{ color: '#fff', fontSize: '1.2rem' }}>
                  123
                </Typography.Text>
              </div>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col span={16} style={{ padding: '1rem' }}>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <img src={CGVImage} alt='CGV Icon' />
            </div>
            <div>
              <img src={cardObj.cardImage} alt='MoMo Icon' style={imageStyle} />
            </div>
          </div>
          <Divider />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography.Title level={3} style={{ marginBottom: '2rem' }}>
              Quét mã để thanh toán
            </Typography.Title>
            <QRCode value={'http://localhost:8080/api/qrcode/1'} />
            <Typography.Paragraph style={{ marginTop: '1.5rem' }}>
              Sử dụng App{' '}
              <Typography.Text strong>{cardObj.cardText}</Typography.Text> hoặc{' '}
              <br />
              ứng dụng Camera hỗ trợ QR code để quét mã
            </Typography.Paragraph>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default QRScan;

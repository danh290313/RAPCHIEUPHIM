import { Formik, Form } from 'formik';
import { Form as AntdForm, Button } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import * as TicketActions from '~/redux/actions/ticketActions';
import showtimeApi from '../../api/showtimeApi';
import FormikControl from '../UI/FormikControl';

dayjs.extend(dayOfYear);

const validate = values => {
  const errors = {};
  if (!values.time) {
    errors.time = 'Xin vui lòng chọn giờ';
  }
  if (!values.branch) {
    errors.branch = 'Xin vui lòng chọn rạp';
  }

  return errors;
};

let scheduleWithSameName = {};
const timeListObjOfEachBranch = {};

const BuyTicketStep1Form = () => {
  const now = dayjs();
  const [date, setDate] = useState(now);
  const movieId = useSelector(state => state.ticket.movieId);
  const [branchList, setBranchList] = useState([]);
  const [branchId, setBranchId] = useState(null);
  const [timeList, setTimeList] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = useCallback(
    values => {
      const { branch, time } = values;
      console.log(
        '🚀 ~ file: BuyTicketStep1Form.jsx:41 ~ BuyTicketStep1Form ~ time:',
        time
      );
      console.log(
        '🚀 ~ file: BuyTicketStep1Form.jsx:41 ~ BuyTicketStep1Form ~ branch:',
        branch
      );
      let branchObj = null;
      for (let key in scheduleWithSameName) {
        if (scheduleWithSameName[key].branchId === branch) {
          branchObj = scheduleWithSameName[key];
          break;
        }
      }
      for (let i = 0; i < branchObj.schedules.length; ++i) {
        console.log(
          '🚀 ~ file: BuyTicketStep1Form.jsx:59 ~ BuyTicketStep1Form ~ (branchObj.schedules[i]:',
          branchObj.schedules[i]
        );

        if (branchObj.schedules[i].startTime === time) {
          TicketActions.addScheduleAction(
            dispatch,
            branchObj.schedules[i].scheduleId
          );
        }
      }

      navigate('/movie/booking/seat');
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    setTimeList(timeListObjOfEachBranch[branchId]);
  }, [branchId]);

  useEffect(() => {
    const getScheduleFromMovieIdAndStartDate = async dateNotConvert => {
      console.log('date not convert', dateNotConvert);
      console.log('date to db', dateNotConvert.format('YYYY-MM-DD'));
      const data = await showtimeApi.getScheduleAndStartTime(
        movieId,
        dateNotConvert.format('YYYY-MM-DD')
      );
      console.log('data', data);
      // giờ lặp qua mảng  data để sắp xếp lại các shedule mà có cùng tên rạp -> (bỏ vào 1 mảng)
      scheduleWithSameName = {};
      data?.forEach(item => {
        const { name } = item.branch;
        if (name in scheduleWithSameName) {
          scheduleWithSameName[name].schedules.push({
            scheduleId: item.id,
            startTime: item.startTime,
          });
        } else {
          scheduleWithSameName[name] = {
            branchId: item.branch.id,
            schedules: [{ scheduleId: item.id, startTime: item.startTime }],
          };
        }
      });
      const tempbranchList = [];
      for (let [objKey, objValue] of Object.entries(scheduleWithSameName)) {
        console.log(objKey, objValue);
        tempbranchList.push({ key: objKey, value: objValue.branchId });
        const timeListEachBranch = objValue.schedules.map(schedule => {
          return { key: schedule.startTime, value: schedule.startTime };
        });
        timeListObjOfEachBranch[objValue.branchId] = timeListEachBranch;
      }
      setBranchList(tempbranchList);
      setBranchId(tempbranchList[0]?.value);
      setTimeList(timeListObjOfEachBranch[tempbranchList[0]?.value]);
    };
    getScheduleFromMovieIdAndStartDate(date);
  }, [date, movieId]);

  const initialValues = {
    date: now,
    branch: branchId,
    time: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validate={validate}
    >
      {formik => {
        return (
          <Form>
            <AntdForm layout='vertical'>
              <AntdForm.Item label='Chọn ngày'>
                <FormikControl
                  name='date'
                  control='date'
                  onChangeHandler={setDate}
                />
              </AntdForm.Item>
              {branchList.length !== 0 ? (
                <>
                  <AntdForm.Item label='Chọn rạp'>
                    <FormikControl
                      control='largeRadios'
                      name='branch'
                      options={branchList}
                      onChangeHandler={setBranchId}
                    />
                  </AntdForm.Item>
                  <AntdForm.Item label='Chọn ngày'>
                    <FormikControl
                      control='largeRadios'
                      name='time'
                      options={timeList}
                    />
                  </AntdForm.Item>
                </>
              ) : (
                <div>
                  Ngày mà bạn đã chọn tạm thời chưa có lịch chiếu. Xin vui lòng
                  chọn ngày khác.
                </div>
              )}
            </AntdForm>
            <Button
              type='primary'
              hidden
              id='btn-submit-step1'
              htmlType='submit'
            >
              Tiếp tục
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BuyTicketStep1Form;

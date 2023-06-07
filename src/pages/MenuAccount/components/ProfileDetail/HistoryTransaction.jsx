import { toastError, toastSuccess } from '~/utils/toast';

import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  Card,
  CardBody,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
// import { authorsTableData, projectsTableData } from "@/data";
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import authApi from '~/api/authApi';
import { Event } from '@mui/icons-material';

export function HistoryTransaction() {
  const currentUser = useSelector(state => state.auth.user);
  const userId = currentUser?.id;
  const [history, setHistory] = useState();
  const [search, setSearch] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await authApi.getHistory(userId);
      console.log(res);
      setHistory(res);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await authApi.getHistorySearch(userId, search);
      console.log({ res });
      setHistory(res);
    })();
  }, [search]);

  const handleSearch = search => {
    setSearch(search);
  };
  return (
    history && (
      <div className='mt-12 mb-8 flex flex-col gap-8'>
        <h4 class='text-red-700 flex justify-center'>Lịch sử giao dịch </h4>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <MagnifyingGlassIcon className='h-5 w-5' />
          </div>
          <input
            type='search'
            id='default-search'
            className='primary-search outline-none border rounded-lg px-3 py-2 focus:ring focus:border-blue-500'
            placeholder='Search'
            onChange={event => {
              handleSearch(event.target.value);
            }}
            required
          />
        </div>
        <Card>
          <CardBody className='overflow-x-scroll px-0 pt-0 pb-2'>
            <table className='w-full min-w-[640px] table-auto'>
              <thead className='bg-red-200'>
                <tr>
                  {[
                    'price',
                    'startDate',
                    'startTime',
                    'branchName',
                    'movieName',
                    'roomName',
                  ].map(el => (
                    <th
                      key={el}
                      className='border-b border-blue-gray-50 py-3 px-5 text-left '
                    >
                      <Typography
                        variant='small'
                        className='text-[15px] font-bold uppercase color="blue"'
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {history?.map(
                  (
                    {
                      price,
                      startDate,
                      startTime,
                      branchName,
                      movieName,
                      roomName,
                    },
                    key
                  ) => {
                    const className = `py-3 px-5 whitespace-nowrap bg-cyan-50  ${
                      key === history.length - 1
                        ? ''
                        : 'border-b border-blue-gray-50'
                    }`;
                    return (
                      <tr key={key}>
                        <td className={className}>
                          <div>{` ${price} VND`}</div>
                        </td>
                        <td className={className}>
                          <div>{startDate}</div>
                        </td>
                        {/* <td className={className}>
                        <div>{gender === 0 ? "Nam" : "Nữ"}</div>
                      </td> */}
                        <td className={className}>
                          <div>{startTime}</div>
                        </td>
                        <td className={className}>
                          <div>{branchName}</div>
                        </td>
                        <td className={className}>
                          <div>{movieName}</div>
                        </td>
                        <td className={className}>
                          <div>{roomName}</div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    )
  );
}

import axiosClient from './axiosClient';

const ticketApi = {
  getBillStatus: id => {
    const url = `/bill?id=${id}`;
    return axiosClient.get(url);
  },
};

export default ticketApi;

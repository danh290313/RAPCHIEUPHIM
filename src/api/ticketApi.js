import axiosClient from './axiosClient';

const ticketApi = {
  getBillStatus: id => {
    const url = `/bill?id=${id}`;
    return axiosClient.get(url);
  },

  // createBillFromSeats: (data, token) => {
  //   const url = `/checkOutMovie`;
  //   return axiosClient.post(url, data, {
  //     headers: { Authorization: 'Bearer ' + token },
  //   });
  // },
};

export default ticketApi;

import axiosClient from './axiosClient';

const showtimeApi = {
  getById: id => {
    const url = `/showtimes/${id}`;
    return axiosClient.get(url);
  },
  getScheduleAndStartTime: (movieId, startDate) => {
    const url = `/TimeFromMovieAndDate?movieId=${movieId}&startDate=${startDate}`;

    return axiosClient.get(url);
  },
  getSeatsFromSchedule: scheduleID => {
    const url = `${scheduleID}/seats`;
    return axiosClient.get(url);
  },
  getScheduleByID: scheduleID => {
    const url = `/schedule-id?id=${scheduleID}`;
    return axiosClient.get(url);
  },

  getByCineplexId: data => {
    const url = `/showtimes/cineplexs`;
    return axiosClient.post(url, data);
  },

  getSeats: id => {
    const url = `/showtimes/${id}/seats`;
    return axiosClient.get(url);
  },
};

export default showtimeApi;

import axiosClient from './axiosClient';

const movieApi = {
  getAll: () => {
    const url = '/movies';
    return axiosClient.get(url);
  },

  getById: id => {
    const url = `/movie/${id}`;
    return axiosClient.get(url);
  },

  getByState: params => {
    const url = '/movies';
    return axiosClient.get(url, { params });
  },

  getBySlug: slug => {
    const url = `/movies/detail/${slug}`;
    return axiosClient.get(url);
  },

  getShowtimes: (id, params) => {
    const url = `/movies/${id}/showtimes`;
    return axiosClient.get(url, { params });
  },
  getAllMoviesShowing: () => {
    const url = '/movies/allMoviesShowing';
    return axiosClient.get(url);
  },
};

export default movieApi;

import axios from "axios";
const url = "";
const request = axios.create({
  baseURL: url + "/api",
  headers: {
    "content-type": "application/json",
  },
});
export const get = async (path, config = {}) => {
  const { token, ...rest } = config;
  const nconfig = { headers: { Authorization: `Bearer ${token}` }, ...rest };
  const response = await request.get(path, nconfig);
  return response.data;
};
export const post = async (path, data = {}, config = {}) => {
  const { token, ...rest } = config;
  const nconfig = { headers: { Authorization: `Bearer ${token}` }, ...rest };
  const response = await request.post(path, data, nconfig);
  return response.data;
};
export const put = async (path, data = {}, config = {}) => {
  const { token, ...rest } = config;
  const nconfig = { headers: { Authorization: `Bearer ${token}` }, ...rest };
  const response = await request.put(path, data, nconfig);
  return response.data;
};
export const deletereq = async (path, data = {}, config = {}) => {
  const { token, ...rest } = config;
  const nconfig = { headers: { Authorization: `Bearer ${token}` }, ...rest };
  console.log({ path, data, nconfig });
  const response = await request.delete(path, nconfig);
  return response.data;
};
export default request;

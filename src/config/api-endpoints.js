import axios from "axios";

const userApi = "http://localhost:5000/Users";

export const getUsers = async (id) => {
  id = id || '';
  return await axios.get(`${userApi}/${id}`);
}

export const addUser = async (user) => {
  return await axios.post(userApi, user);
}

export const editUser = async (id, user) => {
  return await axios.put(`${userApi}/${id}`, user);
}

export const deleteUser = async (id) => {
  return await axios.delete(`${userApi}/${id}`);
}

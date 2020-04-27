import Axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
// const instance = Axios.create({
//    withCredentials: true,
//    headers:{
//       "API-KEY": "0c556db6-0732-4d7d-a804-9c8864714616",
//    }
// });

export const getUsers = (currentPage, pageSize) => {
  return Axios.get(
    `${baseURL}users?page=${currentPage}&count=${pageSize}`,
    { withCredentials: true }
  ).then((response) => response.data);
};

export const unFollowAPI = (id) => {
  return Axios.delete(
    `${baseURL}follow/${id}`,
    {
      withCredentials: true,
      headers: {
        "API-KEY": "0c556db6-0732-4d7d-a804-9c8864714616",
      },
    }
  ).then((response) => response.data);
};
export const followAPI = (id) => {
  return Axios.post(
    `${baseURL}follow/${id}`,
    {},
    {
      withCredentials: true,
      headers: {
        "API-KEY": "0c556db6-0732-4d7d-a804-9c8864714616",
      },
    }
  ).then((response) => response.data);
};

export const getProfileUser = (id) => {
  return Axios.get(
    `${baseURL}profile/${id}`
  ).then((response) => response.data);
};

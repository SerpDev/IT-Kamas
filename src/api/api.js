import Axios from "axios";

// const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const instance = Axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "0c556db6-0732-4d7d-a804-9c8864714616",
  },
});

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unFollowAPI: (id) => {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  followAPI: (id) => {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};
export const profileApi = {
  getProfileUser: (id) => {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },
};

export const headerAuthAPI = {
  me: () => {
    return instance.get("auth/me");
  },
};

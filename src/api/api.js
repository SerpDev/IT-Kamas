import Axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

// const instance = Axios.create({
//    withCredentials: true,
//    baseURL : "https://social-network.samuraijs.com/api/1.0/",
//    headers:{
//       "API-KEY": "0c556db6-0732-4d7d-a804-9c8864714616",
//    }
// });

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return Axios.get(`${baseURL}users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true,
    }).then((response) => response.data);
  },
  unFollowAPI: (id) => {
    return Axios.delete(`${baseURL}follow/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "0c556db6-0732-4d7d-a804-9c8864714616",
      },
    }).then((response) => response.data);
  },
  followAPI: (id) => {
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
  },
  getProfileUser: (id) => {
    return Axios.get(`${baseURL}profile/${id}`).then(
      (response) => response.data
    );
  },
};


// export const headerAPI = {
//   getAuth: () => {
//     return  Axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
//       withCredentials : true,
//     })
//     .then(
//       (response) => {
//        if(response.data.resultCode === 0){
//          let {id, email, login} = response.data.data;
//          this.props.setAuthUserData(id, email, login);
//        }
//       }
//     );
//   },
// };
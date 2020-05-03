import React from "react";
import defFoto from "../../images/defFoto.jpg";
import "./users.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 100;
  let pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }

  let showUsers = props.users.map((user) => {
    return (
      <div key={user.id} className="users">
        <div>
          <div>
            <span>{user.name}</span>
          </div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : defFoto}
              alt=""
            ></img>
          </NavLink>
        </div>
        {user.followed ? (
          <button
            disabled={props.followingInProgres.some((id) => id === user.id)}
            onClick={() => {
              props.unFollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgres.some((id) => id === user.id)}
            onClick={() => {
              props.follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    );
  });
  return (
    <div className="findUsers">
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? "boldPage" : "undefined"}
              onClick={() => {
                props.onPageCanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {showUsers}
    </div>
  );
};
export default Users;

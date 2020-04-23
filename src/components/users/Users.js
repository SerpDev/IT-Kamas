import React from "react";
import "./users.css";

const Users = (props) => {
  
  if (props.state.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fotoUrl: "https://expert.ru/data/public/551943/551952/07-01c.jpg",
        followed: false,
        fullName: "Mark",
        status: "im a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        fotoUrl: "https://is.gd/tDLK0Y",
        followed: false,
        fullName: "Bill",
        status: "im a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 3,
        fotoUrl: "https://clck.ru/N76RD",
        followed: true,
        fullName: "Jobs",
        status: "im a boss",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }

  let showUsers = props.state.users.map((user) => {
    return (
      <div key={user.id} className="users">
        <div>
          <div>
            <img src={user.fotoUrl} alt=""></img>
          </div>
          {user.followed ? (
            <button
              onClick={() => {
                props.unFollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div>
          <div>
            <span>{user.fullName}</span>
            <span>{user.status}</span>
          </div>
          <div>
            <span>{user.location.country}</span>
            <span>{user.location.city}</span>
          </div>
        </div>
      </div>
    );
  });
  return <div className="findUsers">{showUsers}</div>;
};

export default Users;

import React, { Component } from "react";
import "./users.css";
import Axios from "axios";
import defFoto from "../../images/defFoto.jpg";

class Users extends Component {
 
  componentDidMount(){
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      (response) => {
        this.props.setUsers(response.data.items);
      }
    );
  }

  render() {
    return (
      <div>
        <div className="findUsers">
          {this.props.state.users.map((user) => {
            return (
              <div key={user.id} className="users">
                <div>
                  <div>
                    <div>
                      <span>{user.name}</span>
                    </div>
                    <img
                      src={
                        user.photos.small != null ? user.photos.small : defFoto
                      }
                      alt=""
                    ></img>
                  </div>
                  {user.followed ? (
                    <button
                      onClick={() => {
                        this.props.unFollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;

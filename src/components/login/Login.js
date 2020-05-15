import React from "react";
import { reduxForm, Field } from "redux-form";
import { LoginInput } from "../commonn/FormsControl";
import { required } from "./../../utilss/validators";
import { connect } from "react-redux";
import { login } from './../../redux/auth-reduser';
import { Redirect } from "react-router-dom";


const LoginForm = (props) => {
  return (
    <div className="loginForm">
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={"email"}
            placeholder={"email"}
            component={LoginInput}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            validate={[required]}
            name={"password"}
            placeholder={"password"}
            type={'password'}
            component={LoginInput}
          />
        </div>
        <div>
          <Field name={"remember "} type={"checkbox"} component={"input"} />
          remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.remember);
  };

  if(props.isAuth) {
    return <Redirect to="/profile" />
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};
export default connect(mapStateToProps, {login})(Login);



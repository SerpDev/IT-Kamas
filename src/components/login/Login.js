import React from "react";
import { reduxForm, Field } from "redux-form";
import { LoginInput } from "../commonn/FormsControl";
import { required } from "./../../utilss/validators";

const LoginForm = (props) => {
  return (
    <div className="loginForm">
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={"login"}
            placeholder={"Login"}
            component={LoginInput}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            validate={[required]}
            name={"password"}
            placeholder={"Password"}
            component={LoginInput}
          />
        </div>
        <div>
          <Field name={"remember"} type={"checkbox"} component={"input"} />
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
    console.log(formData);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;

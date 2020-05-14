import React from "react";
import "./FormsControls.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  let className = hasError ? "form-control error" : "";
  return (
    <div className={className}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const LoginInput = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

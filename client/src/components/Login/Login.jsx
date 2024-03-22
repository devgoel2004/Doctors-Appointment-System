import React from "react";
import "./Login.css";

import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const Login = () => {
  const onFinishHandler = (values) => {
    console.log(values);
  };
  return (
    <div className="login-box">
      <img src="./register.png" alt="register image" />
      <div className="form-container">
        <Form
          layout="vertical"
          className="register-form"
          onFinish={onFinishHandler}>
          <h3 className="text-center">Login Form</h3>
          <Form.Item label="Email" name="email">
            <Input type="email"></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="Password"></Input>
          </Form.Item>
          <Link to="/register">Not Registered Yet?</Link>
          <button className="btn btn-success" type="Submit">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

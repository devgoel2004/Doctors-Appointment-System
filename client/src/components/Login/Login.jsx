import React from "react";
import "./Login.css";

import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        values
      );
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        alert("Login Successfully");
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
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

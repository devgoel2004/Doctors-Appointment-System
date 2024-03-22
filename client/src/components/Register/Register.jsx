import React from "react";
import "./Register.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const Register = () => {
  const onFinishHandler = (values) => {
    console.log(values);
  };
  return (
    <div className="register-box">
      <img src="./register.png" alt="register image" />
      <div className="form-container">
        <Form
          layout="vertical"
          className="register-form"
          onFinish={onFinishHandler}>
          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text"></Input>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email"></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="Password"></Input>
          </Form.Item>
          <Link to="/login">Already Login?</Link>
          <button className="btn btn-primary" type="Submit">
            Register
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Register;

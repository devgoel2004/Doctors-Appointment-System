import React from "react";
import "./Register.css";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        values
      );
      if (res.data.success) {
        alert("Register successfully");
        navigate("/login");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
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

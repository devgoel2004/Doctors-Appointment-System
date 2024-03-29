import React, { useEffect } from "react";
import axios from "axios";
import "./Home.css";
const Home = () => {
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/users/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  });
  return <div>Home</div>;
};

export default Home;

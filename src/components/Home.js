import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <button onClick={() => navigate("order-success", { replace: true })}> */}
      <button onClick={() => navigate("order-success")}>Place Order</button>
    </div>
  );
};

export default Home;

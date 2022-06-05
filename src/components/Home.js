import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      {/* <button onClick={() => navigate("order-success", { replace: true })}> */}
      <button onClick={() => navigate("order-success")}>Place Order</button>
    </div>
  );
};

export default Home;

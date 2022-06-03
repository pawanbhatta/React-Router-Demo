import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>OrderSuccess</div>
      <button onClick={() => navigate(-1)}>Go back</button>
      {/* <button onClick={() => navigate("/")}>Go back</button> */}
    </>
  );
};

export default OrderSuccess;

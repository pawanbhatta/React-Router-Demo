import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>Products : </div>
      <div>
        <input type="search" placeholder="Search Product " />
      </div>
      <nav>
        <Link style={{ margin: "10px" }} to="featured">
          FEatured
        </Link>
        <Link style={{ margin: "10px" }} to="new">
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;

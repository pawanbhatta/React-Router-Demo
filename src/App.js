import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import OrderSuccess from "./components/OrderSuccess";
import Products from "./components/Products";
import UserAdmin from "./components/UserAdmin";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-success" element={<OrderSuccess />} />
        <Route path="products" element={<Products />}>
          {/* Indexed route */}
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<UserAdmin />} />
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<UserAdmin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/auth";
// import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import OrderSuccess from "./components/OrderSuccess";
import Products from "./components/Products";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import UserAdmin from "./components/UserAdmin";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
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
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
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
    </AuthProvider>
  );
}

export default App;

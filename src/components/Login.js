import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label> Username : </label>
        <input
          type="text"
          placeholder="Username..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

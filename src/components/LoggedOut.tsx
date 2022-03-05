import { NavLink } from "react-router-dom";
import "./Header.css";

const LoggedIn = () => {
  return (
    <NavLink className="login-button" to="/login">
      Login
    </NavLink>
  );
};

export default LoggedIn;

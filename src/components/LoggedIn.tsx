import { useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";
import "./Header.css";

const LoggedIn = () => {
  const dispatch = useDispatch();

  return (
    <button className="login-button" onClick={() => dispatch(logOut())}>
      Logout
    </button>
  );
};

export default LoggedIn;

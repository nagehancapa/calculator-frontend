import { useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";

const LoggedIn = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(logOut())}>Logout</button>;
};

export default LoggedIn;

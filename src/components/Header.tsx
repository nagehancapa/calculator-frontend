import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { Link } from "react-router-dom";
import Img from "../fiyo.svg";
import "./Header.css";

const Header = () => {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link
            className="fiyo-logo"
            to={{ pathname: "https://www.fiyo.nl/" }}
            onClick={(event) => {
              event.preventDefault();
              window.open("https://www.fiyo.nl/");
            }}
            target="_blank"
          >
            <img src={Img} alt="logo" />
          </Link>
          {loginLogoutControls}
        </div>
      </div>
    </header>
  );
};

export default Header;

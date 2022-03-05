import React, { useState, useEffect } from "react";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitForm(event: React.MouseEvent) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <form className="form">
      <div className="input-box">
        <h2>Login</h2>
        <label className="label">E-mail address</label>
        <div>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            title="E-mail address"
            placeholder="Enter email"
            id="email"
            required
            className="text-input"
          />
        </div>
        <label className="label">Password</label>
        <div className="input-box">
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            title="Password"
            id="pass"
            required
            className="text-input"
          />
        </div>{" "}
        <Link className="signup-link" to="/signup">
          Click here to sign up
        </Link>
      </div>
      <div>
        <button className="form-button" type="submit" onClick={submitForm}>
          Login
        </button>
      </div>
    </form>
  );
}

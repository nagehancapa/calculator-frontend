import React, { useState, useEffect } from "react";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

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
    <div>
      <div className="input-box">
        <h2>Login</h2>
        <label>E-mail address</label>
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
          />
        </div>
        <label>Password</label>
        <div className="input-box">
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            title="Password"
            id="pass"
            required
          />
        </div>{" "}
        <Link to="/signup" style={{ textAlign: "center" }}>
          Click here to sign up
        </Link>
      </div>
      <div className="button-set">
        <button id="send2" type="submit" onClick={submitForm}>
          <span>Login</span>
        </button>
      </div>
    </div>
  );
}

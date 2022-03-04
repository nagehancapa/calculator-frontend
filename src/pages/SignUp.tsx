import React, { useState, useEffect } from "react";
import { signUp } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
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
    dispatch(signUp(name, email, password));
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div>
      <div className="input-box">
        <h2>Signup</h2>
        <label>Name</label>
        <div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </div>
        <label>Email address</label>
        <div>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <p>We'll never share your email with anyone else.</p>
        <label>Password</label>
        <div>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <div>
        <button type="submit" onClick={submitForm}>
          <span>Signup</span>
        </button>
      </div>
      <Link to="/login">Click here to log in</Link>
    </div>
  );
}

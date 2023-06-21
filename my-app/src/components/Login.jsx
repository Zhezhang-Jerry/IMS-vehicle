import React, { useState } from "react";
import { useNavigate } from "react-location";
import { useUserStore } from "../store";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { users, setCurrentUser } = useUserStore((state) => ({
    users: state.users,
    setCurrentUser: state.setCurrentUser
  }));

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
      setCurrentUser(user);
      navigate({ to: "/Home", replace: true });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to IMS</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            onChange={handleChange}
            value={email}
            type="email"
            id="email"
            style={styles.input}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            onChange={handleChange}
            value={password}
            type="password"
            id="password"
            style={styles.input}
          />
        </div>
        <button type="submit">Login</button>
        <button>Sign up</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center"
  },
  heading: {
    marginTop: 0,
    fontSize: "24px",
    fontWeight: "bold"
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "16px"
  },
  input: {
    padding: "5px",
    fontSize: "16px",
    borderRadius: "3px",
    border: "1px solid #ccc"
  }
};

export default Login;

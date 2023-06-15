import React from "react";
import { useNavigate } from "react-location";

const Home = () => {
  const navigate = useNavigate();
  const handleSignOut = (e) => {
    e.preventDefault();
    navigate({
      to: "/",
      replace: true
    });
  };
  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.heading}>Home Page</h1>
        <button onClick={handleSignOut} style={styles.signOutButton}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px"
  },
  heading: {
    textAlign: "center",
    margin: 0,
    fontSize: "30px",
    fontWeight: "bold"
  },
  signOutButton: {
    marginLeft: "10px"
  }
};

export default Home;

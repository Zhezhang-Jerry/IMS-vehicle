import React from "react";
import { useNavigate } from "react-location";
import { useUserStore } from "../store";

const Card = ({ title, content }) => {
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const NavBar = () => {
  const navigate = useNavigate();
  const { logoutUser } = useUserStore((state) => ({
    logoutUser: state.logoutUser
  }));

  const handleSignOut = (e) => {
    e.preventDefault();
    logoutUser();
    navigate({
      to: "/",
      replace: true
    });
  };

  return (
    <div style={styles.navBar}>
      <h1 style={styles.logo}>IMS</h1>
      <button onClick={handleSignOut} style={styles.signOutButton}>
        Sign Out
      </button>
    </div>
  );
};

const Home = () => {
  const { currentUser, vehicles } = useUserStore((state) => ({
    currentUser: state.currentUser,
    vehicles: state.vehicles
  }));

  const vehicleLike = vehicles.find(
    (vehicle) => vehicle.country === currentUser.carPreference
  );

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Home Page</h1>
        <Card
          title="Personal Info"
          content={`Name: ${currentUser.name}\nEmail: ${currentUser.email}`}
        />
        <Card
          title="Current Own"
          content={
            currentUser.currentOwn ? (
              `${currentUser.currentOwn.brand} ${currentUser.currentOwn.model} ${currentUser.currentOwn.engineType}`
            ) : (
              "Not available"
            )
          }
        />
        <Card
          title="Dream Car"
          content={
            vehicleLike ? (
              `${vehicleLike.carBrand} ${vehicleLike.carModel} ${vehicleLike.engine}`
            ) : (
              "Not available"
            )
          }
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px"
  },
  heading: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px"
  },
  card: {
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "5px",
    marginBottom: "20px"
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#f1f1f1"
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0
  },
  signOutButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "3px"
  }
};

export default Home;

import React, { useEffect } from "react";
import { useNavigate } from "react-location";
import { useUserStore } from "../store";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser, vehicles, logoutUser } = useUserStore((state) => ({
    currentUser: state.currentUser,
    vehicles: state.vehicles,
    logoutUser: state.logoutUser,
  }));

  const vehicleLike = vehicles.find(
    (vehicle) => vehicle.country === currentUser.carPreference
  );

  const handleSignOut = (e) => {
    e.preventDefault();
    logoutUser();
    navigate({
      to: "/",
      replace: true,
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
      <div style={{ textAlign: "center" }}>{currentUser.name}</div>
      {vehicleLike ? (
        <div style={{ textAlign: "center" }}>
          {`${vehicleLike.carBrand} ${vehicleLike.carModel} ${vehicleLike.engine}`}
        </div>
      ) : null}
    </div>
  );
};


const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
  },
  heading: {
    textAlign: "center",
    margin: 0,
    fontSize: "30px",
    fontWeight: "bold",
  },
  signOutButton: {
    marginLeft: "10px",
  },
};

export default Home;

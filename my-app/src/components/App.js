import logo from '../logo.svg';
import '../App.css';
import Login from "./Login";
import { Router, Outlet, ReactLocation } from "react-location";
import Home from "./Home";

const location = new ReactLocation();

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Login />
    },
    {
      path: "home",
      element: <Home />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  );
}

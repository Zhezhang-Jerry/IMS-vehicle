import { create } from "zustand";
import { users, vehicles } from "./data";

export const useUserStore = create((set) => ({
  users: users,
  vehicles: vehicles,
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : {},
  setCurrentUser: (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    set({ currentUser: user, isLoggedIn: true });
  },
  isLoggedIn: localStorage.getItem("currentUser") ? true : false,
  logoutUser: () => {
    localStorage.removeItem("currentUser");
    set({ currentUser: {}, isLoggedIn: false });
  }
}));


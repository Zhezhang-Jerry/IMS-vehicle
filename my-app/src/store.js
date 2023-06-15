import { create } from "zustand";
import { users } from "./data";

export const useUserStore = create((set) => ({
  users: users,
  currentUser: {},
  setCurrentUser: (user) => {
    set({ currentUser: user, isLoggedIn: true });
  },
  isLoggedIn: false,
}));

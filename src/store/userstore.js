import { create } from "zustand";

const useUserStore = create((set, get) => ({
  loggedIn: false,
  username: "",
  password: "",

  login: (username, password) =>
    set(() => ({
      loggedIn: true,
      username: username,
      password: password,
    })),

  logout: () =>
    set(() => ({
      loggedIn: false,
      username: "",
      password: "",
    })),
}));

export default useUserStore;

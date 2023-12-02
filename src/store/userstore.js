import { create } from "zustand";

const useUserStore = create((set, get) => ({
  loggedIn: false,
  fullName: "Ajinkya Joshi",
  emailId: "ajinkya0608@gmail.com",
  mobileNo: 8329746598,
}));

export default useUserStore;

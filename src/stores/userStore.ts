import { create } from "zustand";
import User from "../entites/User";

interface UserStore {
  user: User | null;
}

const useUserStore = create<UserStore>((set) => ({
  user: {},
}));

export default useUserStore;

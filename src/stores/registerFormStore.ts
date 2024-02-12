import { create } from "zustand";

interface RegisterFormStore {
  email: string;
  displayName: string;
  username: string;
  password: string;
  birthdate: string;
  newsletter: boolean;
  termsOfService: boolean;

  setEmail: (email: string) => void;
  setDisplayName: (displayName: string) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setBirthdate: (birthDate: string) => void;
  setNewsletter: (value: boolean) => void;
  setTermsOfService: (value: boolean) => void;
}

const useRegisterFormStore = create<RegisterFormStore>((set) => ({
  email: "",
  displayName: "",
  username: "",
  password: "",
  birthdate: "",
  newsletter: false,
  termsOfService: false,

  setEmail: (email) => set(() => ({ email })),
  setDisplayName: (displayName) => set(() => ({ displayName })),
  setUsername: (username) => set(() => ({ username })),
  setPassword: (password) => set(() => ({ password })),
  setBirthdate: (birthdate) => set(() => ({ birthdate })),
  setNewsletter: (newsletter) => set(() => ({ newsletter })),
  setTermsOfService: (termsOfService) => set(() => ({ termsOfService })),
}));

export default useRegisterFormStore;

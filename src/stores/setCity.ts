import create from "zustand";

type State = {
  city: string;
  setCity: (city: string) => void;
};

const useSetCityStore = create<State>((set) => ({
  city: "Inhambane",
  setCity: (city: string) => {
    set((state) => ({ city: city }));
  },
}));


export default useSetCityStore;
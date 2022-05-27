import create from "zustand";

type State = {
  isDegreeInCelsius: boolean;
  changeDegreeUnit: (isDegreeInCelsius: boolean) => void;
};

const useChangeDegreeStore = create<State>((set) => ({
  isDegreeInCelsius: true,
  changeDegreeUnit: (isDegreeInCelsius: boolean) => {
    set((state) => ({ isDegreeInCelsius: isDegreeInCelsius }));
  },
}));


export default useChangeDegreeStore;
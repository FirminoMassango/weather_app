import create from "zustand";

type State = {
  isDrawerActive: boolean;
  activateDrawer: (isDrawerActive: boolean) => void;
};

const useActivateDrawerStore = create<State>((set) => ({
  isDrawerActive: false,
  activateDrawer: (isDrawerActive: boolean) => {
    set((state) => ({ isDrawerActive: isDrawerActive }));
  },
}));


export default useActivateDrawerStore;
import create from "zustand";

export type Coordinates = {
  latitude: number;
  longitude: number
}

type State = {
  coordinates: Coordinates;
  setCoordinates: (coordinates: Coordinates) => void;
};

const useCurrentCoordinatesStore = create<State>((set) => ({
  coordinates: {
    latitude: 0,
    longitude: 0
  },
  setCoordinates: (coordinates: Coordinates) => {
    set((state) => ({ coordinates: coordinates }));
  },
}));


export default useCurrentCoordinatesStore;
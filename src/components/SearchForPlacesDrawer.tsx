import { useEffect, useState } from "react";
import useSetCityStore from "../stores/setCity";
import useActivateDrawerStore from "../stores/activeDrawer";

function SearchForPlacesDrawer() {
  const cityName = useSetCityStore((state) => state.city);
  const [city, setCity] = useState<string>(cityName);
  const searchCity = useSetCityStore((state) => state.setCity);
  const isDrawerActive = useActivateDrawerStore(
    (state) => state.isDrawerActive
  );
  const activateDrawer = useActivateDrawerStore(
    (state) => state.activateDrawer
  );

  function handleClick() {
    searchCity(city);
  }

  function handleCloseDrawer() {
    activateDrawer(!isDrawerActive);
  }

  return (
    <div className="w-full h-full ease-in-out">
      <div className="w-full px-2 pt-10 md:px-10 flex relative justify-center">
        <div className="w-screen my-10 flex justify-between">
          <div className="w-2/3 bg-white">
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="w-full h-12 px-12 font-medium bg-left relative border border-white"
                placeholder="search location"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <span className="absolute left-5 md:left-14 material-icons text-primary-search z-1">
                search
              </span>
            </div>
          </div>
          <div className="w-1/4 bg-white">
            <button
              className="w-full bg-search-button hover:opacity-80 font-medium h-12"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
        <button
          className="absolute top-5 right-10 z-2"
          onClick={handleCloseDrawer}
        >
          <span className="material-icons">close</span>
        </button>
      </div>
      <ul className="p-2 md:p-10">
        <li className="pb-5">Maputo</li>
        <li>London</li>
      </ul>
    </div>
  );
}

export default SearchForPlacesDrawer;

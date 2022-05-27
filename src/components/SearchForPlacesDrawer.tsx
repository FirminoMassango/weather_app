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

  //   console.log(isDrawerActive);
  return (
    <div className="h-full">
      <div className="p-10 relative flex justify-center">
        <div id="1" className="w-full my-10 flex justify-between">
          <div className="w-3/4 mr-2 flex justify-center items-center">
            <span className="relative left-10 material-icons text-primary-search z-1">
              search
            </span>
            <input
              type="text"
              className="w-full h-12 px-12 font-medium bg-left border border-white"
              placeholder="search location"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-search-button hover:opacity-80 font-medium w-1/4 h-12"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <button
          className="absolute top-5 right-10 z-2"
          onClick={handleCloseDrawer}
        >
          <span className="material-icons">close</span>
        </button>
      </div>
      <ul className="ml-14">
        <li className="pb-5">Maputo</li>
        <li>London</li>
      </ul>
    </div>
  );
}

export default SearchForPlacesDrawer;

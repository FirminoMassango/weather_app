import { useState, useEffect } from "react";
import "./App.css";
import AirPressure from "./components/AirPressure";
import DailyWeather from "./components/DailyWeather";
import Humidity from "./components/Humidity";
import SwitchScale from "./components/SwitchScale";
import Visibility from "./components/Visibility";
import WindStatus from "./components/WindStatus";
import { token } from "./helper/token";
import { RootObject } from "./helper/Type";
import LeftPanel from "./components/LeftPanel";
import SearchForPlacesDrawer from "./components/SearchForPlacesDrawer";
import useSetCityStore from "./stores/setCity";
import useActivateDrawerStore from "./stores/activeDrawer";
import Footer from "./components/Footer";
import useCurrentCoordinatesStore from "./stores/currentLocation";

function App() {
  const [weatherProps, setWeatherProps] = useState<RootObject>();
  const city = useSetCityStore((state) => state.city);
  const isDrawerActive = useActivateDrawerStore(
    (state) => state.isDrawerActive
  );
  const currentCoordinates = useCurrentCoordinatesStore(
    (state) => state.coordinates
  );
  const [latitude, setLatitude] = useState(currentCoordinates.latitude);
  const [longitude, setLongitude] = useState(currentCoordinates.longitude);
  const [url, setURL] = useState<string>(
    `https://api.weatherbit.io/v2.0/forecast/daily?${
      currentCoordinates.latitude === 0
        ? "city=" + city
        : "lat=" + latitude + "&lon=" + longitude
    }&key=${token}`
  );

  // useEffect(() => {
  // console.log(currentCoordinates);
  // if (currentCoordinates.latitude === 0) {
  //   setURL(
  //     `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${token}`
  //   );
  // } else {
  //   setURL(
  //     `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${token}`
  //   );
  // }
  // }, [currentCoordinates]);

  async function fetchWeatherProps() {
    const response = await fetch(url);
    const weather_props = await response.json();
    setWeatherProps(weather_props);
  }

  useEffect(() => {
    fetchWeatherProps();
  }, [city, currentCoordinates.latitude]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div id-="left" className="md:w-1/3  bg-left text-white font-raleway">
        {isDrawerActive ? (
          <SearchForPlacesDrawer />
        ) : (
          <LeftPanel
            temp={weatherProps?.data[0].app_max_temp}
            description={weatherProps?.data[0].weather.description}
            date={weatherProps?.data[0].datetime}
            city={weatherProps?.city_name}
          />
        )}
      </div>
      <div id="right" className="w-full md:w-2/3 bg-right font-raleway">
        <div id="container" className="mx-5 md:mx-32 my-10">
          <header className="flex justify-end mb-5">
            <SwitchScale />
          </header>
          <main className="grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-5">
            {weatherProps?.data.slice(1, 6).map((weather: any, index) => {
              return (
                <div className="flex justify-between">
                  <DailyWeather
                    date={index === 0 ? "Tomorrow" : weather.valid_date}
                    icon={weather.weather.description}
                    max={weather.app_max_temp}
                    min={weather.app_min_temp}
                  />
                </div>
              );
            })}
          </main>
          <h1 className="my-10 font-bold text-white text-xl">
            Today’s Highlights
          </h1>
          <div className="w-full grid grid-cols-2 gap-10">
            <WindStatus
              windSpeed={weatherProps?.data[0].wind_spd}
              windDirection={weatherProps?.data[0].wind_cdir}
              windDirectionDeg={weatherProps?.data[0].wind_dir}
            />
            <Humidity humidity={weatherProps?.data[0].rh as number} />
          </div>
          <div className="w-full my-10 grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-10">
            <Visibility visibility={weatherProps?.data[0].vis} />
            <AirPressure airPressure={weatherProps?.data[0].pres} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

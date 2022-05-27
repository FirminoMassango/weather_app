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

function App() {
  const [city, setCity] = useState("Maputo");
  const [units, setUnits] = useState("metric");
  const [humidity, setHumidity] = useState<any>(0);
  const [weatherProps, setWeatherProps] = useState<RootObject>();

  const url = `http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${token}`;
  async function fetchWeatherProps() {
    const response = await fetch(url);
    const weather_props = await response.json();
    const humidity = weatherProps?.data[0].rh;
    setHumidity(humidity);
    setWeatherProps(weather_props);
    console.log(humidity);
  }

  // const degrees:  = Math.floor(
  //   weatherProps.list[0].main.temp_max - 273.15
  // );

  useEffect(() => {
    fetchWeatherProps();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-full ">
      <div
        id-="left"
        className="w-full md:w-1/3  bg-left text-white font-raleway"
      >
        <LeftPanel
          temp={weatherProps?.data[0].app_max_temp}
          description={weatherProps?.data[0].weather.description}
          city={weatherProps?.city_name}
        />
      </div>
      <div id="right" className="w-full md:w-2/3 bg-right font-raleway">
        <div id="container" className="mx-5 md:mx-32 my-10">
          <header className="flex justify-end mb-5">
            <SwitchScale />
          </header>
          <main className="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-5">
            {weatherProps?.data.slice(1, 5).map((weather: any) => {
              return (
                <div className="flex justify-between">
                  <DailyWeather
                    date={weather.valid_date}
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
          <div className="w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-10">
            <WindStatus
              windSpeed={weatherProps?.data[0].wind_spd}
              windDirection={weatherProps?.data[0].wind_cdir}
              windDirectionDeg={weatherProps?.data[0].wind_dir}
            />
            <Humidity humidity={weatherProps?.data[0].rh} />
          </div>
          <div className="w-full my-10 grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-10">
            <Visibility visibility={weatherProps?.data[0].vis} />
            <AirPressure airPressure={weatherProps?.data[0].pres} />
          </div>
        </div>
        <footer className="text-footer text-center mb-5">
          created by{" "}
          <span className="underline font-semibold">Firmino Massango</span> -
          devChallenges.io
        </footer>
      </div>
    </div>
  );
}

export default App;

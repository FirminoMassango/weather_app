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

function App() {
  const [city, setCity] = useState("London");
  const [weatherProps, setWeatherProps] = useState<RootObject>();

  const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city}&appid=${token}`;

  async function fetchWeatherProps() {
    const response = await fetch(url);
    const weather_props = await response.json();
    setWeatherProps(weather_props);
  }

  useEffect(() => {
    fetchWeatherProps();
  }, []);

  return (
    <div className="flex h-full">
      <div id-="left" className="w-1/3  bg-left text-white">
        Left
        <span>{weatherProps?.city.name}</span>
      </div>
      <div id="right" className="w-2/3 bg-right">
        <div id="container" className="mx-32 my-10">
          <header className="flex justify-end mb-5">
            <SwitchScale />
          </header>
          <main className="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-5">
            {weatherProps?.list.slice(1, 5).map((weather: any) => {
              return (
                <div className="flex justify-between">
                  <DailyWeather
                    max={weather.main.temp_max}
                    min={weather.main.temp_min}
                  />
                </div>
              );
            })}
          </main>
          <h1 className="my-10 font-bold text-white text-xl">
            Today’s Hightlights
          </h1>
          <div className="grid grid-flow-col gap-10">
            <WindStatus windSpeed={weatherProps?.list[0].wind.speed} />
            <Humidity humidity={weatherProps?.list[0].main.humidity} />
          </div>
          <div className="my-10 grid grid-flow-col gap-10">
            <Visibility visibility={weatherProps?.list[0].visibility} />
            <AirPressure airPressure={weatherProps?.list[0].main.pressure} />
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

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
import heavyRain from "./assets/HeavyRain.png";

function App() {
  const [city, setCity] = useState("London");
  const [humidity, setHumidity] = useState<number>(0);
  const [weatherProps, setWeatherProps] = useState<RootObject>();

  const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city}&appid=${token}`;

  async function fetchWeatherProps() {
    const response = await fetch(url);
    const weather_props = await response.json();
    const humidity: number = weather_props.list[0].main.humidity;
    setHumidity(humidity);
    setWeatherProps(weather_props);
  }

  // const degrees:  = Math.floor(
  //   weatherProps.list[0].main.temp_max - 273.15
  // );

  useEffect(() => {
    fetchWeatherProps();
  }, []);

  return (
    <div className="flex h-full">
      <div id-="left" className="w-1/3  bg-left text-white font-raleway">
        <div className="m-10">
          <div id="1" className="flex justify-between">
            <button className="bg-secondary px-5">Search for places</button>
            <button className="bg-secondary w-10 h-10 rounded-full flex justify-center items-center">
              <span className="material-icons text-2xl">my_location</span>
            </button>
          </div>
          <div className="flex flex-col justify-center content-center ">
            <div id="2" className="flex justify-center my-10">
              <img src={heavyRain} className="w-36" alt="HeavyRain" />
            </div>
            <div id="3" className="text-center mb-10">
              <span className="text-6xl">
                {weatherProps?.list[0].main.temp_max}
              </span>
              <span className="text-2xl"> °C</span>
            </div>
            <div id="4" className="text-center mb-10">
              <span className="text-3xl text-dark-100">
                {weatherProps?.list[0].weather[0].description}
              </span>
            </div>
            <div
              id="5"
              className="flex flex-col text-center text-dark-200 mb-10"
            >
              <span>Today • Fri, 5 Jun</span>
              <div className="flex justify-center items-center mt-5">
                <span className="material-icons text-lg text-dark-200  mr-1">
                  location_pin
                </span>
                <span className="font-semibold">{weatherProps?.city.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="right" className="w-2/3 bg-right overflow-scroll font-raleway">
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
            Today’s Highlights
          </h1>
          <div className="grid grid-flow-col gap-10">
            <WindStatus windSpeed={weatherProps?.list[0].wind.speed} />
            <Humidity humidity={humidity} />
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

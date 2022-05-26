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
  const [humidity, setHumidity] = useState<number>(0);
  const [weatherProps, setWeatherProps] = useState<RootObject>();

  const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&q=Maputo&appid=e81a6836bb1ca7c059ad403ca41b2dbe`;

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
        <LeftPanel
          temp={weatherProps?.list[0].main.temp_max}
          description={weatherProps?.list[0].weather[0].description}
          city={weatherProps?.city.name}
        />
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
                    date={weather.dt_txt}
                    icon={weather.weather[0].description}
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

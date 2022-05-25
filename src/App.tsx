import { useState, useEffect } from "react";
import "./App.css";
import DailyWeather from "./components/DailyWeather";
import { RootObject } from "./components/Type";

function App() {
  const [city, setCity] = useState("Maputo");
  const [weatherProps, setWeatherProps] = useState<RootObject | undefined>();

  const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city}&appid=e81a6836bb1ca7c059ad403ca41b2dbe`;

  async function fetchWeatherProps() {
    const response = await fetch(url);
    const weather_props = await response.json();
    setWeatherProps(weather_props);

    // weatherProps.map((weather) => {
    //   return console.log(weather.list[0].main.temp_max);
    // });

    // console.log(weatherProps.city);
    console.log("Hello");
  }

  useEffect(() => {
    fetchWeatherProps();
  }, []);

  return (
    <div className="flex">
      <div id-="left" className="w-1/3 h-screen bg-left text-white">
        Left
        <span>{weatherProps?.city.name}</span>
      </div>
      <div id="right" className="w-2/3 h-screen bg-right">
        <header className="flex justify-end">
          <button className="text-white">°C</button>
          <button className="text-white">°F</button>
        </header>
        <main className="flex">
          {weatherProps?.list.slice(0, 4).map((weather: any) => {
            return (
              <div className="m-10">
                <DailyWeather
                  max={weather.main.temp_max}
                  min={weather.main.temp_min}
                />
              </div>
            );
          })}
        </main>
        <h1 className="m-10 font-bold text-white text-xl">
          Today’s Hightlights
        </h1>
      </div>
    </div>
  );
}

export default App;

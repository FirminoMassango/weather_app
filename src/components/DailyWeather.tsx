import { useState } from "react";
import BrokenCloudsIcon from "./cloud_icons/sm/BrokenClouds-sm";
import ClearSkyIcon from "./cloud_icons/sm/ClearSkyIcon-sm";
import FewCloudsIcon from "./cloud_icons/sm/FewCloudsIcon-sm";
import HeavyRainIcon from "./cloud_icons/sm/HeavyRainIcon-sm";
import LightRainIcon from "./cloud_icons/sm/LightRainIcon-sm";
import MistIcon from "./cloud_icons/sm/MistIcon-sm";
import RainIcon from "./cloud_icons/sm/RainIcon-sm";
import ScatteredCloudsIcon from "./cloud_icons/sm/ScatteredCloudsIcon-sm";
import ShowerRainIcon from "./cloud_icons/sm/ShowerRainIcon-sm";
import SnowIcon from "./cloud_icons/sm/SnowIcon-sm";
import ThunderstormIcon from "./cloud_icons/sm/ThunderstormIcon-sm";

function DailyWeather(props: any) {
  // const celcius_max = props.max - 273.15;
  // const celcius_min = props.min - 273.15;

  return (
    <div className="bg-left w-full h-44 flex flex-col justify-center ">
      <header className="text-header text-center">{props.date}</header>
      <main className="flex justify-center">
        {props.icon === "Clear Sky" && <ClearSkyIcon />}
        {props.icon === "Few clouds" && <FewCloudsIcon />}
        {props.icon === "Scattered clouds" && <ScatteredCloudsIcon />}
        {props.icon === "Overcast clouds" && <ScatteredCloudsIcon />}
        {props.icon === "Broken clouds" && <BrokenCloudsIcon />}
        {props.icon === "Shower rain" && <ShowerRainIcon />}
        {props.icon === "Rain" && <RainIcon />}
        {props.icon === "Light rain" && <LightRainIcon />}
        {props.description === "Heavy rain" && <HeavyRainIcon />}
        {props.icon === "Thunderstorm" && <ThunderstormIcon />}
        {props.icon === "Snow" && <SnowIcon />}
        {props.icon === "Mist" && <MistIcon />}
      </main>
      <footer className="flex justify-between  text-center mx-3">
        <span className="text-maxdegree">{Math.round(props.max)} °C</span>
        <span className="text-mindegree">{Math.round(props.min)} °C</span>
      </footer>
    </div>
  );
}

export default DailyWeather;

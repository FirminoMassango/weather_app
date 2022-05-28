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
import useChangeDegreeStore from "../stores/changeDegreeUnit";
import SleetIcon from "./cloud_icons/sm/SleetIcon-sm";

function DailyWeather(props: any) {
  const isDegreeUnitInCelsius = useChangeDegreeStore(
    (state) => state.isDegreeInCelsius
  );
  const date: Date = new Date(props.date);
  const weekDay: string = date.toString().substring(0, 3) + ", ";
  const day: string = date.toString().substring(8, 10) + " ";
  const month: string = date.toString().substring(4, 7);
  const fullDate: string = weekDay + day + month;

  return (
    <div className="bg-left w-full h-44 flex flex-col justify-center ">
      <header className="text-header text-center">
        {props.date === "Tomorrow" ? "Tomorrow" : fullDate}
      </header>
      <main className="flex justify-center">
        {props.icon === "Clear Sky" && <ClearSkyIcon />}
        {props.icon === "Few clouds" && <FewCloudsIcon />}
        {props.icon === "Scattered clouds" && <ScatteredCloudsIcon />}
        {props.icon === "Overcast clouds" && <ScatteredCloudsIcon />}
        {props.icon === "Broken clouds" && <BrokenCloudsIcon />}
        {props.icon === "Shower rain" && <ShowerRainIcon />}
        {props.icon === "Rain" && <RainIcon />}
        {(props.icon === "Light rain" && <LightRainIcon />) ||
          (props.icon === "Moderate rain" && <LightRainIcon />) ||
          (props.icon === "Freezing rain" && <LightRainIcon />) ||
          (props.icon === "Light shower rain" && <LightRainIcon />) ||
          (props.icon === "Heavy shower rain" && <LightRainIcon />)}
        {props.icon === "Heavy rain" && <HeavyRainIcon />}
        {(props.icon === "Thunderstorm with light rain" && (
          <ThunderstormIcon />
        )) ||
          (props.icon === "Thunderstorm with rain" && <ThunderstormIcon />) ||
          (props.icon === " 	Thunderstorm with heavy rain" && (
            <ThunderstormIcon />
          ))}
        {props.icon === "Snow" && <SnowIcon />}
        {props.icon === "Heavy snow shower" && <SnowIcon />}
        {(props.icon === "Sleet" && <SleetIcon />) ||
          (props.icon === "Heavy sleet" && <SleetIcon />)}
        {(props.icon === "Mist" && <MistIcon />) ||
          (props.icon === "Smoke" && <MistIcon />) ||
          (props.icon === "Haze" && <MistIcon />) ||
          (props.icon === "Sand/dust" && <MistIcon />) ||
          (props.icon === "Fog" && <MistIcon />) ||
          (props.icon === "Freezing Fog" && <MistIcon />)}
      </main>
      {isDegreeUnitInCelsius ? (
        <footer className="flex justify-between  text-center mx-3">
          <span className="text-maxdegree">{Math.round(props.max)} °C</span>
          <span className="text-mindegree">{Math.round(props.min)} °C</span>
        </footer>
      ) : (
        <footer className="flex justify-between  text-center mx-3">
          <span className="text-maxdegree">
            {Math.round(props.max * 1.8 + 32)} °F
          </span>
          <span className="text-mindegree">
            {Math.round(props.min * 1.8 + 32)} °F
          </span>
        </footer>
      )}
    </div>
  );
}

export default DailyWeather;

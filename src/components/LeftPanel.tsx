import BrokenCloudsIcon from "./cloud_icons/lg/BrokenClouds";
import ClearSkyIcon from "./cloud_icons/lg/ClearSkyIcon";
import FewCloudsIcon from "./cloud_icons/lg/FewCloudsIcon";
import HeavyRainIcon from "./cloud_icons/lg/HeavyRainIcon";
import LightRainIcon from "./cloud_icons/lg/LightRainIcon";
import MistIcon from "./cloud_icons/lg/MistIcon";
import RainIcon from "./cloud_icons/lg/RainIcon";
import ScatteredCloudsIcon from "./cloud_icons/lg/ScatteredCloudsIcon";
import ShowerRainIcon from "./cloud_icons/lg/ShowerRainIcon";
import SnowIcon from "./cloud_icons/lg/SnowIcon";
import ThunderstormIcon from "./cloud_icons/lg/ThunderstormIcon";
import useActivateDrawerStore from "../stores/activeDrawer";
import useChangeDegreeStore from "../stores/changeDegreeUnit";
import SleetIcon from "./cloud_icons/lg/SleetIcon";

function LeftPanel(props: any) {
  const isDrawerActive = useActivateDrawerStore(
    (state) => state.isDrawerActive
  );
  const activateDrawer = useActivateDrawerStore(
    (state) => state.activateDrawer
  );
  const isDegreeUnitInCelsius = useChangeDegreeStore(
    (state) => state.isDegreeInCelsius
  );
  const date: Date = new Date(props.date);
  const weekDay: string = date.toString().substring(0, 3) + ", ";
  const day: string = date.toString().substring(8, 10) + " ";
  const month: string = date.toString().substring(4, 7);
  const fullDate: string = weekDay + day + month;

  function handleOpenDrawer() {
    activateDrawer(!isDrawerActive);
  }

  return (
    <div className="p-10 bg-hero-pattern bg-50% bg-no-repeat bg-top-4 bg-opacity-10">
      <div id="1" className="flex justify-between">
        <button className="bg-secondary px-5" onClick={handleOpenDrawer}>
          Search for places
        </button>
        <button
          className="bg-secondary w-10 h-10 rounded-full flex justify-center items-center"
          title="My Location"
        >
          <span className="material-icons text-2xl">my_location</span>
        </button>
      </div>
      <div className="flex flex-col justify-center content-center ">
        <div id="2" className="flex justify-center my-5">
          {props.icon === "Clear Sky" && <ClearSkyIcon />}
          {props.icon === "Few clouds" && <FewCloudsIcon />}
          {props.icon === "Scattered clouds" && <ScatteredCloudsIcon />}
          {props.icon === "Overcast clouds" && <ScatteredCloudsIcon />}
          {props.icon === "Broken clouds" && <BrokenCloudsIcon />}
          {props.icon === "Shower rain" && <ShowerRainIcon />}
          {props.icon === "Rain" && <RainIcon />}
          {(props.icon === "Light rain" && <LightRainIcon />) ||
            (props.icon === "Freezing rain" && <LightRainIcon />) ||
            (props.icon === "Light shower rain" && <LightRainIcon />) ||
            (props.icon === "Heavy shower rain" && <LightRainIcon />)}
          {props.description === "Heavy rain" && <HeavyRainIcon />}
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
        </div>

        {isDegreeUnitInCelsius ? (
          <div id="3" className="text-center mb-10">
            <span className="text-6xl">{Math.floor(props.temp)}</span>
            <span className="text-2xl"> °C</span>
          </div>
        ) : (
          <div id="3" className="text-center mb-10">
            <span className="text-6xl">
              {Math.floor(props.temp * 1.8 + 32)}
            </span>
            <span className="text-2xl"> °F</span>
          </div>
        )}

        <div id="4" className="text-center mb-10">
          <span className="text-3xl text-dark-100">{props.description}</span>
        </div>
        <div id="5" className="flex flex-col text-center text-dark-200 mb-10">
          <div>
            <span>Today</span>
            <span className="mx-4">•</span>
            <span>{fullDate}</span>
          </div>
          <div className="flex justify-center items-center mt-5">
            <span className="font-semibold">{props.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;

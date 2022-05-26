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

function LeftPanel(props: any) {
  return (
    <div className="p-10 bg-hero-pattern bg-50% bg-no-repeat bg-top-4 bg-opacity-10">
      <div></div>
      <div id="1" className="flex justify-between">
        <button className="bg-secondary px-5">Search for places</button>
        <button className="bg-secondary w-10 h-10 rounded-full flex justify-center items-center">
          <span className="material-icons text-2xl">my_location</span>
        </button>
      </div>
      <div className="flex flex-col justify-center content-center ">
        <div id="2" className="flex justify-center my-5">
          {props.description === "clear sky" && <ClearSkyIcon />}
          {props.description === "few clouds" && <FewCloudsIcon />}
          {props.description === "scattered clouds" && <ScatteredCloudsIcon />}
          {props.description === "overcast clouds" && <ScatteredCloudsIcon />}
          {props.description === "broken clouds" && <BrokenCloudsIcon />}
          {props.description === "shower rain" && <ShowerRainIcon />}
          {props.description === "rain" && <RainIcon />}
          {props.description === "heavy rain" && <HeavyRainIcon />}
          {props.description === "light rain" && <LightRainIcon />}
          {props.description === "thunderstorm" && <ThunderstormIcon />}
          {props.description === "snow" && <SnowIcon />}
          {props.description === "mist" && <MistIcon />}
        </div>
        <div id="3" className="text-center mb-10">
          <span className="text-6xl">{props.temp}</span>
          <span className="text-2xl"> °K</span>
        </div>
        <div id="4" className="text-center mb-10">
          <span className="text-3xl text-dark-100">{props.description}</span>
        </div>
        <div id="5" className="flex flex-col text-center text-dark-200 mb-10">
          <span>Today • Fri, 5 Jun</span>
          <div className="flex justify-center items-center mt-5">
            <span className="material-icons text-lg text-dark-200  mr-1">
              location_pin
            </span>
            <span className="font-semibold">{props.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;

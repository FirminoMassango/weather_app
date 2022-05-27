import { RootObject } from "../helper/Type";
import AirPressure from "./AirPressure";
import DailyWeather from "./DailyWeather";
import Humidity from "./Humidity";
import SwitchScale from "./SwitchScale";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

function RightPanel(props: RootObject | undefined) {
  return (
    <h1></h1>
    // <div id="container" className="mx-5 md:mx-32 my-10">
    //   <header className="flex justify-end mb-5">
    //     <SwitchScale />
    //   </header>
    //   <main className="grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-5">
    //     {props.weatherProps?.data.slice(1, 6).map((weather: any, index) => {
    //       return (
    //         <div className="flex justify-between">
    //           <DailyWeather
    //             date={index === 0 ? "Tomorrow" : weather.valid_date}
    //             icon={weather.weather.description}
    //             max={weather.app_max_temp}
    //             min={weather.app_min_temp}
    //           />
    //         </div>
    //       );
    //     })}
    //   </main>
    //   <h1 className="my-10 font-bold text-white text-xl">Today’s Highlights</h1>
    //   <div className="w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-10">
    //     <WindStatus
    //       windSpeed={props.weatherProps?.data[0].wind_spd}
    //       windDirection={props.weatherProps?.data[0].wind_cdir}
    //       windDirectionDeg={props.weatherProps?.data[0].wind_dir}
    //     />
    //     <Humidity humidity={props.weatherProps?.data[0].rh as number} />
    //   </div>
    //   <div className="w-full my-10 grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-10">
    //     <Visibility visibility={props.weatherProps?.data[0].vis} />
    //     <AirPressure airPressure={props.weatherProps?.data[0].pres} />
    //   </div>
    // </div>
  );
}

export default RightPanel;

import heavyRain from "../assets/HeavyRain.png";

function DailyWeather(props: any) {
  const celcius_max = props.max - 273.15;
  const celcius_min = props.min - 273.15;
  // const [temperature, ]

  return (
    <div className="bg-left w-full h-44 flex flex-col justify-center ">
      <header className="text-header text-center">Tomorrow</header>
      <main className="flex justify-center">
        <img
          src={heavyRain}
          className="w-12 h-12 text-center"
          alt="weather_icon"
        />
      </main>
      <footer className="flex justify-between  text-center mx-10">
        <span className="text-maxdegree">{Math.round(celcius_max)} °C</span>
        <span className="text-mindegree">{Math.round(celcius_min)} °C</span>
      </footer>
    </div>
  );
}

export default DailyWeather;

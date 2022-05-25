import heavyRain from "../assets/HeavyRain.png";

function DailyWeather(props: any) {
  const celcius_max = props.max - 273.15;
  const celcius_min = props.min - 273.15;

  return (
    <div className="bg-left w-32 h-44 flex flex-col justify-center items-center">
      <header className="text-header">Tomorrow</header>
      <main>
        <img src={heavyRain} className="w-12 h-12" alt="weather_icon" />
      </main>
      <footer className="flex justify-between">
        <span className="text-maxdegree">{Math.round(celcius_max)} °C</span>
        <span className="text-mindegree">{Math.round(celcius_min)} °C</span>
      </footer>
    </div>
  );
}

export default DailyWeather;

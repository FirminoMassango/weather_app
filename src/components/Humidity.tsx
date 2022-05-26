import { useEffect, useState } from "react";

function Humidity(props: any) {
  const [progressFill, setProgressFill] = useState<string>(
    "bg-progress h-2 rounded-lg"
  );

  const humidity: number = props.humidity;

  useEffect(() => {
    if (humidity === 0) {
      setProgressFill("bg-white h-2 rounded-lg");
    } else if (humidity <= 10) {
      setProgressFill("bg-progress w-1/12 h-2 rounded-lg");
    } else if (humidity <= 20) {
      setProgressFill("bg-progress w-1/5 h-2 rounded-lg");
    } else if (humidity <= 30) {
      setProgressFill("bg-progress w-1/3 h-2 rounded-lg");
    } else if (humidity <= 40) {
      setProgressFill("bg-progress w-2/5 h-2 rounded-lg");
    } else if (humidity <= 50) {
      setProgressFill("bg-progress w-1/2 h-2 rounded-lg");
    } else if (humidity <= 60) {
      setProgressFill("bg-progress w-3/5 h-2 rounded-lg");
    } else if (humidity <= 70) {
      setProgressFill("bg-progress w-3/4 h-2 rounded-lg");
    } else if (humidity <= 80) {
      setProgressFill("bg-progress w-4/5 h-2 rounded-lg");
    } else if (humidity <= 90) {
      setProgressFill("bg-progress w-11/12 h-2 rounded-lg");
    } else if (humidity === 100) {
      setProgressFill("bg-progress w-full h-2 rounded-lg");
    }
  }, []);

  return (
    <div className="bg-left flex flex-col justify-center w-full h-44">
      <header className="text-white text-center">Humidity</header>
      <main className="text-white text-5xl text-center font-black my-5">
        {props.humidity}%
      </main>
      <footer className="mx-10 text-white text-xs">
        <div className="flex justify-between pb-1">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <div className="bg-white w-full h-2 rounded-lg">
          <div className={progressFill}></div>
        </div>
        <span className="flex justify-end pt-1">%</span>
      </footer>
    </div>
  );
}

export default Humidity;

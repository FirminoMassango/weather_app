import { useEffect, useState } from "react";

function Humidity(props: any) {
  const [progressFill, setProgressFill] = useState<string>(
    "bg-progress h-2 rounded-lg"
  );

  //   const newNumberType: number = parseInt(props.visibility) + 1;
  //   console.log(newNumberType);

  useEffect(() => {
    if (props.visibility === 0) {
      setProgressFill("bg-white h-2 rounded-lg");
    } else if (props.visibility <= 10) {
      setProgressFill("bg-progress w-1/12 h-2 rounded-lg");
    } else if (parseInt(props.visibility) <= 20) {
      setProgressFill("bg-progress w-1/5 h-2 rounded-lg");
    } else if (parseInt(props.visibility) <= 30) {
      setProgressFill("bg-progress w-1/3 h-2 rounded-lg");
    } else if (parseInt(props.visibility) <= 40) {
      setProgressFill("bg-progress w-2/5 h-2 rounded-lg");
    } else if (parseInt(props.visibility) <= 50) {
      setProgressFill("bg-progress w-1/2 h-2 rounded-lg");
    } else if (parseInt(props.visibility) <= 60) {
      setProgressFill("bg-progress w-3/5 h-2 rounded-lg");
    } else if (parseInt(props.visibility) <= 70) {
      setProgressFill("bg-progress w-3/4 h-2 rounded-lg");
    } else if (parseInt(props.visibility) <= 80) {
      setProgressFill("bg-progress w-4/5 h-2 rounded-lg");
    } else if (parseInt(props.visibility) <= 90) {
      setProgressFill("bg-progress w-11/12 h-2 rounded-lg");
    } else if (parseInt(props.visibility) === 100) {
      setProgressFill("bg-progress w-full h-2 rounded-lg");
    }
  }, []);

  return (
    <div className="bg-left flex flex-col justify-center w-full h-44">
      <header className="text-white text-center">Humidity</header>
      <main className="text-white text-3xl text-center font-black my-5">
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

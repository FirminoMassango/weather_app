function Humidity(props: any) {
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
          <div
            className="bg-progress h-2 rounded-lg"
            style={{ width: `${props.humidity}%` }}
          ></div>
        </div>
        <span className="flex justify-end pt-1">%</span>
      </footer>
    </div>
  );
}

export default Humidity;

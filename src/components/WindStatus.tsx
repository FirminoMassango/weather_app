function WindStatus(props: any) {
  return (
    <div className="bg-left flex flex-col justify-center w-full h-44">
      <header className="text-white text-center">Wind status</header>
      <main className="font-black  text-white text-center my-6">
        <span className="text-5xl">{props.windSpeed}</span> <span>m/s</span>
      </main>
      <footer className="text-white text-center flex justify-center items-center">
        <span
          className="material-icons text-2xl text-dark-200  mr-5"
          style={{ transform: `rotate(${-props.windDirectionDeg}deg)` }}
        >
          arrow_circle_left
        </span>
        <span>{props.windDirection}</span>
      </footer>
    </div>
  );
}

export default WindStatus;

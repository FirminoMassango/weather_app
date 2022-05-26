function AirPressure(props: any) {
  return (
    <div className="bg-left flex flex-col justify-center w-full h-36">
      <header className="text-white text-center">Air Pressure</header>
      <main className="font-black  text-white text-center my-6">
        <span className="text-5xl">{props.airPressure}</span> <span>hPa</span>
      </main>
    </div>
  );
}

export default AirPressure;
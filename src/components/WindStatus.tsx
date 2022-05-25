function WindStatus(props: any) {
  return (
    <div className="bg-left flex flex-col justify-center w-full h-44">
      <header className="text-white text-center">Wind status</header>
      <main className="font-black  text-white text-center my-6">
        <span className="text-3xl">{props.windSpeed}</span> <span>mph</span>
      </main>
      <footer className="text-white text-center">wind status</footer>
    </div>
  );
}

export default WindStatus;

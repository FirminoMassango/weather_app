function Visibility(props: any) {
  return (
    <div className="bg-left flex flex-col justify-center w-full h-36">
      <header className="text-white text-center">Visibility</header>
      <main className="font-black  text-white text-center my-6">
        <span className="text-4xl">{props.visibility / 1000}</span>{" "}
        <span>km</span>
      </main>
    </div>
  );
}
export default Visibility;

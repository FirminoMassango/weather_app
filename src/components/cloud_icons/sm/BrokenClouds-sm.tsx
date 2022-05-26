import brokenClouds from "../../../assets/HeavyCloud.png";

function BrokenCloudsIcon() {
  return (
    <div id="2" className="flex justify-center my-5">
      <div className="flex justify-center content-center">
        <img src={brokenClouds} className="w-12" alt="broken Clouds" />
        <img
          src={brokenClouds}
          className="w-10 relative right-8 bottom-1 opacity-20"
          alt="broken Clouds"
        />
      </div>
    </div>
  );
}

export default BrokenCloudsIcon;

import brokenClouds from "../../../assets/HeavyCloud.png";

function BrokenCloudsIcon() {
  return (
    <div id="2" className="flex justify-center my-10">
      <img src={brokenClouds} className="w-36" alt="broken Clouds" />
      <img
        src={brokenClouds}
        className="w-36 relative right-28 bottom-3 opacity-20"
        alt="broken Clouds"
      />
    </div>
  );
}

export default BrokenCloudsIcon;

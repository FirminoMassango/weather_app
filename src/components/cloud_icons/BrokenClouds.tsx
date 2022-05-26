import brokenClouds from "../assets/HeavyCloud.png";

function BrokenCloudsIcon() {
  return (
    <div id="2" className="flex justify-center my-10">
      <img src={brokenClouds} className="w-36" alt="broken Clouds" />
      <img
        src={brokenClouds}
        className="w-36 position-absolute mb-2"
        alt="broken Clouds"
      />
    </div>
  );
}

export default BrokenCloudsIcon;

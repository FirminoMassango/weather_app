import mist from "../../../assets/mist.png";
import cloud from "../../../assets/HeavyCloud.png";

function MistIcon() {
  return (
    <div className="flex justify-center my-5">
      <div className="flex justify-center content-center">
        <img src={cloud} className="w-12" alt="broken Clouds" />
        <img
          src={mist}
          className="w-10 relative right-5 top-4 opacity-20 z-1"
          alt="Mist icon"
        />
      </div>
    </div>
  );
}

export default MistIcon;

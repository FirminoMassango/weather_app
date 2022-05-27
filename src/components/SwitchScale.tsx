import { useState } from "react";
import useChangeDegreeStore from "../stores/changeDegreeUnit";

function SwitchScale() {
  const [isCelsiusButtonActive, setIsCelsiusButtonActive] = useState(true);
  const [isFahrenheitButtonActive, setIsFahrenheitButtonActive] =
    useState(false);
  const changeDegreeUnit = useChangeDegreeStore(
    (state) => state.changeDegreeUnit
  );

  function changeUnitToCelsius() {
    changeDegreeUnit(true);
    setIsCelsiusButtonActive(true);
    setIsFahrenheitButtonActive(false);
  }

  function changeUnitToFahrenheit() {
    changeDegreeUnit(false);
    setIsCelsiusButtonActive(false);
    setIsFahrenheitButtonActive(true);
  }

  return (
    <div>
      <button
        className={
          isCelsiusButtonActive
            ? "bg-header font-semibold w-8 h-8 rounded-full mr-2"
            : "bg-deactivatedDegreeButton text-white font-semibold w-8 h-8 rounded-full mr-2"
        }
        onClick={changeUnitToCelsius}
      >
        °C
      </button>
      <button
        className={
          isFahrenheitButtonActive
            ? "bg-header font-semibold w-8 h-8 rounded-full mr-2"
            : "bg-deactivatedDegreeButton text-white font-semibold w-8 h-8 rounded-full mr-2"
        }
        onClick={changeUnitToFahrenheit}
      >
        °F
      </button>
    </div>
  );
}

export default SwitchScale;

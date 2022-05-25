function SwitchScale() {
  return (
    <div>
      <button className="bg-header font-semibold w-8 h-8 rounded-full mr-2">
        °C
      </button>
      <button className="bg-deactivatedDegreeButton text-white font-semibold w-8 h-8 rounded-full mr-2">
        °F
      </button>
    </div>
  );
}

export default SwitchScale;

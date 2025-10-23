import { useBattery } from "@uidotdev/usehooks";

function Battery() {
  const { loading, level, charging, chargingTime, dischargingTime } =
    useBattery();

  return (
    <div className="wrapper">
      <h1>useBattery Hook</h1>

      {!loading ? (
        <div>
          <p>Battery Level: {(level * 100).toFixed(0)}%</p>
          <p>Charging: {charging ? "Yes" : "No"}</p>
          <p>
            Charging Time:{" "}
            {chargingTime === Infinity ? "N/A" : `${chargingTime} seconds`}
          </p>
          <p>
            Discharging Time:{" "}
            {dischargingTime === Infinity
              ? "N/A"
              : `${dischargingTime} seconds`}
          </p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Battery;

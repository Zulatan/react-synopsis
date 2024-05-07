import React from "react";

function GrandChildComponent({ data, setData }) {
  console.log("Data:", data);

  return (
    <div>
      <button onClick={() => setData("World")}>
        Change Data
      </button>
    </div>
  );
}

export default GrandChildComponent;
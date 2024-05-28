// ChildComponent.js
import React from "react";
import { useMyContext } from "./myContext";

function ChildComponent() {
  const { data, setData } = useMyContext();

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData("New Data from Child")}>
        Change Data
      </button>
    </div>
  );
}

export default ChildComponent;




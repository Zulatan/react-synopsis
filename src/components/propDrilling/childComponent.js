import React from "react";
import GrandChildComponent from "./GrandChildComponent";

function ChildComponent({ data, setData }) {
  return <GrandChildComponent data={data} setData={setData} />;
}

export default ChildComponent;
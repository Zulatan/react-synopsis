import React, { useState } from "react";
import ChildComponent from './childComponent';

function ParentComponent() {
  const [data, setData] = useState("Hello");
  
  return <ChildComponent data={data} setData={setData} />;
}

export default ParentComponent;
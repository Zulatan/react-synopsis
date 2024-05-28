// App.js
import React from "react";
import { MyProvider } from "./components/ContextAPI/myContext";
import ChildComponent from "./components/ContextAPI/childComponent";
import Counter from "./components/Redux/counter";
import store from "./components/Redux/store";

function App() {
  return (
    <div>
      {/* ContextAPI below */}
      {/* <MyProvider>
        <ChildComponent />
      </MyProvider> */}

    </div>
  ); 
}

export default App;



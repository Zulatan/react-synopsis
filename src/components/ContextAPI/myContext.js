import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function MyProvider({ children }) {
  const [data, setData] = useState("Hello from Context");

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
} 
import React from "react";
import { BtnDecrement } from "./components/BtnDecrement";
import { Counter } from "./components/Counter";
import { BtnIncrement } from "./components/BtnIncrement";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div>
      <ContextProvider>
        <BtnDecrement />
        <Counter />
        <BtnIncrement />
      </ContextProvider>
    </div>
  );
}

export default App;

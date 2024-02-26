import { useContext } from "react";
import { ContextApp } from "../context/Context";

export const Counter = () => {
  const { counter } = useContext(ContextApp);
  return (
    <span style={{ color: counter <= 0 ? "red" : "black" }}>{counter}</span>
  );
};

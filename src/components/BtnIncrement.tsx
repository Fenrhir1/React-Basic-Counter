import { useContext } from "react";
import { ContextApp } from "../context/Context";

export const BtnIncrement = () => {
  const { onClickIncrement } = useContext(ContextApp);
  return <button onClick={onClickIncrement}>Increment</button>;
};

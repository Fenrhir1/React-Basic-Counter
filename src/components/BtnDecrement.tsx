import { useContext } from "react";
import { ContextApp } from "../context/Context";

export const BtnDecrement = () => {
  const { onClickDecrement } = useContext(ContextApp);
  return <button onClick={onClickDecrement}>Decrement</button>;
};

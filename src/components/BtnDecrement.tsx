import { useContext } from "react";
import { ContextApp } from "../context/Context";
import { Counter } from "./Counter";

export const BtnDecrement = () => {
  const { onClickDecrement, counter } = useContext(ContextApp);
  return (
    <button disabled={counter <= 0 ? true : false} onClick={onClickDecrement}>
      Decrement
    </button>
  );
};

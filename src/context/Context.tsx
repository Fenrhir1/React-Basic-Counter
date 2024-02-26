import { ReactNode, createContext, useState } from "react";

type ContextProps = {
  children: ReactNode;
};

export const ContextApp = createContext({
  counter: 0,
  onClickIncrement: () => {},
  onClickDecrement: () => {},
});

export const ContextProvider = ({ children }: ContextProps) => {
  const [counter, setCounter] = useState(0);

  const onClickIncrement = () => {
    setCounter(counter + 1);
  };

  const onClickDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <ContextApp.Provider
      value={{ counter, onClickIncrement, onClickDecrement }}
    >
      {children}
    </ContextApp.Provider>
  );
};

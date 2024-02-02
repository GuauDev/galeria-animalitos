import { ReactNode, createContext, useState } from "react";

const Context = createContext({});

function ContextProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState(undefined);
  return (
    <Context.Provider
      value={{
        image,
        setImage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

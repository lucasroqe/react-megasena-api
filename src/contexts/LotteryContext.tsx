import { createContext, ReactNode, useEffect, useState } from "react";
import { LotteryContextProps, Props } from "../types";
import lottery from "../services/Lottery";

export interface ProviderProps {
  children: ReactNode;
}

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
    
  const [megasena, setMegasena] = useState<Props | undefined>();

  useEffect(() => {
    (async function () {
      const r = await lottery.get();
      setMegasena(r.megasena);
      console.log(r);
    })();
  }, []);
  
  return (
    <LotteryContext.Provider value={{ megasena }}>
      {children}
    </LotteryContext.Provider>
  );
}

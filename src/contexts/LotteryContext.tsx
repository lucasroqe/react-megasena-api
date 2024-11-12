import { createContext, ReactNode, useEffect, useState } from "react";
import { LotteryContextProps, Props } from "../types";
import lottery from "../services/Lottery";

export interface ProviderProps {
  children: ReactNode;
}

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
    
  const [megasena, setMegasena] = useState<Props | undefined>();
  const [quina, setQuina] = useState<Props | undefined>();
  const [timemania, setTimemania] = useState<Props | undefined>();

  useEffect(() => {
    (async function () { 
      const r = await lottery.get();
      setMegasena(r.megasena);
      setQuina(r.quina);
      setTimemania(r.timemania);
    })();
  }, []);
  
  return (
    <LotteryContext.Provider value={{ megasena, quina, timemania }}>
      {children}
    </LotteryContext.Provider>
  );
}
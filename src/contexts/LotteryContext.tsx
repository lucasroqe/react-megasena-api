import { createContext, ReactNode, useEffect, useState } from "react";
import { LotteryContextProps, Props, ThemeProps } from "../types";
import lottery from "../services/Lottery";
import { mega, quina, timemania } from "../themes";

export interface ProviderProps {
  children: ReactNode;
}

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
    
  const [megasena, setMegasena] = useState<Props | undefined>();
  const [quina, setQuina] = useState<Props | undefined>();
  const [timemania, setTimemania] = useState<Props | undefined>();
  const [theme, setTheme] = useState<ThemeProps>(mega);

  useEffect(() => {
    (async function () { 
      const r = await lottery.get();
      setMegasena(r.megasena);
      setQuina(r.quina);
      setTimemania(r.timemania);
    })();
  }, []);
  
  return (
    <LotteryContext.Provider value={{ megasena, quina, timemania, theme, setTheme}}>
      {children}
    </LotteryContext.Provider>
  );
}
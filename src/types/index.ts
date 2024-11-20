export interface LotteryContextProps {
  megasena: Props | undefined;
  quina: Props | undefined;
  timemania: Props | undefined;
  theme: ThemeProps;
  setTheme: (value: ThemeProps) => void;
}

export interface ThemeProps{
  background: string;
  color: string;
}

export interface LotteryProps {
  megasena: Props;
  quina: Props;
  timemania: Props;
}

export interface Props {
  acumulado: boolean;
  concursoEspecial: boolean;
  dataApuracao: string;
  dataPorExtenso: string;
  dataProximoConcurso: string;
  dezenas: string[];
  numeroDoConcurso: number;
  quantidadeGanhadores: number;
  tipoPublicacao: number;
  tipoJogo: string;
  valorEstimadoProximoConcurso: number;
  valorPremio: number;
}
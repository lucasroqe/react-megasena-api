import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mega from "../pages/Mega";
import Quina from "../pages/Quina";
import Timemania from "../pages/Timemania";
import Menu from "../components/Menu";
import styled, { ThemeProvider } from "styled-components";
import useLotteryContext from "../hooks/useLotteryContext";

export default function LotteryRoute() {

  const  {theme} = useLotteryContext();
  
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Menu />
        <Box>
          <Routes>
            <Route path="/" element={<Mega />} />
            <Route path="/mega" element={<Mega />} />
            <Route path="/quina" element={<Quina />} />
            <Route path="/timemania" element={<Timemania />} />
          </Routes>
        </Box>
      </BrowserRouter>
      </ThemeProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Box = styled.div`
  padding: 2rem;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 15px;
  width: 20rem;
`;

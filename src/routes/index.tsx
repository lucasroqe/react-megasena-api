import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mega from "../pages/Mega";
import Quina from "../pages/Quina";
import Timemania from "../pages/Timemania";
import Menu from "../components/Menu";
import styled from "styled-components";

export default function LotteryRoute() {
  return (
    <Wrapper>
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

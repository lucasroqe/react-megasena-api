import { LotteryProvider } from "./contexts/LotteryContext";
import styled from "styled-components";
import LotteryRoute from "./routes";

function App() {
  return (
    <Wrapper>
      <LotteryProvider>
        <LotteryRoute/>
      </LotteryProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
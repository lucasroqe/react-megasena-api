import MainPage from "./pages/MainPage";
import {LotteryProvider} from './contexts/LotteryContext'

function App() {
  return (
    <LotteryProvider>
      <MainPage/>
    </LotteryProvider>
  );
}

export default App;
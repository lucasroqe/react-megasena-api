import styled from "styled-components";
import useLotteryContext from "../hooks/useLotteryContext";

export default function Timemania() {
  const { timemania } = useLotteryContext();

  if (!timemania) {
    return <Wrapper>Carregando...</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>TIMEMANIA</Title>
      <ListaBolas>
        {timemania.dezenas.map((dezena) => (
          <Bolas>{dezena}</Bolas>
        ))}
      </ListaBolas>
      {timemania.dataPorExtenso}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
`

const Bolas = styled.div`
    font-size: 18px;
    font-weight: bold;
    background-color: #FFF600;
    color: #049645;
    border-radius: 25px;
    padding: 10px;
`;

const ListaBolas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
  gap: 0.8rem;
`;

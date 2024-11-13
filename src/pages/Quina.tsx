import styled from "styled-components";
import useLotteryContext from "../hooks/useLotteryContext";

export default function Quina() {
  const { quina } = useLotteryContext();

  if (!quina) {
    return <Wrapper>Carregando...</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>QUINA</Title>
      <ListaBolas>
        {quina.dezenas.map((dezena) => (
          <Bolas>{dezena}</Bolas>
        ))}
      </ListaBolas>
      {quina.dataPorExtenso}
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
  background-color: #260085;
  color: #fff;
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

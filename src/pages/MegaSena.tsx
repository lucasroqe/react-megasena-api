import styled from "styled-components";
import useLotteryContext from "../hooks/useLotteryContext";

export default function Mega() {
  const { megasena } = useLotteryContext();

  if (!megasena) {
    return <Wrapper>Carregando...</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>MEGA-SENA</Title>
      <ListaBolas>
        {megasena.dezenas.map((dezena) => (
          <Bolas>{dezena}</Bolas>
        ))}
      </ListaBolas>
      {megasena.dataPorExtenso}
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
    background-color: #209869;
    color: #fff;
    border-radius: 25px;
    padding: 10px;
`;

const ListaBolas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  gap: 0.8rem;
`;

import styled from "styled-components";
import useLotteryContext from "../hooks/useLotteryContext";
import Ball from "../components/Ball";

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
          <Ball key={dezena}>{dezena}</Ball>
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

const ListaBolas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
  gap: 0.8rem;
`;

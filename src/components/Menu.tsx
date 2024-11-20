import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useLotteryContext from "../hooks/useLotteryContext";
import { mega, quina, timemania } from "../themes";

export default function Menu() {

  const { setTheme } = useLotteryContext();

  return (
    <Wrapper>
      <Button>
        <Link to="mega" onClick={()=> setTheme(mega)}>MegaSena</Link>
      </Button>
      <Button>
        <Link to="quina" onClick={()=> setTheme(quina)}>Quina</Link>
      </Button>
      <Button>
        <Link to="timemania" onClick={()=> setTheme(timemania)}>Timemania</Link>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;

const Button = styled.div`
  background-color: gray;
  color: #fff;
  border-radius: 8px;
  padding: 0.5rem;

  a{
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-decoration: none;
    }

    &:visited, &:active {
      color: #fff;
      text-decoration: none;
    }
  }
`;

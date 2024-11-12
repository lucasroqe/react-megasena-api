import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
  return (
    <Wrapper>
      <Button>
        <Link to="mega">MegaSena</Link>
      </Button>
      <Button>
        <Link to="quina">Quina</Link>
      </Button>
      <Button>
        <Link to="timemania">Timemania</Link>
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

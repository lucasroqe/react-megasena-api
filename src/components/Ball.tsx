import styled from "styled-components";

interface BallProps {
  children: string;
}

export default function Ball({ children }: BallProps) {
  return (
    <Sld>{children}</Sld>
  );
}

const Sld = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 25px;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
`;
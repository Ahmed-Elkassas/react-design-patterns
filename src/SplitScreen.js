import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Part = styled.div`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({ children, leftWeight, rightWeight }) => {
  const [left, right] = children;

  return (
    <Container>
      <Part weight={leftWeight}>{left}</Part>
      <Part weight={rightWeight}>{right}</Part>
    </Container>
  );
};

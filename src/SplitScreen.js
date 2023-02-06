import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Part = styled.div`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight,
  rightWeight,
}) => {
  return (
    <Container>
      <Part weight={leftWeight}>
        <Left />
      </Part>
      <Part weight={rightWeight}>
        <Right />
      </Part>
    </Container>
  );
};

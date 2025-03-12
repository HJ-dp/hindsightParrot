import styled from "@emotion/styled";

function BoxList({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  padding: 1rem;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default BoxList;

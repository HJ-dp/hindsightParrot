import styled from "@emotion/styled";

function Header() {
  return (
    <Container>
      <img src="src/assets/real.png" alt="" />
      <h2>껄무새</h2>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  font-weight: bold;

  & img {
    width: 30px;
    height: 30px;
  }
`;

export default Header;

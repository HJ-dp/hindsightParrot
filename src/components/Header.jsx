import styled from "@emotion/styled";
import realIcon from "../assets/real.png";

function Header() {
  return (
    <Container>
      <img src={realIcon} alt="icon" />
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

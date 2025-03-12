import styled from "@emotion/styled";

function ContentBox({ main, title, content }) {
  return (
    <Container>
      <MainContent>{main}</MainContent>
      <BoxTitle>{title}</BoxTitle>
      <div>{content}</div>
    </Container>
  );
}

const Container = styled.li`
  position: relative;
  list-style: none;
  background-color: #fff;
  box-shadow: 2px 4px 12px #00000014;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  max-width: 350px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BoxTitle = styled.h2``;

const MainContent = styled.h1`
  -webkit-text-stroke: 0.02em white; /* 흰색 테두리 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) scale(2);
  white-space: nowrap;
  font-size: clamp(20px, 2vw, 50px);
`;

export default ContentBox;

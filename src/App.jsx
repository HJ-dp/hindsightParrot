import { useState } from "react";
import styled from "@emotion/styled";

import BoxList from "./components/BoxList";
import ContentBox from "./components/ContentBox";
import { useCalculate } from "./hooks/useCalculate";
import dayjs from "dayjs";
import Header from "./components/Header";
function App() {
  // ✅ 날짜 선택을 위한 상태
  const now = dayjs();
  const [selectedDate, setSelectedDate] = useState(now);
  const { calculations, config, updateConfig } = useCalculate(selectedDate);

  // ✅ 날짜 변경 핸들러
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <Header />
      <SinputContainer>
        언제부터 쉬었는지 입력
        <input type="date" onChange={handleDateChange} />
      </SinputContainer>
      <BoxList>
        {Object.values(calculations)
          .filter(({ value }) => value !== 0)
          .map(({ main, title, content }, index) => (
            <ContentBox
              key={index}
              main={main}
              title={title}
              content={content}
            />
          ))}
      </BoxList>
    </>
  );
}

const SinputContainer = styled.div`
  display: grid;
  place-content: center;
  padding: 2rem;
`;

export default App;

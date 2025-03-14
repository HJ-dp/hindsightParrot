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
        <Sinput type="date" onChange={handleDateChange} />
        <div>이때 정신차릴걸</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

const Sinput = styled.input`
  background-color: #40c754;
  padding: 1rem;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 0.1rem;

  &::-webkit-calendar-picker-indicator {
    background-color: #ffffff;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.1rem;
  }
`;

export default App;

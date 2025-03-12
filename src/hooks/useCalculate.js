import { useState, useMemo } from "react";
import dayjs from "dayjs";
import { formatNumber } from "../utils/formatNumber";

export function useCalculate(targetDate = "2023-02-20T00:00:00") {
  const now = dayjs(); // 현재 시간
  const target = dayjs(targetDate);
  const diffInMinutes = Math.abs(target.diff(now, "minute")); // 분 단위 차이
  const diffInHours = Math.abs(target.diff(now, "hour")); // 시간 단위 차이
  const diffInDays = Math.abs(target.diff(now, "day")); // 일 단위 차이

  const [config, setConfig] = useState({
    mealPerDay: 3,
    sleepPerDay: 7,
    studyPerDay: 3,
    workPerDay: 8,
    wagePerHour: 10030,
    gamePerDay: 8,
    wordsPerDay: 100,
    familyPerDay: 7,
    resolutionCycle: 3,
  });

  // ✅ 설정값 업데이트 함수
  const updateConfig = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const totalDays = diffInDays;
  const totalSleep = totalDays * config.sleepPerDay;
  const totalMeals = totalDays * config.mealPerDay;
  const totalEarnings = totalDays * config.workPerDay * config.wagePerHour;
  const totalGames = totalDays * config.gamePerDay;
  const totalStudy = totalDays * config.studyPerDay;
  const totalWords = totalDays * config.wordsPerDay;
  const totalFamily = Math.round(totalDays / config.familyPerDay);
  const totalResolutions = Math.round(totalDays / config.resolutionCycle);

  const calculations = useMemo(
    () => ({
      sleep: {
        main: `${formatNumber(totalSleep)}시간`,
        title: "잠을 얼마나?",
        content: "하루 7시간 기준으로 잠을 이만큼 잤어요",
        value: totalSleep,
      },
      meal: {
        main: `${formatNumber(totalMeals)}끼`,
        title: "밥은 얼마나?",
        content: "하루에 세 끼를 먹었다 계산하면 이만큼 먹었어요",
        value: totalMeals,
      },
      money: {
        main: `${formatNumber(totalEarnings)}원`,
        title: "돈은 얼마나?",
        content: "2025년 최저시급 10030원으로 계산하면 이만큼 벌었어요",
        value: totalEarnings,
      },
      poop: {
        main: `${formatNumber(totalDays)}번`,
        title: "화장실은 얼마나?",
        content: "하루에 한 번 화장실에 간다하면 이만큼 갔어요",
        value: totalDays,
      },
      game: {
        main: `${formatNumber(totalGames)}판`,
        title: "롤은 얼마나?",
        content: "한 판당 30분으로 계산하면 이만큼 했어요",
        value: totalGames,
      },
      study: {
        main: `${formatNumber(totalStudy)}시간`,
        title: "공부는 얼마나?",
        content: "하루에 3시간 공부한다 계산하면 이만큼 했어요",
        value: totalStudy,
      },
      words: {
        main: `${formatNumber(totalWords)}단어`,
        title: "단어는 얼마나?",
        content: "하루에 100개의 단어를 외운다 계산하면 이만큼 했어요",
        value: totalWords,
      },
      family: {
        main: `${formatNumber(totalFamily)}번`,
        title: "효도는 얼마나?",
        content: "일주일에 한번 안부를 묻는다하면 이만큼 했어요",
        value: totalFamily,
      },
      resolution: {
        main: `${formatNumber(totalResolutions)}번`,
        title: "작심삼일은 얼마나?",
        content: "3일에 한번 결심을 한다하면 이만큼 했어요",
        value: totalResolutions,
      },
    }),
    [targetDate, config]
  );

  return { calculations, config, updateConfig };
}

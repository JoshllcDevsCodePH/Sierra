import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Clicker } from "./components/Clicker";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./components/Pages";
import { BoostsPage } from "./components/Pages/boosts";

declare global {
  interface Window {
    Telegram: any;
  }
}
function App() {
  const telegram = window.Telegram.WebApp;
  const [count, setCount] = useState<number>(40432);
  const [maxPower, setMaxPower] = useState<number>(1000);
  const [click, setClick] = useState<number>(14);
  const [progress, setProgress] = useState<number>(100);
  const [currentPower, setCurrentPower] = useState<number>(1000);
  const [isIncreasing, setIsIncreasing] = useState<boolean>(false);

  telegram.expand();
  useEffect(() => {
    setProgress((currentPower / maxPower) * 100);
    if (currentPower < maxPower && !isIncreasing) {
      setIsIncreasing(true);

      const increaser = setInterval(() => {
        setCurrentPower((prevPower) => {
          const newPower = prevPower + 1;
          if (newPower === maxPower) {
            clearInterval(increaser);
            setIsIncreasing(false);
          }

          return newPower;
        });
      }, 1000);
    }
  }, [currentPower, maxPower, isIncreasing]);

  return (
    <Routes>
      <Route
        index
        element={
          <IndexPage
            click={click}
            count={count}
            currentPower={currentPower}
            setCount={setCount}
            setCurrentPower={setCurrentPower}
            progress={progress}
            maxPower={maxPower}
          />
        }
      />
      <Route path={"boosts"} element={<BoostsPage count={count} />} />
    </Routes>
  );
}

export default App;

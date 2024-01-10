import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Clicker } from "./components/Clicker";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState<number>(40432);
  const [maxPower, setMaxPower] = useState<number>(5000);
  const [click, setClick] = useState<number>(1);
  const [currentPower, setCurrentPower] = useState<number>(5000);
  const [isIncreasing, setIsIncreasing] = useState<boolean>(false);

  useEffect(() => {
    console.log(currentPower < maxPower, !isIncreasing);
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          "linear-gradient(0deg, #FCA301 2.42%, #EDB115 45.96%, #000 80.77%, #000 99.14%)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        color: "white",
        height: "100vh",
      }}>
      <Clicker
        click={click}
        count={count}
        currentPower={currentPower}
        setCount={setCount}
        setCurrentPower={setCurrentPower}
      />
      <Footer maxPower={maxPower} currentPower={currentPower} />
    </Box>
  );
}

export default App;

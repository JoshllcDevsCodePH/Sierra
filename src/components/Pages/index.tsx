import { Box } from "@mui/material";
import { Clicker } from "../Clicker";
import { Footer } from "../Footer";
import { FC } from "react";

export type IndexPageProps = {
  count: number;
  setCount: (value: React.SetStateAction<number>) => void;
  currentPower: number;
  setCurrentPower: (value: React.SetStateAction<number>) => void;
  click: number;
  maxPower: number;
  progress: number;
};
export const IndexPage: FC<IndexPageProps> = ({
  count,
  setCount,
  currentPower,
  setCurrentPower,
  click,
  maxPower,
  progress,
}) => {
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
        maxPower={maxPower}
        click={click}
        count={count}
        currentPower={currentPower}
        setCount={setCount}
        setCurrentPower={setCurrentPower}
      />
      <Footer maxPower={maxPower} currentPower={currentPower} progress={progress} />
    </Box>
  );
};

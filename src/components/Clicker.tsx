import styled from "@emotion/styled";
import { Avatar, Box } from "@mui/material";
import React, { FC } from "react";
import { AnimatedCounter } from "react-animated-counter";

export type ClickerProps = {
  count: number;
  setCount: (value: React.SetStateAction<number>) => void;
  currentPower: number;
  setCurrentPower: (value: React.SetStateAction<number>) => void;
  click: number;
};
export const Clicker: FC<ClickerProps> = ({
  count,
  setCount,
  currentPower,
  setCurrentPower,
  click,
}) => {
  const increase = () => {
    setCount(count + click);
    setCurrentPower(currentPower - click);
    console.log(currentPower);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20vh" }}>
        <Avatar src="logo.png" sx={{ width: "30px", height: "30px" }} />
        <AnimatedCounter
          includeDecimals={false}
          includeCommas
          incrementColor="white"
          decrementColor="white"
          value={count}
          color="white"
          fontSize="60px"
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          marginTop: "-10vh",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "90%",
            height: "90%",
            boxShadow:
              "-1px 0px 100px 80px rgba(255, 225, 77, 0.6),  0px 0px 60px 27px rgba(250, 250, 250, 0.6)",
            borderRadius: "50%",
            top: "5%",
            left: "5%",
          },
        }}>
        <ClickerButton
          onClick={() => {
            increase();
          }}
          src="logo.png"
        />
      </Box>
    </>
  );
};

const ClickerButton = styled(Avatar)(() => ({
  width: 250,
  height: 250,

  "&:active": {
    transform: "scale(0.98)",
  },
}));

import styled from "@emotion/styled";
import { Avatar, Box, Button } from "@mui/material";
import { Balance } from "./Balance";
import { useHapticFeedback } from "@vkruglikov/react-telegram-web-app";
import { useEffect, useState } from "react";

export type ClickerProps = {
  count: number;
  setCount: (value: React.SetStateAction<number>) => void;
  currentPower: number;
  setCurrentPower: (value: React.SetStateAction<number>) => void;
  click: number;
  maxPower: number;
};
export const Clicker = ({
  count,
  setCount,
  currentPower,
  setCurrentPower,
  click,
  maxPower,
}: ClickerProps) => {
  const [impactOccurred] = useHapticFeedback();
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (currentPower < maxPower - click) {
      setDisabled(false);
    }
  }, [currentPower, maxPower, click]);

  const increase = () => {
    console.log("ins");

    if (currentPower >= maxPower - click) {
      console.log(currentPower >= maxPower - click, maxPower - click, currentPower);
      setDisabled(true);
      setCurrentPower(maxPower);
      return;
    }
    setCount(count + click);
    setCurrentPower(currentPower + click);
  };

  return (
    <>
      <Balance count={count} />
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
        <Button
          disabled={disabled}
          sx={{
            borderRadius: "50%",
            width: 250,
            height: 250,
            zIndex: 12,
            "&:active": {
              transform: "scale(0.98)",
            },
            "&.Mui-disabled": {
              // background: "red",
            },
          }}>
          <ClickerButton
            onClick={() => {
              impactOccurred("medium");
              increase();
            }}
            src="logo.png"
          />
          {disabled && (
            <Box
              sx={{
                position: "absolute",
                borderRadius: "50%",
                width: 250,
                height: 250,
                background: "rgba(0, 0, 0, 0.35)",
              }}></Box>
          )}
        </Button>
      </Box>
    </>
  );
};

const ClickerButton = styled(Avatar)(() => ({
  width: 250,
  height: 250,
}));

import styled from "@emotion/styled";
import { Box, Button, ButtonGroup, Icon, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { ProgressBar } from "./ProgressBar";

export type FooterProps = {
  maxPower: number;
  currentPower: number;
};
export const Footer: FC<FooterProps> = ({ maxPower, currentPower }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: "60px",
        }}>
        <Box sx={{ display: "flex" }}>
          <Icon sx={{ width: "50px", height: "50px", fontSize: "2rem" }}>⚡</Icon>
          <Box>
            <Typography variant="h5" sx={{ lineHeight: 1, fontWeight: 900 }}>
              {currentPower}
            </Typography>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1, color: "rgba(255, 255, 255, 0.65)" }}>
              {"/  "}
              {maxPower}
            </Typography>
          </Box>
        </Box>
        <Menu color="inherit" variant="text">
          {menu.map((menuItem) => {
            return (
              <Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginInline: "10px",
                  }}>
                  <Icon sx={{ width: "30px", height: "30px", fontSize: "1.2rem" }}>
                    {menuItem.icon}
                  </Icon>
                  <Typography sx={{ fontSize: "12px", textTransform: "none" }}>
                    {menuItem.title}
                  </Typography>
                </Box>
              </Button>
            );
          })}
        </Menu>
      </Box>
      {/* <ProgressBar /> */}
    </>
  );
};

const Menu = styled(ButtonGroup)(() => ({
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  borderRadius: "10px",
  "& .MuiButton-root": {
    borderColor: "rgba(255, 255, 255, 0.45)",
    maxWidth: "65px",
  },
}));

const menu = [
  { icon: "🧸", title: "Frens" },
  { icon: "🪙", title: "Earn" },
  { icon: "🚀", title: "Boosts" },
];

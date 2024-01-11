import { Box } from "@mui/material";
import { Balance } from "../Balance";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
export type BoostsPageProps = {
  count: number;
};
export const BoostsPage: FC<BoostsPageProps> = ({ count }) => {
  const telegram = window.Telegram.WebApp;
  const navigate = useNavigate();
  telegram.BackButton.show();
  telegram.BackButton.onClick(() => {
    navigate("/");
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "linear-gradient(0deg, rgba(185, 123, 0, 0.74) -70.7%, #000 35.94%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "white",
          minHeight: "100vh",
        }}>
        <Balance count={count} />
      </Box>
    </>
  );
};

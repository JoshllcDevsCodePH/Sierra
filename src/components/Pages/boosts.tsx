import { Box, Button, Card, Typography } from "@mui/material";
import { Balance } from "../Balance";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "@vkruglikov/react-telegram-web-app";

export type BoostsPageProps = {
  count: number;
};
export const BoostsPage: FC<BoostsPageProps> = ({ count }) => {
  const navigate = useNavigate();

  return (
    <>
      <BackButton
        onClick={() => {
          navigate("/");
        }}
      />
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
        <Box>
          <Typography variant="h6">Free daily boosters</Typography>
          <Box sx={{ display: "flex" }}>
            <Button>
              <Card>1</Card>
            </Button>
            <Button>1</Button>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6">Free daily boosters</Typography>
          <Box sx={{ display: "flex" }}>
            <Button>
              <Card>1</Card>
            </Button>
            <Button>1</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

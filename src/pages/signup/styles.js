/* eslint-disable no-unused-vars */
import { Box, Paper, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "1rem 2rem",
  display: "flex",
  width: "90%",
  maxWidth: "450px",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  "& > img": {
    width: "150px",
  },
}));

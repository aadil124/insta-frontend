/* eslint-disable no-unused-vars */
import { Box, Paper, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "1.5rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "& > h3": {
    textAlign: "center",
  },
  width: "90%",
  maxWidth: "450px",
  "& > img": {
    height: "15rem",
    padding: "0.5rem",
    width: "100%",
    objectFit: "contain",
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  },
}));

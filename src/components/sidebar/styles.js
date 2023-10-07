/* eslint-disable no-unused-vars */
import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: "1rem 2rem",
  width: "100%",
  height: "100%",
  "& > img": {
    width: "120px",
    marginLeft: "1rem",
  },
  background: "white",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  "& > li > a": {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
  },
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
}));

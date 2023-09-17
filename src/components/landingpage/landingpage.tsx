"use client";

import { Typography, Box, Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import { Work } from "./work";
import { Skills } from "./skills";
import { Education } from "./education";
import { Contact } from './contact'
import { styled } from "@mui/material/styles";

const TitleContainer = styled(Box)(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginBottom: theme.spacing(2),
  flexDirection: "column",
}));

const DownloadBtn = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 5),
  color: theme.palette.error.dark,
  border: "1px solid",
  borderColor: theme.palette.error.light,
  textTransform: "unset",
  marginTop: theme.spacing(5),
  borderRadius: theme.spacing(5),
}));

export const LandingPage = () => {
  return (
    <>
      <TitleContainer>
        <Typography
          sx={{ textShadow: "1px 1px 15px #00000077" }}
          variant="h2"
          fontWeight="bold"
          color="#fff"
        >
          Hi, I am Nobert Casper
        </Typography>
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{
            color: (theme) => theme.palette.error.light,
            textShadow: "1px 1px 15px #00000077",
          }}
        >
          Software Engineer
        </Typography>
        <DownloadBtn size="large" endIcon={<Download />}>
          Download CV
        </DownloadBtn>
      </TitleContainer>

      <Work />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};

import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

// --------------------------------------------------------------- Styled Components

const FooterDiv = styled("footer")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  
  width: "100%",
  backgroundColor: "#CFD8DC",
}));

const CopyrightIcon = styled(FaRegCopyright)(({ theme }) => ({}));

const Website = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
}));

// --------------------------------------------------------------- Main Component

function Footer() {
  return (
    <FooterDiv>
      <Stack sx={{ p: 1 }} direction="row" alignItems="center" spacing={1}>
        <CopyrightIcon />
        <Typography>Copyright 2022</Typography>
        <Typography>
          <b>Hidoc Dr.Inc.</b>
        </Typography>
      </Stack>
      <Stack sx={{ p: 0.5 }}>
        <Typography>Terms & Conditions | Privacy Policy</Typography>
      </Stack>
    </FooterDiv>
  );
}

export default Footer;

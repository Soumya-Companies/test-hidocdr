import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
import { SiteMapGrids, SiteMapSocialMedia } from "../mock/NavMock";
// --------------------------------------------------------------- Styled Components

const SiteMapDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "auto",
  backgroundColor: "#091634",
  color: "whitesmoke",
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
   flexDirection:"column"
  },
}));

const GridItem = styled(Grid)(({ theme }) => ({
  // border: "1px solid #d3e1ea",
  padding: "10px",
}));

const SiteMapLogo = styled("img")(({ theme }) => ({
  width: "200px",
  height: "35px",
}));

const MailLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
}));

const GridSubItem = styled(Grid)(({ theme }) => ({}));

const Circle = styled(Box)(({ theme,colorid,c2 }) => ({
  // border: "1px solid white",
  borderRadius: "50%",
  width: 50,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: '10PX',
  fontSize:'30px',
  background: colorid === 1 ? c2 : colorid === 2 ? c2 : colorid === 3? c2: colorid===4?c2 :colorid===5 ?c2:null
  
}));

const Square = styled(Box)(({ theme, colorid, c1 }) => ({
  width: 105,
  height: 100,
  border: "1px solid #C7C8C8",
  padding: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  textAlign:'center',
  background:
    colorid === 1
      ? c1
      : colorid === 2
      ? c1
      : colorid === 3
      ? c1
      : colorid === 4
      ? c1
      : colorid === 5
      ? c1
      : null,
}));

const GridText = styled(Typography)(({ theme, colorid, c3 }) => ({
  fontSize: "14px", fontWeight: "bold",lineHeight:'20px',
  color:
    colorid === 1
      ? c3
      : colorid === 2
      ? c3
      : colorid === 3
      ? c3
      : colorid === 4
      ? c3
      : colorid === 5
      ? c3
      : null,
}));

const SMLink = styled(Link)(({ theme,  }) => ({
  textDecoration: 'none',
  color:'white',fontSize:'25px'
}));

// --------------------------------------------------------------- Main Component

function SiteMap() {
  return (
    <SiteMapDiv>
      <GridContainer container columnGap={2} rowGap={2}>
        <GridItem item xs={12} md={3}>
          <Stack
            direction="column"
            alignItems="left"
            justifyContent="center"
            spacing={2}
          >
            <SiteMapLogo src={Logo} alt="Hi-doctor" />
            <Typography>
              Fastest Growing Medical Platform for Doctors
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2}>
              {
                SiteMapSocialMedia.map((item) => (
                  <SMLink to={item.path} key={item.icon} target="blank">
                    {
                      item.icon
                    }
                  </SMLink>
                ))
             }
            </Stack>
          </Stack>
        </GridItem>
        <GridItem item xs={12} md={3}>
          <Stack
            direction="column"
            alignItems="left"
            justifyContent="center"
            spacing={2}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              REACH US
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please contact below details for <br /> any other information
            </Typography>

            <Stack direction="column" alignItems="left">
              <Typography variant="body1" sx={{ color: "#04AEC2" }}>
                Email:
              </Typography>
              <MailLink to="mailto:info@hidoc.co">info@hidoc.co</MailLink>
            </Stack>

            <Stack direction="column" alignItems="left">
              <Typography variant="body1" sx={{ color: "#04AEC2" }}>
                Address:
              </Typography>
              <Typography>
                Hidoc Dr. Inc. <br /> Delaware C Corp <br /> 1309 Coffeen Ave.
                Suite 1200, Sheridan WY, 82801
              </Typography>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem item xs={8}  md={5.5} >
          <Stack
            direction="column"
            alignItems="left"
            justifyContent="center"
            spacing={2}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              HIDOC DR. FEATURES
            </Typography>
            <GridSubItem
              sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              {SiteMapGrids.map((item) => (
                <Square key={item.id} colorid={item.cid} c1={item.boxback}>
                  <Circle colorid={item.cid} c2={item.cback}>
                    {item.icon}
                  </Circle>
                  <GridText
                    variant="subtitle1"
                    colorid={item.cid}
                    c3={item.text}
                  >
                    {item.title}
                  </GridText>
                </Square>
              ))}
            </GridSubItem>
          </Stack>
        </GridItem>
      </GridContainer>
    </SiteMapDiv>
  );
}

export default SiteMap;

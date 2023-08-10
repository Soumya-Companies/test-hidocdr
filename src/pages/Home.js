import React, { Fragment, useContext, useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  Tab,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { ButtonsData } from "../mock/NavMock";
import { APIContext } from "../App";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { getDrugsData } from "../api/Drugs";
// --------------------------------------------------------------- Styled Components

const Section1 = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#DBEEF2",
  height: 80,
  textAlign: "center",
}));

const Section2 = styled(Stack)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#EFF4F8",
  height: "auto",
  paddingTop: "10px",
  paddingBottom: "10px",
}));

const Section3 = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "auto",
  paddingTop: "10px",
  paddingBottom: "10px",
  backgroundColor: "#EFF4F8",
}));

const SpanText1 = styled("span")(({ theme }) => ({
  textTransform: "uppercase",
  color: "#1FB4BD",
  marginLeft: 1,
}));

const SectionInput = styled(TextField)(({ theme }) => ({
  // background: "#E0EAF3",
  borderRadius: "25px",
  border: "1px solid #E0EAF3",
  outline: "none",
  padding: "10px",
  "&:focus": {
    outline: "none",
  },
}));


// --------------------------------------------------------------- Main Component

// --------------------------------------------------------------- Main Component

function Home() {
  const [response, setResponse] = useState([]);
  const [response1, setResponse1] = useState({});

  useEffect(() => {
    getDrugsData()
      .then((res) => {
        console.log(res.data.data)
        console.log(res.data.data.drugData);
        setResponse(res.data.data.drugData);
        setResponse1(res.data.data.exploreMore.news)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(response);

  // ----------------------------------- TabValue



  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Section1>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Your one-stop Solution for
          <SpanText1> Medical Learning and updates</SpanText1>
        </Typography>
      </Section1>
      <Section2
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", p: 3 }}>
          Get Knowledge of the
          <SpanText1> Approved Drugs</SpanText1>
        </Typography>
        <SectionInput
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FaSearch />
              </InputAdornment>
            ),
          }}
          placeholder="Enter Drug Type"
        />
      </Section2>
      <Section2
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="body1" sx={{ p: 2 }} width="500px">
          Dailymed Drug Database : The DailyMed database contains 143072
          labelings submitted to the Food and Drug Adiministration (FDA) by
          companies. DailyMed does not contain a complete listing of labeling
          for FDA-regulated products(e.g, labeling that is not submitted to the
          FDA).
        </Typography>

        <Grid container rowGap={2} columnGap={2} sx={{ width: 400 }}>
          {ButtonsData.map((item) => (
            <Button variant="outlined" key={item.id}>
              {item.title}{" "}
            </Button>
          ))}
        </Grid>
      </Section2>
      <TabContext value={value}>
        <Section3
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{
              border: "2px solid black",
              width: 300,
              textAlign: "center",
              textTransform: "capitalize",
              p: 1,
              height: 280,
            }}
          >
            <Typography
              sx={{ width: "100%", p: 1, borderBottom: "2px solid black" }}
            >
              Drug Data
            </Typography>

            <Tabs
              value={value}
              onChange={handleChange}
              orientation="vertical"
              indicatorColor="none"
              textColor="white"
              sx={{
                "& button": {
                  // background: "#012C54",
                  fontSize: "18px",
                  margin: "5px",
                  textTransform: "capitalize",
                },
                "& button:hover": {
                  background: "#58C4DB",
                  color: "black",
                },

                ".Mui-selected": {
                  color: "black",
                  background: "#58C4DB",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {response.map((item) => (
                <Tab key={item.id} label={item.drugName} value={item.id} />
              ))}
            </Tabs>
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            justifyContent="start"
            spacing={2}
            sx={{
              border: "2px solid black",
              width: { xs: 300, md: 500 },
              textAlign: "center",
              textTransform: "capitalize",
              p: 1,
              height: 280,
            }}
          >
            <Typography
              sx={{ width: "inherit", p: 1, borderBottom: "2px solid black" }}
            >
              Drug Details
            </Typography>
            {response.map((item) => (
              <TabPanel value={item.id} key={item.id} sx={{ overflowY: "scroll" }}>
                <Typography variant="h6" sx={{ color: "#1FBAD0" }}>
                  {item.drugName}
                </Typography>
                <Typography>{item.drugDetails}</Typography>
              </TabPanel>
            ))}
          </Stack>
        </Section3>
      </TabContext>
      <Grid
        container
        columnGap={2}
        rowGap={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        <Grid item xs={12} md={3.8}>
          <Stack direction="column" alignItems="left" sx={{ width: "100%" }}>
            <Typography variant="h6">
              <b>Explore more on HIdoc Dr.</b>
            </Typography>
            <Typography variant="subtitle1">News</Typography>

            <Typography variant="h6">
              <b>{response1.title}</b>
            </Typography>
            <Typography variant="subtitle">{response1.description}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3.8}>
          <Stack direction="column" alignItems="left" sx={{ width: "100%" }}>
            <Typography variant="subtitle1">
              CRITICAL CARE . 10 Mar 2023
            </Typography>
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              <b>
                Discovering Athrogryposis Understanding the Causes, symptoms and
                Diagnosis
              </b>
            </Typography>
            <Typography variant="subtitle">{response1.description}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3.8}>
          <Stack direction="column" alignItems="left" sx={{ width: "100%" }}>
            <Stack direction="column" alignItems="left" sx={{ width: "100%",marginBottom:'10px' }}>
              <Typography variant="subtitle1">
                CRITICAL CARE . 28 Mar 2023
              </Typography>
              <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                <b>
                The Science behind the Crest disease: Exploring underlaying mechanism
                </b>
              </Typography>
            </Stack>
            <hr/>
            <Stack direction="column" alignItems="left" sx={{ width: "100%" }}>
              <Typography variant="subtitle1">
                CRITICAL CARE . 23 Feb 2023
              </Typography>
              <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                <b>
                  A Comprehensive guide to apache scoring:How it works and why you should use it
                </b>
              </Typography>
              
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

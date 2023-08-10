import React, { useEffect, useState,createContext } from 'react'
import './App.css'
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { customTheme } from './theme/customTheme';
import Navbar from './components/Navbar';
import SiteMap from './components/SiteMap';
import Footer from './components/Footer';
import { getDrugsData } from './api/Drugs';
import Routes from './router/Routes'


export const APIContext = createContext()

function App() {
  const [response, setResponse] = useState({});

  // ------------------------------------------------ API Integration

  

  // ------------------------------------------------ API Response destructuring

  // const { drugData, adds, exploreMore } = response;

  return (
    <ThemeProvider theme={customTheme}>
      <APIContext.Provider value={response}>
        <Navbar />
        <Routes />
        <SiteMap />
        <Footer />
      </APIContext.Provider>
    </ThemeProvider>
  );
}

export default App

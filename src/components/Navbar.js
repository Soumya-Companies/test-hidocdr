import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Button, Stack } from "@mui/material";
import LogoImage from "../assets/logo2.jpg";
import { AiOutlineTrophy, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { NavData } from "../mock/NavMock";

// --------------------------------------------------------------- Styled Components

const Header = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "80px",
  //   backgroundColor: "#F8F9FA",
}));

const LogoDiv = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
}));

const Logo = styled("img")(({ theme }) => ({
  width: "120px",
  height: "30px",
  // backgroundColor: "#091634",
}));

// ------------------------------------------------ Navbar

const Navlist = styled("ul")(({ theme,open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    position: 'fixed',
    top: '80px',
    flexDirection: 'column',
    background: "#d3e1ea",
    // color: 'white',
    width: '100%',
    left: open ? 0 : "-100%",
    
  },
}));

const Navitem = styled("li")(({ theme }) => ({
  listStyle: "none",
  padding: "5px",
  display: "flex",
  alignItems: "center",
  
  [theme.breakpoints.down("md")]: {
    justifyContent: 'center',
    padding:'10px'
  },
}));

const SpanItem = styled("span")(({ theme }) => ({
  marginLeft: "10px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));


const ActiveStyle = ({ isActive }) => {
  return {
    textDecoration: "none",
    color: isActive ? "#1DC4E5" : "#212529",
  };
};

// ------------------------------------------------ Responsive menu

const AvatarDiv = styled(Stack)(({ theme }) => ({
  padding: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const RMenu = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
 
 cursor:'pointer',
  [theme.breakpoints.down("md")]: {
    display: 'block',
    margin:'auto'
  },
}));



// ------------------------------------------------ Icons

const BarsIcon = styled(AiOutlineMenu)(({ theme }) => ({
  fontSize: "20px",
}));

const Menubars = styled(AiOutlineMenu)(({ theme }) => ({
  fontSize: "24px",
}));





// --------------------------------------------------------------- Main Component

function Navbar() {
  const [click, setClick] = useState(false)
  
  const handleOpen = () => setClick(!click)
  
  const handleClose = () => setClick(false)

  return (
    <Header>
      <LogoDiv component={Link} to="/">
        <Logo src={LogoImage} alt="Hidoc Dr" />
      </LogoDiv>
      <Navlist className="NavList" open={click}>
        {NavData.map((item) => (
          <Navitem key={item.id} onClick={handleClose}>
            <NavLink to={item.path} style={ActiveStyle} className="Navlink">
              {item.title}
            </NavLink>
            <SpanItem>|</SpanItem>
          </Navitem>
        ))}
      </Navlist>

      <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 1 }}>
        <AvatarDiv direction="row" alignItems="center" spacing={1}>
          <BarsIcon />
          <Button
            variant="outlined"
            startIcon={<AiOutlineTrophy style={{ color: "black" }} />}
            sx={{
              borderRadius: "50px",
              color: "red",
              fontWeight: "bold",
              border: "1px solid #808080",
            }}
          >
            274
          </Button>
          <Avatar
            sx={{
              width: 35,
              height: 35,
              border: "1px solid #808080",
              background: "none",
              color: "black",
            }}
          >
            A
          </Avatar>
        </AvatarDiv>

        <RMenu onClick={handleOpen}>
          <Menubars />
        </RMenu>
      </Stack>
    </Header>
  );
}

export default Navbar;

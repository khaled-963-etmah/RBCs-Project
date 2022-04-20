import { React, useState } from "react";
import { Link } from "react-router-dom";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Grid, IconButton, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Tab, Tabs } from "@mui/material";

import { makeStyles } from "@mui/styles";


const useStyles=makeStyles({
    link:{
    textDecoration:"none",
    color:"black",
    "&:hover": {  color: "#EC5252" },
  },
  toolpar:{
      marginLeft:"50%",
      display:"flex",
      flexDirection:"row-reverse",
    '@media only screen and (min-width: 770px) and (max-width: 1100px)': { marginLeft:"5%" },
    '@media only screen and (min-width: 1100px) and (max-width: 1450px)': { marginLeft:"35%" },
    '@media only screen and (max-width: 770px)': { marginLeft:"5px" ,display:"none"},
  },
  logo:{
    '@media only screen and (max-width: 1000px)': {   marginLeft:"5px"}
  },
  menu:{
    display:"none",
    '@media only screen and (max-width: 770px)': {display:"flex",flexDirection:"row-reverse",width:"100%"}
  }
})

export default function NavPar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Paper elevation={5}  sx={{mb:0.03,dispaly:"flex" ,flexDirection:"row-reverse"}}>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => {setOpen(true);}}
      >
        <div>
          <Divider >
          <Stack
                direction={"column"}
                spacing={1}
                textAlign={"center"}
                sx={{width:"250px",mt:7}}
              >
                <Link className={classes.link} to="/">
                  <Button sx={{width:"110px",  color: "black"}} > الصفحة الرئسية </Button>{" "}
                </Link>
                <Link className={classes.link} to="/projects">
                  <Button sx={{width:"110px",  color: "black"}} > المشاريع </Button>{" "}
                </Link>
                <Link className={classes.link} to="/browse_lectures_page">
                  <Button sx={{width:"110px",  color: "black"}} > المحاضرات </Button>{" "}
                </Link>
                <Link className={classes.link} to="/mypage">
                  <Button sx={{width:"110px",  color: "black"}} > حسابي </Button>{" "}
                </Link>
                <Link className={classes.link} to="/login">
                  <Button sx={{width:"110px",  color: "black"}} > تسجيل الدخول </Button>{" "}
                </Link>
              </Stack>
          </Divider>
        </div>
      </SwipeableDrawer>
      <Box display={"flex"} >
        <AppBar  sx={{backgroundColor:"#F8F8F8",}} >
        <Toolbar>
          <Box className={classes.logo}>
            <Link to="/"> <img src="./RBCsImages/RBCsLogoAppBar.svg" /></Link>
          </Box>
             
          <Box
          className={classes.toolpar}
                // display ={ {xs:'none',sm:'flex'}}
            sx={{
              
             
             
            }}
          >

              <Stack
                direction={"row"}
                spacing={1}
                textAlign={"center"}
              >
                <Link className={classes.link} to="/">
                  <Button sx={{width:"110px",  color: "#EC5252"}} > الصفحة الرئسية </Button>{" "}
                </Link>
                <Link className={classes.link} to="/projects">
                  <Button sx={{width:"110px",  color: "black"}} > المشاريع </Button>{" "}
                </Link>
                <Link className={classes.link} to="/browse_lectures_page">
                  <Button sx={{width:"110px",  color: "black"}} > المحاضرات </Button>{" "}
                </Link>
                <Link className={classes.link} to="/mypage">
                  <Button sx={{width:"110px",  color: "black"}} > حسابي </Button>{" "}
                </Link>
                <Link className={classes.link} to="/login">
                  <Button sx={{width:"110px",  color: "black"}} > تسجيل الدخول </Button>{" "}
                </Link>
              </Stack>
          </Box>
          <Box className={classes.menu}>
          <Box>
                <IconButton
                  size="large"
                  edge="end"
                  color="primary"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              </Box>
            </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
}

import {React,} from 'react';

import LoginFormControlPanel from '../../Components/LoginFormControlPanel'

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    image: {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

      },
      login:{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "@media only screen and (max-width: 700px)": {
            position: "revert",
            transform: "translate(0%, 0%)",
            paddingTop:"100px",  
            paddingRight: "25px",
            paddingBottom:"50px", 
        },
      },
})
export default function LoginPage(){
    const classes = useStyles();
    return(
        <Box className = {classes.image}>
            <Box className = {classes.login}>
                
                <LoginFormControlPanel/>

            </Box>

        </Box>
    );
};
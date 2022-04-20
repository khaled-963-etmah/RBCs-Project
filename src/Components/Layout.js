import { LayersOutlined } from "@mui/icons-material";
import React from "react";
import NavPar from "./NavPar.js"
import Footer from "./Footer";
import { Grid,Box, Stack } from "@mui/material";


export default function Layout( {children}){
    return( 
        <Stack direction={"column"}>
            <NavPar/>
            <div >
                {children}
            </div>
            <Footer/>
        </Stack>
    );
}
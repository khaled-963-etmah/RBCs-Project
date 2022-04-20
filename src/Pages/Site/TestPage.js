import * as React from 'react';
import Test  from '../../Components/test';
import LoginControlPanel from '../../Components/LoginFormControlPanel'
import { Box } from '@mui/material';
export default function TestPage(){
    return(
        <Box height={"600px"} p={20} >
            <Test/>
            <LoginControlPanel/>
        </Box>
    );
}
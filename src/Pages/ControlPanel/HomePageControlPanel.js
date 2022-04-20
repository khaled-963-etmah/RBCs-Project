import {Fragment, React} from 'react';
import ConntrolPanelLayout from '../../Components/ControlPanelLayout';
import { useNavigate ,Navigate, Route,Routes } from 'react-router-dom'; 
import { useAuth } from '../../Components/auth';
import { Button,Box } from '@mui/material';


export default function ConntrolPanelHomePage(){

    const history = useNavigate();
    const auth = useAuth();
    const handleLogout = () =>{
        auth.logout();
        history('/controlpanel/login');
    }

    return(
       
   <Box sx={{}}>
        welcom{auth.user}
        <Button variant="outlined" color="primary" onClick={handleLogout}>logout</Button>
        </Box>


    );
  
}
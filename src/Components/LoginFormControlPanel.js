//React libs
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//material ui libs
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Container, InputBase } from "@mui/material";
import { Stack, Grid } from "@mui/material";

// icons
import { Login, Person, Lock } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";


import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { InputLabel, FormHelperText } from "@mui/material";
import Divider from "@mui/material/Divider";

import { makeStyles } from "@mui/styles";
import { useAuth } from "./auth";

const useStyles = makeStyles({
  //css Classes
  input: {
    border: "2px solid #e6e4e4",
    backgroundColor: "#e6e4e4",
    color: "#747474",
    borderRadius: "25px",
    padding: "7px 20px",
    margin: "1px",
    marginTop: "5px",
    fontSize: "14px",
    width: "90%",
    // "&:hover": { border: "2px solid #EC5252", borderRadius: "25px" },
    // "&:focus": { border: "2px solid #EC5252", borderRadius: "25px" },
  },
  text: {
    color: "#747474",
    textAlign: "right",
    fontSize: "15px",
  },
  span: {
    color: "#747474",
    width: "110px",
    paddingTop: "10px",
    margin: "1px",
    textAlign: "right",
    fontSize: "15px",
  },
  radio: {
    color: "#747474",
  },
  link: {
    color: "#0071FF",
  },
  error: {
    border: "2px solid red",
    backgroundColor: "#e6e4e4",
    color: "#747474",
    borderRadius: "25px",
    padding: "7px 20px",
    margin: "1px",
    marginTop: "5px",
    fontSize: "14px",
    width: "90%",
    // "&:hover": { border: "2px solid #EC5252", borderRadius: "25px" },
    // "&:focus": { border: "2px solid #EC5252", borderRadius: "25px" },
  },
  errortext: {
    color:"#EC5252",
  },
});

export default function LongInForm() {
  const history = useNavigate();
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passswordError, setPasswordError] = useState(false);
  const [loginError, SetLoginError] = useState(false);

  const [passwordIcon, setPasswordIcon] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  //____________________________________________

  const classes = useStyles();
  //____________________________________________

  //handlers
  
  const auth = useAuth()
  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(false);
    setEmailError(false);
    SetLoginError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      //TODO:console
      console.log(email, password);
      auth.login(email);
      history('/controlpanel')
    //   fetch("http://192.168.1.1:8000/api/login", {
    //     method: "post",
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   }).then((response) =>{
    //     if(response.status === 200 )
    //       history("/projects");
    //     if(response.status === 400)
    //     //error email or password not correct
    //      SetLoginError(true);
    // }
    //   );
    }
  };
  //___________________________________________


  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordIcon(false);
    if (e.target.value == "") setPasswordIcon(true);
  };
  //____________________________________________

  const handleClickShowPassword = () => {
    if (showPassword == true) setShowPassword(false);
    if (showPassword == false) setShowPassword(true);
  };
  //____________________________________________

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  //____________________________________________

  return (
    <Box sx={{ Width: "376.4px" }}>
      <Typography variant="h3" textAlign={"center"} color="textPrimery">
        {" "}
        ?????????? ????????????
      </Typography>
      <Typography variant="h6" textAlign="center" color="textSecondary">
        ???????????? ???? ????????????! ???????? ?????? ???????????????? ?? ???????? ???????????? ????????????????
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ marginTop: "50px" }}>
          <Box sx={{ marginTop: "15px" }}>
          {
              loginError?
              <FormLabel
                sx={{
                  pb: 1,
                  px: 3,
                  display: "flex",
                  flexDirection: "row-reverse",
                  height: "20px",
                  width: "90%",
                }}
              >
                <FormHelperText className={classes.errortext}>?????? ???????????????? ???? ???????? ???????????? ?????? ??????????</FormHelperText>
              </FormLabel>:<></>
            }
            <FormControl
              sx={{ m: 0, display: "flex", flexDirection: "row-reverse" }}
              error={emailError}
            >
              <InputBase
                placeholder="User Name"
                type="email"
                className={emailError ? classes.error : classes.input}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="start">
                    {" "}
                    <Divider
                      sx={{ height: 28, m: 0.5 }}
                      orientation="vertical"
                    />
                    <Person />
                  </InputAdornment>
                }
              />
            </FormControl>
            {
              emailError?
              <FormLabel
                sx={{
                  pb: 1,
                  px: 3,
                  display: "flex",
                  flexDirection: "row-reverse",
                  height: "20px",
                  width: "90%",
                }}
              >
                <FormHelperText className={classes.errortext}>???????? ?????????? ?????? ???????????????? </FormHelperText>
              </FormLabel>:<></>
            }
            <FormControl
              sx={{ m: 0, display: "flex", flexDirection: "row-reverse" }}
              error={passswordError}
            >
              {
                <InputBase
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className={passswordError?classes.error: classes.input}
                  value={password}
                  onChange={handlePassword}
                  endAdornment={
                    <InputAdornment position="start">
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      {passwordIcon ? (
                        <Lock />
                      ) : (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      )}
                    </InputAdornment>
                  }
                />
              }
            </FormControl>
            {
              passswordError?
              <FormLabel
                sx={{
                  pb: 1,
                  px: 3,
                  display: "flex",
                  flexDirection: "row-reverse",
                  height: "20px",
                  width: "90%",
                }}
              >
                <FormHelperText className={classes.errortext}>???????? ?????????? ???????? ????????</FormHelperText>
              </FormLabel>:<></>
            }
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            py: 1,
            my: 2,
          }}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<Login />}
            sx={{ width: "136.36px", p: 1, m:"auto", borderRadius: "20px" }}
          >
            <span>?????????? ????????????</span>
          </Button>
        </Box>
      </form>
    </Box>
  );
}

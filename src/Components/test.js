//React libs
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//material ui libs
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { InputLabel, FormHelperText } from "@mui/material";
import Divider from "@mui/material/Divider";

import { makeStyles } from "@mui/styles";

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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("حساب كرية");

  const [userNameError, setUserNameError] = useState(false);
  const [passswordError, setPasswordError] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  //____________________________________________

  const classes = useStyles();
  //____________________________________________

  //handlers

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(false);
    setUserNameError(false);

    if (userName == "") {
      setUserNameError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (userName && password) {
      console.log(userName, password, accountType);
      fetch("http://", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userName, password, accountType }),
      }).then(() => history.push("/"));
    }
  };
  //___________________________________________

  const handleChange = (e) => {
    setAccountType(e.target.value);
  };
  //____________________________________________

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
      <Typography variant="h3" textAlign={"right"} color="textPrimery">
        {" "}
        تسجيل الدخول
      </Typography>
      <Typography variant="h6" textAlign="right" color="textSecondary">
        مرحباً بك مجدداً! أدخل اسم المستخدم و كلمة المرور للمتابعة
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ marginTop: "50px" }}>
          <Box sx={{ marginTop: "15px" }}>
            <FormControl
              sx={{ m: 0, display: "flex", flexDirection: "row-reverse" }}
              error={userNameError}
            >
              {/* <span className={classes.span}>*البريد الالكتروني</span> */}
              <InputBase
                placeholder="User Name"
                type="email"
                className={userNameError ? classes.error : classes.input}
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
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
              userNameError?
              <FormLabel
                sx={{
                  pb: 1,
                  px: 3,
                  display: "flex",
                  flexDirection: "row-reverse",
                  height: "20px",
                }}
              >
                <FormHelperText className={classes.errortext}>يرجى ادخال اسم المستخدم </FormHelperText>
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
                  // value={password}
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
                }}
              >
                <FormHelperText className={classes.errortext}>يرجى ادخال كلمة السر</FormHelperText>
              </FormLabel>:<></>
            }
          </Box>
        </Box>

        <FormControl
          error={passswordError}
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            p: 1,
            m: 1,
          }}
        >
          <RadioGroup row value={accountType} onChange={handleChange}>
            <FormControlLabel
              value="حساب كرية"
              control={<Radio color="primary" />}
              label="حساب كرية"
            />
            <FormControlLabel
              value="حساب طالب"
              control={<Radio color="primary" />}
              label="حساب طالب"
            />
          </RadioGroup>
        </FormControl>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            py: 1,
            my: 2,
            bgcolor: "background.paper",
          }}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<Login />}
            sx={{ width: "136.36px", p: 1, m: 1, borderRadius: "20px" }}
          >
            <span>تسجيل الدخول</span>
          </Button>
        </Box>
      </form>
      <Typography variant="body2" color="textSecondary" textAlign={"right"}>
        <span>
          <span>ليس لديك حساب كرية .</span>
          <Link className={classes.link} to={"/signup"}>
            <span>انقر هنا للتسجيل كطالب</span>
          </Link>
          <br />
        </span>
      </Typography>
      <Typography variant="body2" color="textSecondary" textAlign={"right"}>
        <span>
          <span>هل نسيت كلمة المرور ؟</span>
          <Link className={classes.link} to={"/"}>
            <span> انقر هنا لاستعادة كلمة السر </span>
          </Link>
        </span>
      </Typography>
    </Box>
  );
}

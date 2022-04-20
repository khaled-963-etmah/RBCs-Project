//React libs
import { React, useState } from "react";
import { Link } from "react-router-dom";

//material ui libs
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";

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
import Divider from "@mui/material/Divider";
export default function LongInForm() {
  //states
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("حساب كرية");

  const [userNameError, setUserNameError] = useState(false);
  const [passswordError, setPasswordError] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  //____________________________________________

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

    if (userName && password) console.log(userName, password, accountType);
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
    <Container sx={{ width: "350px" }}>
      <Typography variant="h3" textAlign={"right"} color="textSecondary">
        {" "}
        تسجيل الدخول
      </Typography>
      <Typography variant="h6" textAlign="right" color="textSecondary">
        مرحباً بك مجدداً! أدخل اسم المستخدم و كلمة المرور للمتابعة
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
          }}
          label="اسم المستخدم"
          type={"email"}
          variant="outlined"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          color="secondary"
          required
          fullWidth
          error={userNameError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Person />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            p: 1,
            m: 1,
          }}
          type={showPassword ? "text" : "password"}
          radius={20}
          label="كلمة المرور"
          variant="outlined"
          onChange={handlePassword}
          color="secondary"
          required
          fullWidth
          error={passswordError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
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
            ),
          }}
        />
        <FormControl
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
              control={<Radio color="secondary" />}
              label="حساب كرية"
            />
            <FormControlLabel
              value="حساب طالب"
              control={<Radio color="secondary" />}
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
            color="secondary"
            variant="contained"
            endIcon={<Login />}
          >
            <span>تسجيل الدخول</span>
          </Button>
        </Box>
      </form>
      <Typography variant="body2" color="textSecondary" textAlign={"right"}>
        <span>
          <span>ليس لديك حساب كرية .</span>
          <Link to={"/"}>
            <span>انقر هنا للتسجيل كطالب</span>
          </Link>
          <br />
        </span>
      </Typography>
      <Typography variant="body2" color="textSecondary" textAlign={"right"}>
        <span>
          <span>هل نسيت كلمة المرور ؟</span>
          <Link to={"/"}>
            <span> انقر هنا لاستعادة كلمة السر </span>
          </Link>
        </span>
      </Typography>
    </Container>
  );
}

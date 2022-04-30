import React from "react";
import LogInFormRBCs from "../../Components/LogInFormRBCs";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

//sx={{px:9.6,py:15.555 ,}}

const useStyles = makeStyles({
  login: {  
    paddingRight: "100px",

    "@media only screen and (max-width: 1420px)and (min-width: 701px)": {
      position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -70%)",
      paddingTop: "100px",
      paddingRight: "50px",
      paddingBottom: "100px",
    },
    "@media only screen and (max-width: 700px)": {
      paddingTop: "100px",
      paddingRight: "50px",
      paddingBottom: "100px",
    },
  },
  image: {
    maxWidth: "831px",
      height: "710px",
      display: "flex",
      backgroundColor: "#EFEFEF",
    "@media only screen and (max-width: 1420px)": {
      display:"none",
    },
  },
});

const LogIn = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container direction="row" justifyContent="right" alignItems="right">
        <Grid item className={classes.login}>
          <LogInFormRBCs />
        </Grid>
        <Grid item>
          <Box
            className={classes.image}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={{ display: "flex" }}>
                <img src="./RBCsImages/Login.svg" />
              </Grid>
              <Grid item sx={{ maxWidth: "688px", m: 8 }}>
                <Typography
                  variant="h5"
                  textAlign="center"
                  color="textSecondary"
                >
                  تقديم الدعم العلمي والمساعدة في رفع المهارة العلمية للطالب
                  الجامعي من أجل المساهمة في الارتقاء بالواقع الأكاديمي بشكل خاص
                  والواقع المجتمعي بشكل عام والعمل على رفع السوية الثقافية
                  والتوعوية وإيجاد منصة لطرح الأفكار التنموية الهادفة
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default LogIn;

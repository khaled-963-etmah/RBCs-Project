import * as React from "react";
import SignupFormRBCs from "../../Components/SignupFormRBCs";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import { makeStyles } from "@mui/styles";

//sx={{px:9.6,py:15.555 ,}}

const useStyles = makeStyles({
  singup: {
    maxWidth: "526px",
    paddingRight: "100px",

    "@media only screen and (max-width: 1412px)and (min-width: 701px)": {
      position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -60%)",
      paddingTop: "100px",
      paddingRight: "50px",
      paddingBottom: "100px",
    },
    "@media only screen and (max-width: 700px)": {
      paddingTop: "50px",
      paddingRight: "50px",
      paddingBottom: "25px",
    },
  },
  image: {
    backgroundImage: 'url("./RBCsImages/Signup.png")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
      height: "939px",
      maxWidth: "839px",
      display: "flex",
    "@media only screen and (max-width: 1412px)": {
      display:"none",},
  },
  icon: {
    color: "#EC5252",
    margin: "10px",
  },
  listText: {
    padding: "10px",
    color: "white",
  },
});

const SignUp = () => {
  const [formPage, setFormPage] = React.useState({
    firstPage: "flex",
    secondPage: "none",
  });

  const switchPhoto = (prop) => {
    if (prop == "flex") {
      setFormPage({
        firstPage: "none",
        secondPage: "flex",
      });
    }
    if (prop == "none") {
      setFormPage({
        firstPage: "flex",
        secondPage: "none",
      });
    }
  };
  const classes = useStyles();
  return (
    <Box display={"flex"}>
      <Grid container direction="row" justifyContent="right" alignItems="right">
        <Grid item className={classes.singup}>
          <SignupFormRBCs photo={switchPhoto} />
        </Grid>
        <Grid item display={formPage.firstPage}>
          <Box
            className={classes.image}
       
          >
            <Grid
              container
              direction="column"
              justifyContent="right"
              alignItems="right"
              sx={{ pr: 15, pt: 15 }}
            >
              <Grid item>
                <Typography variant="h4" textAlign="right" color="white">
                  المعلومات الشخصية
                </Typography>
              </Grid>
              <Grid item sx={{ maxWidth: "582px", pt: 2 }}>
                <Typography variant="body1" textAlign="right" color="white">
                  ان المعلومات المدخلة سوف تعرض على حسابك الشخصي فهي مسؤوليتك
                  وسوف تستخدم أيضا في عرض محتوى الموقع المناسب لاختصاصك لذلك
                  يرجى تعبئة الحقول بدقة
                </Typography>
              </Grid>
              <Grid item sx={{ pt: 5 }}>
                <Stack>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <span className={classes.icon}>
                      <Filter1Icon />
                    </span>
                    <span className={classes.listText}>
                      الاسم الأول والاخير وتاريخ الميلاد
                    </span>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <span className={classes.icon}>
                      <Filter2Icon />
                    </span>
                    <span className={classes.listText}> ما هو جنسك ؟</span>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <span className={classes.icon}>
                      <Filter3Icon />
                    </span>
                    <span className={classes.listText}> معلومات الاتصال</span>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <span className={classes.icon}>
                      <Filter4Icon />
                    </span>
                    <span className={classes.listText}>
                      اختيار الصورة الشخصية
                    </span>
                  </Box>
                </Stack>
              </Grid>
              <Grid item sx={{ pt: 5 }}>
                <Typography variant="h4" textAlign="right" color="white">
                  لديك حساب مسبق ؟
                </Typography>
              </Grid>
              <Grid item sx={{ maxWidth: "582px", pt: 2 }}>
                <Typography variant="body1" textAlign="right" color="white">
                  اذا كنت قد سجلت بالموقع فلا حاجة لاعادة ادخال معلوماتك فنحن
                  نتذكرها من اجلك فقط قم بتسجيل الدخول الى حسابك
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    py: 1,
                    my: 2,
                  }}
                >
                  <Button
                    href="/login"
                    color="primary"
                    variant="contained"
                    sx={{ width: "136.36px", p: 1, m: 1, borderRadius: "20px" }}
                  >
                    <span>تسجيل الدخول</span>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item display={formPage.secondPage}>
          <Box
            className={classes.image}    
          >
            <Grid
              container
              direction="column"
              justifyContent="right"
              alignItems="right"
              sx={{ pr: 15, pt: 15 }}
            >
              <Grid item>
                <Typography variant="h4" textAlign="right" color="white">
                  المعلومات الجامعة
                </Typography>
              </Grid>
              <Grid item sx={{ maxWidth: "582px", pt: 2 }}>
                <Typography variant="body1" textAlign="right" color="white">
                  ان المعلومات المدخلة سوف تعرض على حسابك الشخصي فهي مسؤوليتك
                  وسوف تستخدم أيضا في عرض محتوى الموقع المناسب لاختصاصك لذلك
                  يرجى تعبئة الحقول بدقة
                </Typography>
              </Grid>
              <Grid item sx={{ pt: 5 }}>
                <Stack>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <span className={classes.icon}>
                      <Filter1Icon />
                    </span>
                    <span className={classes.listText}>
                      اسم الجامعة والكلية
                    </span>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <span className={classes.icon}>
                      <Filter2Icon />
                    </span>
                    <span className={classes.listText}>السنة الدراسية</span>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                    <span className={classes.icon}>
                      <Filter3Icon />
                    </span>
                    <span className={classes.listText}>الاختصاص</span>
                  </Box>
                </Stack>
              </Grid>
              <Grid item sx={{ pt: 5 }}>
                <Typography variant="h4" textAlign="right" color="white">
                  الأمان
                </Typography>
              </Grid>
              <Grid item sx={{ maxWidth: "582px", pt: 2 }}>
                <Typography variant="body1" textAlign="right" color="white">
                  قم باختيار كلمة مرور قوية لحماية حسابك ويفضل ان تحتوي كلمة
                  المرور على الأرقام والاحرف الابجدية باللغة الإنكليزية وقد
                  تتضمن بعض المحارف.
                </Typography>
              </Grid>
              <Grid item sx={{ pt: 5 }}>
                <Typography variant="h4" textAlign="right" color="white">
                  لديك حساب مسبق ؟
                </Typography>
              </Grid>
              <Grid item sx={{ maxWidth: "582px", pt: 2 }}>
                <Typography variant="body1" textAlign="right" color="white">
                  اذا كنت قد سجلت بالموقع فلا حاجة لاعادة ادخال معلوماتك فنحن
                  نتذكرها من اجلك فقط قم بتسجيل الدخول الى حسابك
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    py: 1,
                    my: 2,
                  }}
                >
                  <Button
                    href="/login"
                    color="primary"
                    variant="contained"
                    sx={{ width: "136.36px", p: 1, m: 1, borderRadius: "20px" }}
                  >
                    <span>تسجيل الدخول</span>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SignUp;

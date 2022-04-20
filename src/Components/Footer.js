import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "black",
    border: "2px sold black",
    "&:hover": {  color: "#EC5252" },
  },
  map: {
    backgroundImage: 'url("./RBCsImages/map.svg")',
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
 
      <Paper sx={{ backgroundColor: "#FFFFFF", p: 6,display:"flex" }} elevation={24} >
        <Grid
          container
          columnSpacing={{ xs: 15, sm: 25 }}
          rowSpacing={{ xs: 5, sm: 5 }}
          direction="row"
          justifyContent="right"
          alignItems="right"
        >
          <Grid item>
            <Box>
              <Typography variant="h5" textAlign="right" color="primary">
                اتصل بنا
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography textAlign="right">
                rbcs@unity.org : <span>البريد الالكتروني </span>{" "}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography textAlign="right">
                (+963) 994 827 494 : <span>الهاتف</span>{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h5" textAlign="right" color="primary">
                خدماتنا
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link className={classes.link} to="/">
                <Typography textAlign="right">المحاضرات العلمية</Typography>
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link className={classes.link} to="/">
                <Typography textAlign="right">مشاريع الفريق</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h5" textAlign="right" color="primary">
                ذات صلة
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link className={classes.link} to="/">
                <Typography textAlign="right"> الرئيسية</Typography>
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link className={classes.link} to="/">
                <Typography textAlign="right"> من نحن</Typography>
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link className={classes.link} to="/">
                <Typography textAlign="right"> رسالتنا</Typography>
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Link className={classes.link} to="/">
                <Typography textAlign="right"> اتصل بنا</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            className={classes.map}
          >
            <Box
              sx={{
                maxWidth: "350px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
               <Link to="/" ><img src="./RBCsImages/RBCsLogoFooter.svg" /></Link>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography textAlign={"right"}>
                  فريق لدعم الشباب الناشئ و تعليمه كيف تدار الحياة من قبل
                  الأخصائيين في هذه الحياة الناطقة باسم الحياة
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  textAlign={"center"}
                  sx={{ mt: 2 }}
                >
                  <Link className={classes.link} to="/">
                    <InstagramIcon />
                  </Link>
                  <Link className={classes.link} to="/">
                    <LinkedInIcon />
                  </Link>
                  <Link className={classes.link} to="/">
                    <FacebookIcon />
                  </Link>
                  <Link className={classes.link} to="/">
                    <TwitterIcon />
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* <img src="/cronica.jpg"/> */}
      </Paper>
  
  );
};
export default Footer;

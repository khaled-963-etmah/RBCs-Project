import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Box, Typography, Stack, Button } from "@mui/material";
import { FormControlLabel, FormLabel, FormHelperText } from "@mui/material";
import { Radio, RadioGroup, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  //css Classes
  input: {
    border: "1px solid #e6e4e4",
    backgroundColor: "#e6e4e4",
    color: "#707070",
    borderRadius: "25px",
    padding: "1px 20px",
    margin: "1px",
    marginTop: "5px",
    fontSize: "14px",
    width: "70%",
    // "&:hover": { border: "2px solid #EC5252", borderRadius: "25px" },
  },
  select: {
    backgroundColor: "#e6e4e4",
    color: "#e66f6f",

    margin: "1px",
    marginTop: "5px",
    fontSize: "14px",
    width: "70%",

    // "&:selected": { border: "1px solid #EC5252", borderRadius: "25px" },
  },
  text: {
    color: "#bababa",
    textAlign: "right",
    fontSize: "13px",
  },
  span: {
    color: "#bababa",
    width: "110px",
    paddingTop: "10px",
    margin: "1px",
    textAlign: "right",
    fontSize: "13px",
  },
  radio: {
    color: "#bababa",
  },
  Container: {
    "@media only screen and (max-width: 550px)": {
      padding: "25px",
      height: "100%",
      width: "285px",
    },
  },
  error: {
    border: "1px solid red",
    backgroundColor: "#e6e4e4",
    color: "#707070",
    borderRadius: "25px",
    padding: "1px 20px",
    margin: "1px",
    marginTop: "5px",
    fontSize: "14px",
    width: "70%",
    // "&:hover": { border: "2px solid #EC5252", borderRadius: "25px" },
    // "&:focus": { border: "2px solid #EC5252", borderRadius: "25px" },
  },
  errortext: {
    color: "#EC5252",
  },
});

//___________________________________________

export default function SignupFormRBCs(props) {
  const classes = useStyles();
  const history = useNavigate();
  

  //__________________________________الجامعات و الكليات______________________________________________
  // this is an Array of objects to store university's informations
  const universitys = [
    {
      universityName: "جامعة دمشق",
      collges: [
        {
          collgeName: "الطب البشري",
          years: [
            "الاولى",
            "الثانية",
            "الثالثة",
            "الرابعة",
            "الخامسة",
            "السادسة",
          ],
          Specializations: [],
        },
        {
          collgeName: "طب الأسنان",
          years: ["الاولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"],
          Specializations: [],
        },
        {
          collgeName: "الصيدلة",
          years: ["الاولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"],
          Specializations: [],
        },
        {
          collgeName: "الهندسة المعلوماتية",
          years: ["الاولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"],
          Specializations: [
            "هندسة البرمجيات",
            " الذكاء الاصطناعي",
            "هندسة الشبكات",
          ],
        },
      ],
    },
    {
      universityName: "جامعة تشرين",
      collges: [
        {
          collgeName: "الطب البشري",
          years: [
            "الاولى",
            "الثانية",
            "الثالثة",
            "الرابعة",
            "الخامسة",
            "السادسة",
          ],
          Specializations: [],
        },
        {
          collgeName: "طب الأسنان",
          years: ["الاولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"],
          Specializations: [],
        },
        {
          collgeName: "الصيدلة",
          years: ["الاولى", "الثانية", "الثالثة", "الرابعة", "الخامسة"],
          Specializations: [],
        },
      ],
    },
    {
      universityName: "جامعة البعث",
      collges: [
        {
          collgeName: "الطب البشري",
          years: [
            "الاولى",
            "الثانية",
            "الثالثة",
            "الرابعة",
            "الخامسة",
            "السادسة",
          ],
          Specializations: [],
        },
      ],
    },
  ];
  //___________________________________________________________________________

  let Universitys = universitys.map((university) => {
    return (
      <MenuItem
        key={university.universityName}
        value={university.universityName}
      >
        {university.universityName}{" "}
      </MenuItem>
    );
  });
  let Collge, Year, Specialization;
  //___________________________________________________________________________

  //_________________________States____________________________________________

  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    birth: "",
    gender: "",
    email: "",
    phone: "",
    university: "",
    college: "",
    year: "",
    specialization: "",
    password: "",
  });
  const [repassword, setRepassword] = useState("");

  //___________________________________________________________________________
  //Eror states it will ues to chick if there is any error in input
  const [firsNameError, setFirtsNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [birthError, setbBirthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [universityError, setUniversityError] = useState(false);
  const [collegeError, setCollegeError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [spesError, setSpesError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [rePasswordError, setRePasswordError] = useState(false);

  //___________________________________________________________________________
  // this state will handle which page will be showen to user : form -1- or form -2-
  const [formPage, setFormPage] = useState({
    firstPage: "flex",
    secondPage: "none",
  });
  //___________________________________________________________________________
  //this state will handle showing password
  const [passwordIcon, setPasswordIcon] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  //___________________________________________________________________________

  //___________________________________ handlers ________________________________________

  // to handle onChgane funcyions in inputs

  const handleChange = (prop) => (e) => {
    setInformation({ ...information, [prop]: e.target.value });
    if (information.password == "") setPasswordIcon(true);
    if (information.password != "") setPasswordIcon(false);
    // console.log(information);
  };

  //___________________________________________________________________________

  // to handle onCick Button that will load the next page from the form

  const handleNextPageButton = (e) => {
    //TODO: send serquist to back end if every infomaition is ture
    // then load the next page of form
    e.preventDefault();
    reSetFirstPageErrors();
    handleFirsPageError();
    if (
      information.firstName &&
      information.lastName &&
      information.birth &&
      information.email &&
      information.phone
    ) {
      
      
      if (formPage.firstPage == "flex") {
        setFormPage({
          firstPage: "none",
          secondPage: "flex",
        });
        props.photo("flex");
      }
      if (formPage.firstPage == "none") {
        setFormPage({
          firstPage: "flex",
          secondPage: "none",
        });
        props.photo("none");
      }
    }
  };

  //___________________________________________________________________________

  // to handle onCick Button that will load the previous page from the form

  const handlePreviousPageButton = () => {
    if (formPage.firstPage == "flex") {
      setFormPage({
        firstPage: "none",
        secondPage: "flex",
      });
      props.photo("flex");
    }
    if (formPage.firstPage == "none") {
      setFormPage({
        firstPage: "flex",
        secondPage: "none",
      });
      props.photo("none");
    }
  };

  //___________________________________________________________________________
  //  submit handler
  const handleSubmimtButton = (e) => {
    e.preventDefault();
    reSetSecondPageErrors();
    handleSecondPageError();
    if (
      information.university &&
      information.college &&
      information.year &&
      information.specialization &&
      information.password &&
      repassword &&
      information.password === repassword
    ) {
      console.log("suc", JSON.stringify({ information }));
      fetch("http://192.168.1.1:8000/api/signup", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ information }),
      }).then((response) =>{ history("/")});
    }
  };

  //___________________________________________________________________________

  // show password handler

  const handleClickShowPassword = () => {
    if (showPassword == true) setShowPassword(false);
    if (showPassword == false) setShowPassword(true);
  };

  //___________________________________________________________________________

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  //___________________________________________________________________________
  //to handle Errors in first page

  const handleFirsPageError = () => {
    if (information.firstName == "") setFirtsNameError(true);
    if (information.lastName == "") setLastNameError(true);
    if (information.birth == "") setbBirthError(true);
    if (information.email == "") setEmailError(true);
    if (information.phone == "") setPhoneError(true);
  };

  //___________________________________________________________________________

  //to handle Errors in the second page

  const handleSecondPageError = () => {
    if (information.college == "") setCollegeError(true);
    if (information.specialization == "") setSpesError(true);
    if (information.university == "") setUniversityError(true);
    if (information.year == "") setYearError(true);
    if (information.password == "") setPasswordError(true);
    if (repassword != information.password) setRePasswordError(true);
  };

  //___________________________________________________________________________

  //to rest Errors States to defult values

  const reSetFirstPageErrors = () => {
    setFirtsNameError(false);
    setLastNameError(false);
    setbBirthError(false);
    setEmailError(false);
    setPhoneError(false);
  };
  //___________________________________________________________________________

  //to rest Errors States to defult values

  const reSetSecondPageErrors = () => {
    setUniversityError(false);
    setCollegeError(false);
    setYearError(false);
    setSpesError(false);
    setPasswordError(false);
    setRePasswordError(false);
  };
  //___________________________________________________________________________

  //________________________________________________________________________________
  return (
    <div>
      {/*  فورم تسجيل الباينات الشخصية الصفحة الأولى  */}
      <Box
        component={"form"}
        className={classes.Container}
        sx={{ p: 1, height: "100%" }}
        display={formPage.firstPage}
        onSubmit={handleNextPageButton}
        noValidate
        autoComplete="off"
      >
        <div>
          {/* المعلومات الشخصية  */}
          <Box>
            <Typography variant="h5" textAlign={"right"}>
              المعلومات الشخصية
            </Typography>
            <Box sx={{ marginTop: "15px" }}>
              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <span className={classes.span}>*الاسم الأول</span>
                {
                  <InputBase
                    type="text"
                    className={firsNameError ? classes.error : classes.input}
                    value={information.firstName}
                    onChange={handleChange("firstName")}
                  />
                }
              </FormControl>
              {firsNameError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى ادخال اسم الأول{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}

              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <span className={classes.span}>* الكنية</span>
                {
                  <InputBase
                    type="text"
                    className={lastNameError ? classes.error : classes.input}
                    value={information.lastName}
                    onChange={handleChange("lastName")}
                  />
                }
              </FormControl>
              {lastNameError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى ادخال الكنية{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}
              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <span className={classes.span}>*تاريخ الميلاد</span>
                {
                  <InputBase
                    type="date"
                    className={birthError ? classes.error : classes.input}
                    value={information.birth}
                    onChange={handleChange("birth")}
                  />
                }
              </FormControl>
              {birthError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى ادخال تاريخ الميلاد{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          {/* ماهو جنسك */}
          <Box sx={{ marginTop: "25px" }}>
            <Typography variant="h5" textAlign={"right"}>
              <span>ماهو جنسك؟</span>
            </Typography>
            <Box sx={{ marginTop: "15px" }}>
              <FormControl
                color="secondary"
                sx={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <RadioGroup
                  defaultValue="male"
                  row
                  className={classes.text}
                  onChange={handleChange("gender")}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio className={classes.radio} />}
                    label="ذكر"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio className={classes.radio} />}
                    label="انثى"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          {/* معلومات الاتصال */}
          <Box sx={{ marginTop: "25px" }}>
            <Typography variant="h5" textAlign={"right"}>
              <span> معلومات الاتصال</span>
            </Typography>
            <Box sx={{ marginTop: "15px" }}>
              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <span className={classes.span}>*البريد الالكتروني</span>
                {
                  <InputBase
                    type="email"
                    className={emailError ? classes.error : classes.input}
                    value={information.email}
                    onChange={handleChange("email")}
                  />
                }
              </FormControl>
              {emailError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى ادخال بريدك الالكتروني{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}
              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <span className={classes.span}>*رقم الهاتف</span>
                {
                  <InputBase
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    className={phoneError ? classes.error : classes.input}
                    value={information.phone}
                    onChange={handleChange("phone")}
                    //endAdornment={<InputAdornment position="start"><Lock/></InputAdornment>}
                  />
                }
              </FormControl>
              {phoneError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى ادخال رقم الهاتف{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          <Box sx={{ marginTop: "25px" }}>
            <Typography variant="h5" textAlign={"right"}>
              <span>الصورة الشخصية</span>
            </Typography>
            <Box sx={{ marginTop: "15px" }}>
              <Stack
                direction="row"
                sx={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <Box sx={{ mx: 1 }}>
                  <img src="./RBCsImages/blankImage.png" />
                </Box>
                <Box sx={{ mx: 1 }}>
                  <Typography textAlign={"right"} color="textSecondary">
                    يفضل وضع صورتك الشخصية وفي حال لم تقم بتحميل صورة سوف يتم
                    الاستعاضة عنها بصورة الحساب الافتراضيك كما هو موضح جانبا
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{ mt: 3, display: "flex", flexDirection: "row-reverse" }}
              >
                <Button
                  variant="outlined"
                  color="success"
                  sx={{ mx: 2, borderRadius: "25px" }}
                >
                  <span>تحميل صورة</span>
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mx: 2, borderRadius: "25px" }}
                  // onClick={(e) => {
                  //   handleNextPageButton(e);
                  // }}
                >
                  <span>الخطوة التالية</span>
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>

      {/*  فورم تسجيل الباينات الشخصية الصفحة الثانية  */}
      <Box
        component={"form"}
        className={classes.Container}
        sx={{ p: 1, height: "100%" }}
        display={formPage.secondPage}
        onSubmit={handleSubmimtButton}
        noValidate
        autoComplete="off"
      >
        <div>
          {/* معلومات الجامعة */}
          <Box sx={{ marginTop: "25px" }}>
            <Typography variant="h5" textAlign={"right"}>
              <span>معلومات الجامعة</span>
            </Typography>
            <Box sx={{ marginTop: "15px" }}>
              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
                size="small"
              >
                <span className={classes.span}>*الجامعة</span>
                {
                  <Select
                    className={universityError ? classes.error : classes.input}
                    value={information.university}
                    onChange={handleChange("university")}
                    sx={{ borderRadius: "25px" }}
                    color="secondary"
                  >
                    {Universitys}
                  </Select>
                }
              </FormControl>
              {universityError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى اختيار الجامعة{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}

              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
                size="small"
              >
                <span className={classes.span}>*الكلية</span>
                {
                  <Select
                    className={collegeError ? classes.error : classes.input}
                    value={information.college}
                    onChange={handleChange("college")}
                    sx={{ borderRadius: "25px" }}
                    color={"secondary"}
                  >
                    {information.university == "جامعة دمشق" ? (
                      (Collge = universitys[0].collges.map((college) => {
                        return (
                          <MenuItem
                            key={college.collgeName}
                            value={college.collgeName}
                          >
                            {" "}
                            {college.collgeName}
                          </MenuItem>
                        );
                      }))
                    ) : information.university == "جامعة تشرين" ? (
                      (Collge = universitys[1].collges.map((college) => {
                        return (
                          <MenuItem
                            key={college.collgeName}
                            value={college.collgeName}
                          >
                            {" "}
                            {college.collgeName}
                          </MenuItem>
                        );
                      }))
                    ) : information.university == "جامعة البعث" ? (
                      (Collge = universitys[2].collges.map((college) => {
                        return (
                          <MenuItem
                            key={college.collgeName}
                            value={college.collgeName}
                          >
                            {" "}
                            {college.collgeName}
                          </MenuItem>
                        );
                      }))
                    ) : (
                      <span>اختر الجامعة أولاً</span>
                    )}
                  </Select>
                }
              </FormControl>
              {collegeError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى اختيار كليتكم{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}
              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
                size="small"
              >
                <span className={classes.span}>*السنة الدراسية</span>
                {
                  <Select
                    color="secondary"
                    className={yearError ? classes.error : classes.input}
                    value={information.year}
                    onChange={handleChange("year")}
                    sx={{ borderRadius: "25px" }}
                  >
                    {information.college == "الطب البشري" ? (
                      (Year = universitys[0].collges[0].years.map((year) => {
                        return (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        );
                      }))
                    ) : information.college == "طب الأسنان" ? (
                      (Year = universitys[0].collges[1].years.map((year) => {
                        return (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        );
                      }))
                    ) : information.college == "الصيدلة" ? (
                      (Year = universitys[0].collges[2].years.map((year) => {
                        return (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        );
                      }))
                    ) : information.college == "الهندسة المعلوماتية" ? (
                      (Year = universitys[0].collges[3].years.map((year) => {
                        return (
                          <MenuItem key={year} value={year}>
                            {year}
                          </MenuItem>
                        );
                      }))
                    ) : (
                      <span>اختر الكلية أولاً</span>
                    )}
                  </Select>
                }
              </FormControl>
              {yearError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى اختيار سنتكم الدراسية{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          {/* ما هو اختصاصك*/}

          <Box sx={{ marginTop: "25px" }}>
            <Typography variant="h5" textAlign={"right"}>
              <span>ما هو اختصاصك</span>
            </Typography>
            <Box sx={{ marginTop: "15px" }}>
              <FormControl
                color="secondary"
                sx={{ display: "flex", flexDirection: "row-reverse" }}
                size="small"
              >
                <span className={classes.span}></span>
                <Select
                  className={spesError ? classes.error : classes.input}
                  value={information.specialization}
                  onChange={handleChange("specialization")}
                  sx={{ borderRadius: "25px" }}
                  color="secondary"
                >
                  {information.university == "جامعة دمشق" &&
                  information.college == "الهندسة المعلوماتية" ? (
                    (Specialization =
                      universitys[0].collges[3].Specializations.map(
                        (specialization) => {
                          return (
                            <MenuItem
                              key={specialization}
                              value={specialization}
                            >
                              {" "}
                              {specialization}
                            </MenuItem>
                          );
                        }
                      ))
                  ) : (
                    <MenuItem value={"لا يوجد اختصاص"}>لا يوجد اختصاص</MenuItem>
                  )}
                </Select>
              </FormControl>
              {spesError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى اختيار اختصاصك{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          {/*   الأمان*/}
          <Box sx={{ marginTop: "25px" }}>
            <Typography variant="h5" textAlign={"right"}>
              <span> الأمان</span>
            </Typography>
            <Box sx={{ marginTop: "15px" }}>
              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <span className={classes.span}>*كلمة السر</span>
                {
                  <InputBase
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className={
                      passwordError || rePasswordError
                        ? classes.error
                        : classes.input
                    }
                    value={information.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="start">
                        {
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        }
                      </InputAdornment>
                    }
                  />
                }
              </FormControl>
              {passwordError || rePasswordError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    يرجى ادخال كلمة السر لحسابك{" "}
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}

              <FormControl
                sx={{ display: "flex", flexDirection: "row-reverse" }}
                color="primary"
              >
                <span className={classes.span}>*تأكيد كلمة السر</span>
                {
                  <InputBase
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className={rePasswordError ? classes.error : classes.input}
                    value={repassword}
                    onChange={(e) => {
                      setRepassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="start">
                        {
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        }
                      </InputAdornment>
                    }
                  />
                }
              </FormControl>
              {rePasswordError ? (
                <FormLabel
                  sx={{
                    pb: 1,
                    pl: 3,
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                    width: "90%",
                  }}
                >
                  <FormHelperText className={classes.errortext}>
                    عذراً كلمتا السر غير متطابقتان
                  </FormHelperText>
                </FormLabel>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          <Box sx={{ marginTop: "25px" }}>
            <Box sx={{ m: 1, display: "flex", flexDirection: "row" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mx: 1, borderRadius: "25px" }}
                // onClick={{}}
              >
                <span>إنشاء الحساب</span>
              </Button>
              <Button
                type="submit"
                variant="outlined"
                color="success"
                sx={{ mx: 1, borderRadius: "25px" }}
                onClick={handlePreviousPageButton}
              >
                <span>الخطوة السابق </span>
              </Button>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
}

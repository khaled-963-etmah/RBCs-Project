import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import HomePage from "./Pages/Site/HomePage";
import ProjectsPage from "./Pages/Site/ProjectsPage";
import LoginPage from "./Pages/Site/LoginPage";
import SignupPage from "./Pages/Site/SignupPage";
import MyPage from "./Pages/Site/MyPage";
import LecturesPage from "./Pages/Site/LectuersPage";
import TestPage from "./Pages/Site/TestPage";

import ControlPanelLayout from "./Components/ControlPanelLayout";
import HomePageControlPanel from "./Pages/ControlPanel/HomePageControlPanel";
import LoginPageControlPanel from "./Pages/ControlPanel/LoginPageControlPanel";

import { AuthProvider } from "./Components/auth";
import { RequireAuth } from "./Components/RequireAuth";

const RBCsTheme = createTheme({
  palette: {
    primary: { main: "#EC5252" },
    secondary: { main: "#111111" },
  },
  typography:{
fontFamily:"Almarai",
h5:{lineHeight:1.5}
  },
});

function App() {
  return (
    <ThemeProvider theme={RBCsTheme}>
      <Router>
        <Routes>
          <Route
            path="/test"
            element={
              <Layout>
                
                <TestPage />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
                
                <ProjectsPage />
              </Layout>
            }
          />
          <Route
            path="/mypage"
            element={
              <Layout>
                
                <MyPage />
              </Layout>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/browse_lectures_page"
            element={
              <Layout>
                
                <LecturesPage />
              </Layout>
            }
          />
        </Routes>
      </Router>

      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/controlpanel"
              element={
                <RequireAuth>
                  <ControlPanelLayout>
                    <HomePageControlPanel />
                  </ControlPanelLayout>
                </RequireAuth>
              }
            />
            <Route
              path="/controlpanel/login"
              element={<LoginPageControlPanel />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;

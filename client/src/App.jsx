import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Dashboard from "./pages/Dashboard/Dashboard";
import MyResumes from "./pages/MyResumes/MyResumes";
import BuilderLayout from "./layouts/BuilderLayout";
import Templates from "./pages/Templates/Templates";

import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

import AIAssistant from "./pages/AIAssistant/AIAssistant";
import Analytics from "./pages/Analytics/Analytics";

import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";


function App() {

  const path = window.location.pathname;


  // =====================================================
  // LOGIN
  // =====================================================

  if (path === "/login") {
    return <Login />;
  }


  // =====================================================
  // REGISTER
  // =====================================================

  if (path === "/register") {
    return <Register />;
  }


  // =====================================================
  // FORGOT PASSWORD
  // =====================================================

  if (path === "/forgot-password") {
    return <ForgotPassword />;
  }


  // =====================================================
  // RESET PASSWORD
  // =====================================================

  if (path.startsWith("/reset-password/")) {
    return <ResetPassword />;
  }


  // =====================================================
  // DASHBOARD
  // =====================================================

  if (path === "/dashboard") {
    return <Dashboard />;
  }


  // =====================================================
  // MY RESUMES
  // =====================================================

  if (path === "/my-resumes") {
    return <MyResumes />;
  }


  // =====================================================
  // RESUME BUILDER
  // =====================================================

  if (path === "/builder") {
    return <BuilderLayout />;
  }


  // =====================================================
  // TEMPLATES
  // =====================================================

  if (path === "/templates") {
    return <Templates />;
  }


  // =====================================================
  // AI ASSISTANT
  // =====================================================

  if (path === "/ai-assistant") {
    return <AIAssistant />;
  }


  // =====================================================
  // ANALYTICS
  // =====================================================

  if (path === "/analytics") {
    return <Analytics />;
  }


  // =====================================================
  // SETTINGS
  // =====================================================

  if (path === "/settings") {
    return <Settings />;
  }


  // =====================================================
  // PROFILE
  // =====================================================

  if (path === "/profile") {
    return <Profile />;
  }


  // =====================================================
  // HOME
  // =====================================================

  return <Home />;
}


export default App;
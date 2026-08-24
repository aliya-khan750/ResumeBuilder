import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyResumes from "./pages/MyResumes/MyResumes";
import BuilderLayout from "./layouts/BuilderLayout";
import Templates from "./pages/Templates/Templates";

function App() {
  const path = window.location.pathname;

  // ================= LOGIN =================

  if (path === "/login") {
    return <Login />;
  }


  // ================= REGISTER =================

  if (path === "/register") {
    return <Register />;
  }


  // ================= DASHBOARD =================

  if (path === "/dashboard") {
    return <Dashboard />;
  }


  // ================= MY RESUMES =================

  if (path === "/my-resumes") {
    return <MyResumes />;
  }


  // ================= RESUME BUILDER =================

  if (path === "/builder") {
    return <BuilderLayout />;
  }

  if (path === "/templates") {
  return <Templates />;
}


  // ================= HOME =================

  return <Home />;
}

export default App;
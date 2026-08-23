import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import BuilderLayout from "./layouts/BuilderLayout";

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

  // ================= RESUME BUILDER =================

  if (path === "/builder") {
    return <BuilderLayout />;
  }

  // ================= HOME =================

  return <Home />;
}

export default App;
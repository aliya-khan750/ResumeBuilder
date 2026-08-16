import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <h1>Resume Builder</h1>
          <p>Build your professional resume.</p>
        </main>
      </div>
    </>
  );
}

export default App;
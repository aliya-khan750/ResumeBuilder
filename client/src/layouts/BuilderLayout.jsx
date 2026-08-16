import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function BuilderLayout({ children }) {
  return (
    <div className="builder-app">
      <Navbar />

      <div className="builder-body">
        <Sidebar />

        <main className="builder-main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default BuilderLayout;
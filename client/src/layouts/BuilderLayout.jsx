import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EditorPanel from "../components/EditorPanel";

function BuilderLayout() {
  return (
    <div className="builder-app">
      <Navbar />

      <div className="builder-body">
        <Sidebar />

        <main className="builder-main">
          <EditorPanel />
        </main>
      </div>
    </div>
  );
}

export default BuilderLayout;
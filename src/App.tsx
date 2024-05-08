import CssGrid from "./components/CssGrid";

function App() {
  const pageStyle = {
    height: "100vh",
    margin: 0,
    background: "radial-gradient(circle at center, #ffffff, #000000)",
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        background:
          "radial-gradient(circle at center right, #0c1f69 10%, #081139 40%, #060e22 100%)",
      }}
    >
      <div
        className="min-h-screen"
        // style={{ background: "#090f1c", zIndex: 10 }}
      >
        <div className="max-w-5xl mx-auto">
          <CssGrid />
        </div>
      </div>
    </div>
  );
}

export default App;

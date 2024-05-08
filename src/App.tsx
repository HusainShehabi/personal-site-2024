import CssGrid from "./components/CssGrid";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div
        className="min-h-screen"
        style={{ background: "rgba(15,24,45,255)", zIndex: 10 }}
      >
        <div className="max-w-5xl mx-auto">
          <CssGrid />
        </div>
      </div>
    </div>
  );
}

export default App;

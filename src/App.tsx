import CssGrid from "./components/CssGrid";

function App() {
  return (
    <div className="relative bg-[#060e22] min-h-screen">
      <div className="relative max-w-5xl mx-auto ">
        <div className="absolute top-[-6rem] right-[10rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] bg-[#6d315c] sm:w-[68.75rem] lg:right-[-15rem] xl:right-[-10rem]"></div>
        <div className="absolute top-[-7rem] left-[-20rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] bg-[#2f2486] sm:w-[68.75rem] lg:left-[-15rem] xl:left-[-10rem]"></div>
        <CssGrid />
      </div>
    </div>
  );
}

export default App;

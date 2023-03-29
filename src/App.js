import { LeftDiv } from "./components/LeftDiv";
import { Navbar } from "./components/Navbar";
import { RightDiv } from "./components/RightDiv";

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="w-[85%] h-[80%] flex justify-around items-center  mx-auto">
          <LeftDiv />
          <RightDiv />
        </div>
      </div>
    </>
  );
};

export default App;

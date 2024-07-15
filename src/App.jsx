import "./App.css";
import ClockComp from "./components/ClockComp";
import MainLine from "./components/MainLine";
import TitleComp from "./components/TitleComp";

function App() {
  return (
    <center className="clock-container">
      <TitleComp />
      <MainLine />
      <ClockComp />
    </center>
  );
}

export default App;

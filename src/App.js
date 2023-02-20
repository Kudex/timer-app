import "./App.css";
import Timer from "./Timer";
import { Box, Flex, Button } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Timer
        time={4}
        autostart={false}
        step={1000}
        onTimeEnd={() => {
          console.log("timeEnd");
        }}
        onTimeStart={() => {
          console.log("timeStart");
        }}
        onTimePause={() => {
          console.log("time is paused");
        }}
      />
    </div>
  );
}

export default App;

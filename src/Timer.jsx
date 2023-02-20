import React, { Component } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time || 0,
      intervalRef: null,
    };
  }

  componentDidMount() {
    if (this.props.autostart) {
      this.toggleTimer();
    }
  }

  toggleTimer() {
    if (this.state.intervalRef) {
      clearInterval(this.state.intervalRef);
      this.setState((state) => ({
        ...state,
        intervalRef: null,
      }));
    } else {
      const intervalId = setInterval(() => {
        if (this.state.time - 1 >= 0) {
          this.decreaseTimer();
          this.props.onTimeStart();
        } else {
          clearInterval(this.state.intervalRef);
          this.props.onTimeEnd();
        }
      }, this.props.step || 1000);
      this.setState((state) => ({
        ...state,
        intervalRef: intervalId,
      }));
    }
  }

  decreaseTimer() {
    this.setState((state) => ({ time: state.time - 1 }));
    console.log(`Remains: ${this.state.time} seconds`);
  }

  render() {
    const buttonText = this.state.intervalRef ? "STOP" : "START";
    return (
      <Flex
        height={"20vh"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} height={"10vh"}>
          <h1>Timer</h1>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} height={"10vh"}>
          {this.state.time}
        </Flex>
        <Button onClick={this.toggleTimer.bind(this)}>{buttonText}</Button>
  
      </Flex>
    );
  }
}

export default Timer;

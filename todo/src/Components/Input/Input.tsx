import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import "./Input.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { InputProps } from "../Types/Elements.types";
import { InputState } from "../Types/Elements.types";
import {
  allComplete,
  addTodo,
} from "../../store/actionCreators";

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      data: "",
      check: false,
    };
  }

  inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ data: e.target.value });
  };

  inputSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && this.state.data !== "") {
      this.props.addTodo(this.state.data);
      this.setState({ data: "" });
    }
  };

  allCompleteHandler = () => {
    if (this.state.check === false) this.setState({ check: true });
    else this.setState({ check: false });
    this.props.allComplete(this.state.check);
  };

  render() {
    return (
      <>
        <div id="input_div">
          <div id="icon">
            <RiArrowDropDownLine
              id="all_complete_icon"
              onClick={this.allCompleteHandler}
            />
          </div>
          <div id="inner_div">
            <input
              id="todo_input"
              type="text"
              value={this.state.data}
              placeholder="What needs to be done?"
              onChange={this.inputHandler}
              onKeyPress={this.inputSubmit}
            />
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    allComplete: (check: boolean) => dispatch(allComplete(check)),
    addTodo: (data: string) => dispatch(addTodo(data)),
  };
};

export default connect(null, mapDispatchToProps)(Input);

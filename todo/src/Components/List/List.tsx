import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { showArr } from "../Types/Elements.types";
import "./List.css";
import Input from "../Input/Input";
import Item from "../Item/Item";
import { ListProps } from "../Types/Elements.types";
import {
  toggleTodo,
  clearCompleted,
} from "../../store/actionCreators";

class List extends React.Component<ListProps> {
  activeShowHandler = () => {
    this.props.toggleTodo("active");
  };

  allShowHandler = () => {
    this.props.toggleTodo("all");
  };

  completeShowHandler = () => {
    this.props.toggleTodo("complete");
  };

  render() {
    let arr: showArr = [];
    if (this.props.filter === "all") arr = this.props.todos;
    else if (this.props.filter === "active")
      arr = this.props.todos.filter((todo) => todo.isComplete === false);
    else if (this.props.filter === "complete")
      arr = this.props.todos.filter((todo) => todo.isComplete === true);
    return (
      <>
        <div id="overall_div">
          <Input />
          {this.props.todos.length > 0 ? <hr id="first"></hr> : <></>}
          <div id="todo_div">
            {arr.map((todo) => (
              <Item
                key={todo.id}
                id={todo.id}
                isComplete={todo.isComplete}
                text={todo.data}
              />
            ))}
          </div>
          {this.props.todos.length > 0 ? (
            <div id="button_div">
              <div id="remaining" className="button">
                {
                  this.props.todos.filter((todo) => todo.isComplete === false)
                    .length
                }{" "}
                Items left
              </div>
              <div id="all_div" className="button">
                <button
                  className={`${
                    this.props.filter === "all" ? "clicked " : "all_button"
                  }`}
                  onClick={this.allShowHandler}
                >
                  All
                </button>
              </div>
              <div id="active_div" className="button">
                <button
                  className={`${
                    this.props.filter === "active"
                      ? "clicked "
                      : "active_button"
                  }`}
                  onClick={this.activeShowHandler}
                >
                  Active
                </button>
              </div>
              <div id="completed_div" className="button">
                <button
                  className={`${
                    this.props.filter === "complete"
                      ? "clicked "
                      : "completed_button"
                  }`}
                  onClick={this.completeShowHandler}
                >
                  Complete
                </button>
              </div>
              <div id="clear_div" className="button">
                <button id="clear_button" onClick={this.props.clearCompleted}>
                  Clear Completed Tasks
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: ListProps) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleTodo: (toggle: string) => dispatch(toggleTodo(toggle)),
    clearCompleted: () => dispatch(clearCompleted()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

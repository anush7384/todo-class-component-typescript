import React from "react";
import {connect} from 'react-redux';
import { Dispatch } from "redux";

import "./Item.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { ItemProps } from "../Types/Elements.types";
import { ItemState } from "../Types/Elements.types";
import {deleteTodo, completeTodo, editTodo} from '../../store/actionCreators'

class Item extends React.Component<ItemProps,ItemState> {
  constructor(props:ItemProps) {
    super(props);
    this.state = {
      edit: false,
      data: this.props.text,
    };
  }

  deleteHandler = () => {
    this.props.deleteTodo(this.props.id);
  };

  completeHandler = () => {
    this.props.completeTodo(this.props.id);
  };

  enableEditing = () => {
    this.setState({ edit: true });
  };

  editDataHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ data: e.target.value });
  };

  editDataSubmit = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.editTodo(this.props.id,this.state.data);
      this.setState({ edit: false });
    }
  };

  render() {
    let input = (
      <input
        id="edit_input"
        value={this.state.data}
        onChange={this.editDataHandler}
        onKeyPress={this.editDataSubmit}
      />
    );
    return (
      <>
        <div className="item_div">
          <div id="complete_div">
            {this.props.isComplete === true ? (
              <BsCheckCircle
                id="complete_circle"
                className="complete_icon"
                onClick={this.completeHandler}
              />
            ) : (
              <BsCircle
                className="complete_icon"
                onClick={this.completeHandler}
              />
            )}
          </div>
          <div
            id="todo_text_div"
            className={`${this.props.isComplete === true ? "complete" : ""}`}
            onDoubleClick={this.enableEditing}
          >
            {this.state.edit ? input : this.props.text}
          </div>
          <div id="delete_div">
            <AiOutlineDelete onClick={this.deleteHandler} id="delete_icon" />
          </div>
        </div>
        <hr></hr>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch:Dispatch) =>{
  return {
    deleteTodo: (id: string) => dispatch(deleteTodo(id)),
    completeTodo: (id: string) => dispatch(completeTodo(id)),
    editTodo: (id: string, data: string) => dispatch(editTodo(id, data)),
  };
}

export default connect(null,mapDispatchToProps)(Item);

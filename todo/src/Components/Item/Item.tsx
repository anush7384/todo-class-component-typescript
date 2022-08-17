import React from "react";
import "./Item.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { ItemProps } from "../Types/Elements.types";
import { ItemState } from "../Types/Elements.types";

class Item extends React.Component<ItemProps,ItemState> {
  constructor(props:ItemProps) {
    super(props);
    this.state = {
      edit: false,
      data: this.props.text,
    };
  }

  deleteHandler = () => {
    this.props.onDelete(this.props.id);
  };

  completeHandler = () => {
    this.props.onComplete(this.props.id);
  };

  enableEditing = () => {
    this.setState({ edit: true });
  };

  editDataHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ data: e.target.value });
  };

  editDataSubmit = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.props.onEdit(this.state.data, this.props.id);
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

export default Item;

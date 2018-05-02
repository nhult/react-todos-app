import React from "react";
import "./Todo.css";

/* COPY TO CLIPBOARD  ETC.*/

class Todo extends React.Component {
  onLiClick = event => {
    let input = document.getElementById(this.props.id).children[0].children[0];
    input.checked === false ? (input.checked = true) : (input.checked = false);

    this.props.onCheckedChange(input.checked, this.props.id);
  };

  render() {
    return (
      <li onClick={this.onLiClick.bind(this)}>
        <div id={this.props.id} className="todo">
          <label className="selector" htmlFor={this.props.id}>
            <input
              type="checkbox"
              checked={this.props.checked}
              name={this.props.id}
            />
            <span className="checkmark" />
          </label>

          <p>{this.props.todo}</p>
        </div>
      </li>
    );
  }
}

export default Todo;

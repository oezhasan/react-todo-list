import React, { Component } from "react";

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{console.log(this.props.list)}</div>;
  }
}

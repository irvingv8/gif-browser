import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input.attrs({
  type: "text"
})`
  background: white;
  border: none;
  font-size: 16px;
  line-height: 50px;
  height: 50px;
  width: 100%;
  max-width: 300px;
  border-radius: 3px 0px 0px 3px;
  outline: none;
  padding-left: 15px;
`;

const Icon = styled.button.attrs({
  type: "submit"
})`
  border: none;
  background: #7b1fa2;
  color: white;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  padding: 0px 15px;
  border-radius: 0px 3px 3px 0px;
`;

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleForm(e) {
    e.preventDefault();
    this.props.search(this.state.search);
  }
  handleChange(e) {
    this.setState({ search: e.target.value });
  }
  render() {
    return (
      <Form onSubmit={this.handleForm}>
        <Input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <Icon className="fa fa-search" aria-hidden="true" />
      </Form>
    );
  }
}

export default Browser;

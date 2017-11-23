import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Icon = styled.span`
  background: transparent;
  border: none;
  color: white
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 0px 3px 3px 0px;
  padding-right: ${props => (props.left ? "15px" : "0px")};
  padding-left: ${props => (props.right ? "15px" : "0px")};
`;

const Arrow = styled.button`
  font-family: Roboto;
  background: #7b1fa2;
  border: none;
  border-radius: 0;
  color: white;
  margin: 15px;
  padding: 0px 15px;
`;

class Pagination extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.page > 0 && (
          <Arrow
            onClick={() => {
              this.props.handlePage(-1);
            }}
          >
            <Icon className="fa fa-arrow-left" left />
            Prev
          </Arrow>
        )}
        <Arrow
          onClick={() => {
            this.props.handlePage(1);
          }}
        >
          Next
          <Icon className="fa fa-arrow-right" right />
        </Arrow>
      </Wrapper>
    );
  }
}

export default Pagination;

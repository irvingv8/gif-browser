import React, { Component } from "react";
import styled from "styled-components";

import Card from "../Card";
import Pagination from "../Pagination";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
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

const Content = styled.div``;

class LightBox extends Component {
  constructor(props) {
    super(props);
    // this.state = ;

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.close();
    }
    if (e.keyCode === 37) {
      this.props.prev();
    }
    if (e.keyCode === 39) {
      this.props.next();
    }
  }

  render() {
    console.log(this.props.element);
    return (
      <div>
        {this.props.isOpen && (
          <Wrapper onKeyDown={this.handleKeyDown} tabIndex="0">
            <Content>
              <Card
                full
                key={this.props.element.id}
                title={this.props.element.title}
                thumbnail={this.props.element.images.original.url}
                info={new Date(
                  this.props.element.import_datetime
                ).toLocaleDateString()}
              />
            </Content>
            <div>
              <Arrow onClick={this.props.prev}>
                <Icon className="fa fa-arrow-left" left />
                Prev
              </Arrow>
              <Arrow onClick={this.props.next} autoFocus>
                Next
                <Icon className="fa fa-arrow-right" right />
              </Arrow>
            </div>
            <Overlay onClick={this.props.close} />
          </Wrapper>
        )}
      </div>
    );
  }
}

export default LightBox;

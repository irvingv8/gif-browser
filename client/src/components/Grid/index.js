import React, { Component } from "react";
import Card from "../Card";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: space-between;
`;

class Grid extends Component {
  componentDidMount() {}

  renderCards() {
    const cards = this.props.content;

    if (cards.length > 0) {
      return this.props.content.map((content, index) => (
        <Card
          key={content.id}
          title={content.title}
          thumbnail={content.images.original_still.url}
          info={new Date(content.import_datetime).toLocaleDateString()}
          onClick={() => this.props.action(index)}
        />
      ));
    }
  }

  render() {
    return <Wrapper>{this.renderCards()}</Wrapper>;
  }
}

export default Grid;

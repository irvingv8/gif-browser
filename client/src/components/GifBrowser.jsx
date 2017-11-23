import React from "react";
import request from "../services";
import styled from "styled-components";

import Browser from "./Browser";
import Grid from "./Grid";
import Pagination from "./Pagination";
import LightBox from "./LightBox";

const Wrapper = styled.div`
  padding: 15px;
  position: relative;
  background: #eee;
`;

class GifBrowser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      query: "",
      page: 0,
      lightBox: { isOpen: false, element: null }
    };

    this.getTrending = this.getTrending.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.search = this.search.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.openLighBox = this.openLighBox.bind(this);
    this.closeLighBox = this.closeLighBox.bind(this);
    this.handleLightBox = this.handleLightBox.bind(this);
  }

  componentDidMount() {
    this.getTrending();
  }

  // fetchs trending
  getTrending(offset = 0) {
    request
      .get("/v1/gifs/trending", {
        params: {
          limit: 12,
          offset: offset * 12
        }
      })
      .then(response => {
        this.setState({ gifs: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // fetchs query
  getQuery(query, offset = 0) {
    request
      .get("/v1/gifs/search", {
        params: {
          q: query,
          limit: 12,
          offset: offset * 12
        }
      })
      .then(response => {
        this.setState({ gifs: response.data.data, query });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // Logic checking if should fetch trending or query
  search(query) {
    if (query) {
      this.getQuery(query, this.state.page);
    } else {
      this.getTrending(this.state.page);
    }
  }

  // Handling Pagination
  handlePage(delta) {
    this.setState({ page: this.state.page + delta }, () => {
      this.search(this.state.query);
    });
  }

  openLighBox(index) {
    this.setState({
      lightBox: { index, isOpen: true, element: this.state.gifs[index] }
    });
  }

  closeLighBox() {
    this.setState({ lightBox: { isOpen: false } });
  }

  handleLightBox(delta) {
    const index = this.state.lightBox.index + delta;
    if (index >= 0 && index <= 11) {
      this.setState({
        lightBox: { index, isOpen: true, element: this.state.gifs[index] }
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <Browser search={this.search} />
        <Grid content={this.state.gifs} action={this.openLighBox} />
        <Pagination page={this.state.page} handlePage={this.handlePage} />
        <LightBox
          isOpen={this.state.lightBox.isOpen}
          element={this.state.lightBox.element}
          close={this.closeLighBox}
          next={() => {
            this.handleLightBox(+1);
          }}
          prev={() => {
            this.handleLightBox(-1);
          }}
        />
      </Wrapper>
    );
  }
}

export default GifBrowser;

import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Item from "./components/Item";

const Description = styled.p``;

class App extends Component {
  state = {
    loading: true,
    data: null
  };

  render() {
    const { loading, data } = this.state;

    return (
      <>
        <GlobalStyles />
        <Header />
        <Description>Click the Descriptionalette to copy !</Description>

        {loading ? <Loader /> : <Item />}

        <Description>❤️ Thank you ❤️</Description>
        <Footer />
      </>
    );
  }
}

export default App;

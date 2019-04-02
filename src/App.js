import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Item from "./components/Item";
import Limit from "./components/Limit";

const Description = styled.p``;

class App extends Component {
  state = {
    loading: true,
    limit: false,
    imageList: []
  };

  async componentDidMount() {
    const { imageList } = this.state;
    let { limit } = this.state;

    try {
      const { data: images } = await axios.get(
        "https://api.github.com/repos/positive-jinho/movie-palette/contents/img/"
      );

      console.log(images);

      images.forEach(image => {
        image.name = image.name.replace(" dir. ", "\n").replace(".jpg", "");

        imageList.push({
          name: image.name,
          url: image.html_url
        });
      });
    } catch (err) {
      limit = true;
    } finally {
      this.state = this.setState({
        loading: false,
        limit,
        imageList
      });
    }
  }

  render() {
    const { loading, imageList, limit } = this.state;

    return (
      <>
        <GlobalStyles />
        <Header />
        <Description>Click the Descriptionalette to copy !</Description>

        {loading ? (
          <Loader />
        ) : limit ? (
          <Limit />
        ) : (
          imageList.map(image => (
            <Item name={image.name} url={image.url} key={image.url} />
          ))
        )}

        <Description>❤️ Thank you ❤️</Description>
        <Footer />
      </>
    );
  }
}

export default App;

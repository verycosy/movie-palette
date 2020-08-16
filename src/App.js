import React, { Component } from "react";
import axios from "axios";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Item from "./components/Item";
import Description from "./components/Description";
import Layer from "./components/Layer";
import styled from "styled-components";
import BottomScrollListener from "react-bottom-scroll-listener";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  state = {
    loading: true,
    imageList: [],
    page: 1,
    clicked: false,
    color: null,
    scrollY: 0,
  };

  _copy = (color) => {
    const temp = document.createElement("input");
    temp.value = color;
    document.querySelector("body").append(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();

    this.setState({
      clicked: true,
      color,
      scrollY: window.scrollY,
    });

    setTimeout(
      () =>
        this.setState({
          clicked: false,
        }),
      1200
    );
  };

  async api() {
    const { imageList, page } = this.state;

    try {
      const { data: images } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "dbfc56cf620be872eccb06fc5c5b8e53",
            language: "ko",
            region: "KR",
            page,
          },
        }
      );

      images.results.forEach((image) => {
        imageList.push({
          original_title: image.original_title,
          title: image.title,
          src: "https://image.tmdb.org/t/p/w500" + image.backdrop_path,
        });
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        loading: false,
        imageList,
        page,
      });
    }
  }

  async componentDidMount() {
    await this.api();
  }

  async pageUpdate() {
    const { imageList, page } = this.state;

    this.setState({
      loading: true,
      imageList,
      page: page + 1,
    });

    await this.api();
  }

  render() {
    const { loading, imageList, clicked, color, scrollY } = this.state;

    return (
      <>
        <GlobalStyles />
        <Header />
        <Description description={"🎨 Click the palette to copy !"} />

        <Container>
          {imageList
            ? imageList.map((image) => (
                <Item
                  original_title={image.original_title}
                  title={image.title}
                  src={image.src}
                  key={image.src}
                  copy={this._copy}
                />
              ))
            : null}
        </Container>

        {loading ? <Loader /> : null}

        <Description description={"❤️️️️️️ Thank you ❤️"} />
        <Footer />
        <BottomScrollListener
          offset={900}
          onBottom={this.pageUpdate.bind(this)}
        />
        {clicked ? <Layer color={color} scrollY={scrollY} /> : null}
      </>
    );
  }
}

export default App;

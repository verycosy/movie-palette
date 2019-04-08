import React, { Component } from "react";
import styled from "styled-components";
import ImagePalette from "image-palette";
import Pixels from "image-pixels";
import Loader from "./Loader";

const PaletteDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Color = styled.div`
  width: 100%;
  height: 60px;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.6);
  }
`;

class Palette extends Component {
  state = {
    loading: true,
    paletteList: []
  };

  rgbToHex = (r, g, b) =>
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  async componentDidMount() {
    const { paletteList } = this.state;

    try {
      const { colors } = ImagePalette(await Pixels(this.props.src), 11);
      colors.forEach(color =>
        paletteList.push(this.rgbToHex(color[0], color[1], color[2]))
      );
    } catch (error) {
      console.log(error);
    } finally {
      this.state = this.setState({
        loading: false,
        paletteList
      });
    }
  }

  render() {
    const { loading, paletteList } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <PaletteDiv>
        {paletteList.map(palette => (
          <Color
            key={palette}
            style={{ backgroundColor: palette }}
            onClick={e => this.props.copy(palette)}
          />
        ))}
      </PaletteDiv>
    );
  }
}

export default Palette;

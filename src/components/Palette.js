import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImagePalette from "image-palette";
import Pixels from "image-pixels";
import Loader from "./Loader";
import { Color } from "./Color";

const PaletteDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

const Palette = ({ src }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    const loadPalette = async () => {
      try {
        setIsLoading(true);
        const { colors } = ImagePalette(await Pixels(src), 11);
        setPalette(
          colors.map((color) => rgbToHex(color[0], color[1], color[2]))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPalette();
  }, [src]);

  return (
    <PaletteDiv>
      {isLoading ? (
        <Loader />
      ) : (
        palette?.map((color, i) => <Color key={color + i} color={color} />)
      )}
    </PaletteDiv>
  );
};

export default Palette;

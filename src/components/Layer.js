import React from "react";
import styled, { keyframes } from "styled-components";

const frames = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Layer = styled.div.attrs(({ color, scrollY }) => ({
  color,
  scrollY
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: ${props => props.scrollY + "px"};
  left: 0px;
  font-weight: bold;
  color: white;
  animation-duration: 1.2s;
  animation-name: ${frames};
  background-color: ${props => props.color};
`;

const LayerText = styled.div`
  font-size: 64px;
`;

const LayerHex = styled.div`
  margin-top: 1.5em;
  font-size: 32px;
`;

export default ({ color, scrollY }) => (
  <Layer color={color} scrollY={scrollY}>
    <LayerText>Copied!</LayerText>
    <LayerHex>{color}</LayerHex>
  </Layer>
);

import styled from "styled-components";
import * as copy from "copy-to-clipboard";
import { useEffect, useState } from "react";
import Layer from "./Layer";

const Container = styled.div`
  width: 100%;
  height: 60px;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.6);
  }
`;

export const Color = ({ color }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 1100);
    }
  }, [isClicked]);

  return (
    <>
      <Container
        style={{ backgroundColor: color }}
        onClick={() => {
          copy(color);
          setIsClicked(true);
        }}
      />
      {isClicked && <Layer color={color} scrollY={window.scrollY} />}
    </>
  );
};

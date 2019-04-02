import React from "react";
import styled from "styled-components";
import Palette from "./Palette";

const Item = styled.div``;
const Title = styled.span`
  white-space: pre-wrap;
`;
const Image = styled.img``;

export default ({ name, url }) => (
  <Item>
    <Image src={url} crossorigin />
    <Title>{name}</Title>
    <Palette />
  </Item>
);

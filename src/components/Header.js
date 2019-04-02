import React from "react";
import styled from "styled-components";

const Header = styled.header``;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export default () => (
  <Header>
    <Title>Movie Palette</Title>
  </Header>
);

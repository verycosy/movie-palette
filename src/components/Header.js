import React from "react";
import styled from "styled-components";

const Header = styled.header``;

const Title = styled.h1`
  color: #811b21;
  padding: 20px 0px;
  font-size: 30px;
  font-weight: 600;
`;

export default () => (
  <Header>
    <Title>Movie Palette</Title>
  </Header>
);

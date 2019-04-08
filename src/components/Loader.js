import React from "react";
import styled from "styled-components";

const Text = styled.div`
  width: 100%;
  height: 120px;
  padding-top: 50px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
`;

const Loader = () => <Text>Loading...</Text>;

export default Loader;

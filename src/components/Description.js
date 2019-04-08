import React from "react";
import styled from "styled-components";

const Description = styled.p`
  font-weight: 600;
  font-size: 14px;
  padding: 20px 0px;
`;

export default ({ description }) => <Description>{description}</Description>;

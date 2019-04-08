import React from "react";
import styled from "styled-components";
import Palette from "./Palette";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 15px 3px #ddd;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Title = styled.div`
  white-space: pre-wrap;
  margin: 15px 0px;
  font-size: 14px;
  line-height: 28px;
`;

const OriginalTitle = styled.div`
  font-weight: 600;
`;
const KORTitle = styled.span``;

const Image = styled.img`
  width: 100%;
`;

export default ({ original_title, title, src, copy }) => (
  <Item>
    <Image src={src} />
    <Palette src={src} copy={copy} />
    <Title>
      <OriginalTitle>{original_title}</OriginalTitle>
      <KORTitle>{title}</KORTitle>
    </Title>
  </Item>
);

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  left:0;
  top:0;
  width: 33%;
  margin: 0 auto;
  margin-top: 125px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background-color: #444444;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  border-radius: 16px;
  @media (max-width: 375px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 125px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    background-color: #444444;
    border-radius: 16px;
  }
`;

const Article = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  margin-top: 20px;
  min-height: 20%;
  text-align: center;
  border: 1px solid #777777;
  border-radius: 8px;
  :hover {
    background-color: #999999;
    span {
      color: #111111;
    }
  }
`;

const BigSpan = styled(Link)`
  margin-bottom: 10px;
  display: block;
  font-weight: 200;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

export default () => {
  return (
    <Wrapper>
      <Article>
        <BigSpan to="/AboutUs">ABOUT US</BigSpan>
      </Article>
      <Article>
        <BigSpan to="/Question">CUSTOM</BigSpan>
      </Article>
      <Article>
        <BigSpan to="/Product">PRODUCT</BigSpan>
      </Article>
      <Article>
        <BigSpan to="/Q&A">Q&A</BigSpan>
      </Article>
      <Article>
        <BigSpan to="/Philosophy">PHILOSOPHY</BigSpan>
      </Article>
    </Wrapper>
  );
};

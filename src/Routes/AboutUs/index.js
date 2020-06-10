import React from "react";
import styled from "styled-components";
import Slider from "../../components/Slider";
import { Logo } from "../../components/Icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background-color: #444444;
  border-radius: 16px;
`;

const Article = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
  margin-top: 20px;
  min-height: 20%;
  text-align: center;
  }
`;

const BigSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: 200;
  font-size: 24px;
  color: white;
`;

export default () => {
  return (
    <Wrapper>
      <Article style={{ backgroundColor: "#888888", borderRadius: "12px" }}>
        <Logo />
      </Article>
      <Article>
        <BigSpan>Not Found</BigSpan>
        <BigSpan>We make your style more gorgeous</BigSpan>
      </Article>
    </Wrapper>
  );
};

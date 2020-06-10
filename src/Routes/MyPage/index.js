import React from "react";
import styled from "styled-components";
import Slider from "../../components/Slider";
import { Logo } from "../../components/Icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 40vh;
  margin: 0 auto;
  margin-top: 230px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background-color: #444444;
  border-radius: 16px;
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
        <BigSpan to="/Order">Order List</BigSpan>
      </Article>
      <Article>
        <BigSpan to="/History">History</BigSpan>
      </Article>
    </Wrapper>
  );
};

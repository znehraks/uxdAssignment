import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useInput from "../../Hooks/useInput";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Article = styled.div`
  width: 100%;
  margin-top: 20px;
  min-height: 33%;
  text-align: center;
`;

const BigSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: 200;
  font-size: 24px;
`;

const LittleSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: 200;
  font-size: 18px;
`;

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 5em;
  text-align: center;
  color: #ddd;
  font-weight: 700;
  text-shadow: 1px 1px 2px black;
  :hover {
    text-shadow: none;
  }
`;

export default () => {
  const userName = useInput("");
  const password = useInput("");
  const email = useInput("");  
  return (
    <Wrapper>
      <Article>
        <BigSpan>Customized Premium Tea</BigSpan>
        <LittleSpan>Would you like some?</LittleSpan>
      </Article>
    </Wrapper>
  );
};

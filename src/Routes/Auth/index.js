import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import bg from "./imgs/colorfulbg.jpg";
import Input from "../../components/Input";

const Animation = keyframes`
    from {
      opacity: 1
    }
    to {
      opacity: 0.5
    }
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${Animation} 1s linear 1;
  opacity: 0.6;
  z-index: -999;
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
  font-weight: 800;
  font-size: 24px;
`;

const LittleSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: 400;
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

const AuthButton = styled(Link)`
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;
  background: #c94131;
  padding: 10px;
  border-radius: 7px;
  color: #fff;
  :hover {
    background: #c11111;
  }
`;

export default () => {
  const userName = useInput("");
  const password = useInput("");
  const email = useInput("");
  return (
    <Wrapper>
      <Backdrop />
      <Article>
        <BigSpan>Find your own style!</BigSpan>
        <LittleSpan>Join us now!</LittleSpan>
        <AuthButton to="/">Login with Google</AuthButton>
      </Article>
    </Wrapper>
  );
};

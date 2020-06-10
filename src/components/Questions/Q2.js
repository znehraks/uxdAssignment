import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./css/image.css";
import flavor from "./imgs/flavor.png";
import { Suit, Outdoor, Knit, Casual } from "../Icons";
import SuitIcon from "./imgs/suit.png";
import CasualIcon from "./imgs/casual.png";
import KnitIcon from "./imgs/knit.png";
import OutdoorIcon from "./imgs/outdoor.png";

const QSpan = styled.span`
  margin: 20px 0px;
  display: block;
  padding: 10px;
  font-size: 36px;
  color: #000;
  font-weight: 800;
  @media (max-width: 420px) {
    margin: 20px 0px;
    display: block;
    padding: 10px;
    font-size: 18px;
    color: #000;
    font-weight: 800;
  }
`;

const QDetailSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px black;
  font-weight: 800;
  @media (max-width: 420px) {
    font-size: 8px;
  }
`;

const QSubSpan = styled.span`
  padding: 10px;
  display: inline;
  font-size: 12px;
  color: #000;
  font-weight: 800;
`;

const QRedSpan = styled.span`
  padding: 10px;
  display: inline;
  font-size: 32px;
  text-shadow: 1px 1px black;
  color: #fd3d1d;
  font-weight: 800;
`;

const QSubGraySpan = styled.span`
  display: inline;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 800;
`;

const QSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QSelectList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const QSelectListItem = styled.li`
  cursor: pointer;

  :last-child {
    margin-bottom: 20px;
  }
`;

const RoundDiv = styled.div`
  width: 25px;
  height: 80px;
  margin: 15px 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  border-radius: 25px;
  cursor: pointer;
  @media (max-width: 420px) {
    margin: 15px 35px;
  }
`;

const twinkle = keyframes`
  0% 
    opacity:0
  }
  50%{
    opacity:1
  }
  100%{
    opacity:0
  }
`;

const SuitTwinkle = styled.div`
  background: url(${SuitIcon});
  background-size: cover;
  width: 80px;
  height: 80px;
  animation-name: twinkle;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const Flavor2Twinkle = styled.div`
  background: url(${CasualIcon});
  background-size: cover;
  width: 80px;
  height: 80px;
  animation-name: twinkle;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const Flavor3Twinkle = styled.div`
  background: url(${KnitIcon});
  background-size: cover;
  width: 80px;
  height: 80px;
  animation-name: twinkle;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const Flavor4Twinkle = styled.div`
  background: url(${OutdoorIcon});
  background-size: cover;
  width: 80px;
  height: 80px;
  animation-name: twinkle;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

const RoundDivSpan = styled.span`
  color: #000;
  font-weight: 600;
  text-align: center;
`;

const Form = styled.form``;

export default ({ bgColor2, setBgColor2, Q2Answer, setQ2Answer }) => {
  //문항은 추후에 DB에서 추출
  const Q = "원하는 스타일을 선택해 주세요";
  const A = ["SUIT", "CASUAL", "KNIT", "OUTDOOR"];

  const colors = ["#d14124", "#e9c97f"];
  const boxShadows = [
    "3px 3px 3px white, 0 0 7px white",
    "5px 5px 10px black, 0 0 45px maroon",
  ];
  const [click, setClick] = useState("N");

  const clickFunc = (index) => {
    setBgColor2(colors[index]);
    setQ2Answer(A[index]);
    setClick(A[index]);
  };

  return (
    <>
      <QRedSpan>ORDER</QRedSpan>
      <QSubSpan>
        Customize #02 /<QSubGraySpan> 05</QSubGraySpan>
      </QSubSpan>
      <QSpan>Q2.{Q}</QSpan>
      <QDetailSpan>
        전체적인 스타일의 결정할 카테고리를 선택해 주세요
      </QDetailSpan>
      <QSelectContainer>
        <QSelectList>
          <QSelectListItem
            onClick={() => {
              clickFunc(0);
            }}
          >
            {click === A[0] ? (
              <RoundDiv
                style={{
                  transitionDuration: "0.5s",
                }}
              >
                <SuitTwinkle />
              </RoundDiv>
            ) : (
              <RoundDiv
                style={{
                  transitionDuration: "0.5s",
                }}
              >
                <Suit />
              </RoundDiv>
            )}
            <RoundDivSpan>{A[0]}</RoundDivSpan>
          </QSelectListItem>

          <QSelectListItem
            onClick={() => {
              clickFunc(1);
            }}
          >
            {click === A[1] ? (
              <RoundDiv
                style={{
                  transitionDuration: "0.5s",
                }}
              >
                <Flavor2Twinkle />
              </RoundDiv>
            ) : (
              <RoundDiv
                style={{
                  transitionDuration: "0.5s",
                }}
              >
                <Casual />
              </RoundDiv>
            )}
            <RoundDivSpan>{A[1]}</RoundDivSpan>
          </QSelectListItem>

          <QSelectListItem
            onClick={() => {
              clickFunc(2);
            }}
          >
            {click === A[2] ? (
              <RoundDiv
                style={{
                  transitionDuration: "0.5s",
                }}
              >
                <Flavor3Twinkle />
              </RoundDiv>
            ) : (
              <RoundDiv
                style={{
                  transitionDuration: "0.5s",
                }}
              >
                <Knit />
              </RoundDiv>
            )}
            <RoundDivSpan>{A[2]}</RoundDivSpan>
          </QSelectListItem>

          <QSelectListItem
            onClick={() => {
              clickFunc(3);
            }}
          >
            {click === A[3] ? (
              <RoundDiv
                style={{
                  transitionDuration: "0.5s",
                }}
              >
                <Flavor4Twinkle />
              </RoundDiv>
            ) : (
              <RoundDiv
                style={{
                  transitionDuration: "0.5s",
                }}
              >
                <Outdoor />
              </RoundDiv>
            )}
            <RoundDivSpan>{A[3]}</RoundDivSpan>
          </QSelectListItem>
        </QSelectList>
      </QSelectContainer>
    </>
  );
};

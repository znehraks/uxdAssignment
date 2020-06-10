import React, { useState } from "react";
import styled from "styled-components";
import type1 from "./imgs/fruit.jpg";
import type2 from "./imgs/matcha.jpg";
import type3 from "./imgs/sandwich.jpg";

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
    padding: 0px;
    font-size: 18px;
    color: #000;
    font-weight: 800;
  }
`;

const QDetailSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-size: 12px;
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
  font-size: ${props => props.fontsize};
  text-shadow: 1px 1px black;
  color: #fd3d1d;
  font-weight: 800;
  @media (max-width: 420px) {
    font-size:10px;
  }
`;

const QSubGraySpan = styled.span`
  display: inline;
  font-weight: 200;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 800;
  cursor: pointer;
`;

const QSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QSelectDrawer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vh;
  height: 20vh;
  margin: 30px 0px;
  border-radius: 10px;
  box-shadow: 3px 3px black;
  align-items: center;
  justify-content: center;
  :last-child {
    margin-bottom: 40px;
  }
  cursor: pointer;
  filter: ${props => (props.detail === true ? "blur(1px)" : "none")};
  opacity: ${props => (props.detail === true ? "0.5" : "1")};
  
  @media (max-width: 420px) {
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    box-shadow: 3px 3px black;
    align-items: center;
    justify-content: center;
    margin: 20px 10px;
    width: 40vh;
    height: 15vh;
    filter: ${props => (props.detail === true ? "blur(1px)" : "none")};
    opacity: ${props => (props.detail === true ? "0.5" : "1")};
  }
`;

const Backdrop = styled.div`
  background-image: url(${props => props.imgType});
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const QSelectList = styled.ul``;

const QSelectListItem = styled.li`
  cursor: pointer;
  margin: 0 10px;
`;

const RoundDiv = styled.div`
  width: 30vh;
  height: 13vh;
  margin: 15px 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.imgType});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
  box-shadow: 5px 5px 10px black, 0 0 20px maroon;
  cursor: pointer;
  :hover {
    box-shadow: 2px 2px 2px black, 0 0 5px black;
  }
  @media (max-width: 420px) {
    width: 20vh;
    height: 10vh;
    margin: 15px 20px 15px 0px;
  }
`;

const DetailBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  @media (max-width: 420px) {
    position: relative;
  }
`;

const RoundDivSpan = styled.span`
  color: #000;
  font-weight: 600;
  text-align: center;
`;
export default ({ bgColor2, setBgColor2, Q2Answer, setQ2Answer }) => {
  //문항은 추후에 DB에서 추출
  const Q = "선호하는 맛을 골라주세요";
  const A = ["시트러스", "복숭아", "Q2A3", "Q2A4"];
  const colors = ["#d14124", "#e9c97f"];
  const boxShadows = [
    "5px 5px 5px white, 0 0 7px maroon",
    "10px 10px 10px black, 0 0 10px black"
  ];
  const [click, setClick] = useState("N");
  const [detail, setDetail] = useState(false);
  const clickFunc = index => {
    setBgColor2(colors[index]);
    setQ2Answer(A[index]);
    setClick(A[index]);
  };

  return (
    <>
      <QRedSpan fontsize={"32px"}>A.I ORDER</QRedSpan>
      <QSubSpan>
        A.I Customize #02 /<QSubGraySpan> 05</QSubGraySpan>
      </QSubSpan>
      <QSpan>Q2.{Q}</QSpan>
      <QDetailSpan>다음의 플레이버 프로필을 참고하시어</QDetailSpan>
      <QDetailSpan>선호하시는 맛을 선택해주세요</QDetailSpan>
      <QSelectContainer>
        <QSelectList>
          <QSelectDrawer
            onClick={() => {
              clickFunc(0);
            }}
          >
            <Backdrop imgType={type1} />
            {click === A[0]? (
              <DetailBox>
                <QRedSpan fontsize={"24px"}>Fresh & Fruity</QRedSpan>
                <QDetailSpan>감귤류부터 과즙이 풍부한 과일까지</QDetailSpan>
                <QDetailSpan>신선하고 과일맛이 나는 티들이</QDetailSpan>
                <QDetailSpan>당신의 하루를 밝게 만들어줄거에요</QDetailSpan>
              </DetailBox>
            ) : (
              <></>
            )}
          </QSelectDrawer>
          <QSelectDrawer
            onClick={() => {
              clickFunc(1);
            }}
          >
            <Backdrop imgType={type2} />
            {click === A[1] ? (
              <DetailBox>
                <QRedSpan fontsize={"24px"}>Fresh & Fruity</QRedSpan>
                <QDetailSpan>감귤류부터 과즙이 풍부한 과일까지</QDetailSpan>
                <QDetailSpan>신선하고 과일맛이 나는 티들이</QDetailSpan>
                <QDetailSpan>당신의 하루를 밝게 만들어줄거에요</QDetailSpan>
              </DetailBox>
            ) : (
              <></>
            )}
          </QSelectDrawer>
          <QSelectDrawer
            onClick={() => {
              clickFunc(2);
            }}
          >
            <Backdrop imgType={type3} />
            {click === A[2]  ? (
              <DetailBox>
                <QRedSpan fontsize={"24px"}>Fresh & Fruity</QRedSpan>
                <QDetailSpan>감귤류부터 과즙이 풍부한 과일까지</QDetailSpan>
                <QDetailSpan>신선하고 과일맛이 나는 티들이</QDetailSpan>
                <QDetailSpan>당신의 하루를 밝게 만들어줄거에요</QDetailSpan>
              </DetailBox>
            ) : (
              <></>
            )}
          </QSelectDrawer>
          <QSelectDrawer
            onClick={() => {
              clickFunc(3);
            }}
          >
            <Backdrop imgType={type2} />
            {click === A[3]? (
              <DetailBox>
                <QRedSpan fontsize={"24px"}>Fresh & Fruity</QRedSpan>
                <QDetailSpan>감귤류부터 과즙이 풍부한 과일까지</QDetailSpan>
                <QDetailSpan>신선하고 과일맛이 나는 티들이</QDetailSpan>
                <QDetailSpan>당신의 하루를 밝게 만들어줄거에요</QDetailSpan>
              </DetailBox>
            ) : (
              <></>
            )}
          </QSelectDrawer>
        </QSelectList>
      </QSelectContainer>
    </>
  );
};

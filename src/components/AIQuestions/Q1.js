import React, { useState } from "react";
import styled from "styled-components";
import type1 from "./imgs/AType1.png";
import type2 from "./imgs/AType2.png";
import type3 from "./imgs/AType3.png";
import type4 from "./imgs/AType4.png";

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
  font-size: 32px;
  text-shadow: 1px 1px black;
  color: #fd3d1d;
  font-weight: 800;
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
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  :last-child {
    margin-bottom: 40px;
  }
`;

const QSelectList = styled.ul``;

const QSelectListItem = styled.li`
  cursor: pointer;
  margin: 0 20px;
`;

const RoundDiv = styled.div`
  width: 150px;
  height: 80px;
  margin: 15px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 5px 5px 10px black, 0 0 20px maroon;
  cursor: pointer;
  :hover {
    box-shadow: 2px 2px 2px black, 0 0 5px black;
  }
`;

const RoundDivBgImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.imgType});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const RoundDivSpan = styled.span`
  color: #000;
  font-weight: 600;
  text-align: center;
`;

const Form = styled.form``;
export default ({ bgColor1, setBgColor1, Q1Answer, setQ1Answer }) => {
  //문항은 추후에 DB에서 추출
  const Q = "어떤 유형에 가까운지 알려주세요";
  const A = ["#운동과 수분보충", "#릴렉스와 힐링", "#워크 라이프 밸런스"];
  const colors = [
    "#d14124",
    "#e9c97f",
    "#f0f8c3",
    "#227325",
    "#a879af",
    "#cc1d1d"
  ];
  const boxShadows = [
    "3px 3px 3px white, 0 0 7px white",
    "5px 5px 10px black, 0 0 10px maroon"
  ];
  const [click, setClick] = useState("N");
  const clickFunc = index => {
    setBgColor1(colors[index]);
    setQ1Answer(A[index]);
    setClick(A[index]);
  };

  return (
    <>
      <QRedSpan>A.I ORDER</QRedSpan>
      <QSubSpan>
        A.I Customize #01 /<QSubGraySpan> 05</QSubGraySpan>
      </QSubSpan>
      <QSpan>Q1.{Q}</QSpan>
      <QDetailSpan>당신을 이해하기 위한 첫번째 질문입니다</QDetailSpan>
      <QDetailSpan>당신과 가장 가까운 라이프스타일을 선택해주세요</QDetailSpan>
      <QSelectContainer>
        <QSelectList>
          <QSelectDrawer>
            <QSelectListItem
              onClick={() => {
                clickFunc(0);
              }}
            >
              {click === A[0] ? (
                <RoundDiv
                  style={{
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivBgImage imgType={type1}/>
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivBgImage imgType={type1} />
                </RoundDiv>
              )}
              <RoundDivSpan>{A[0]}</RoundDivSpan>
            </QSelectListItem>
          </QSelectDrawer>
          <QSelectDrawer>
            <QSelectListItem
              onClick={() => {
                clickFunc(1);
              }}
            >
              {click === A[1] ? (
                <RoundDiv
                  style={{
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivBgImage imgType={type2} />
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivBgImage imgType={type2} />
                </RoundDiv>
              )}
              <RoundDivSpan>{A[1]}</RoundDivSpan>
            </QSelectListItem>
          </QSelectDrawer>
          <QSelectDrawer>
            <QSelectListItem
              onClick={() => {
                clickFunc(2);
              }}
            >
              {click === A[2] ? (
                <RoundDiv
                  style={{
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivBgImage imgType={type3}/>
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivBgImage imgType={type3} />
                </RoundDiv>
              )}
              <RoundDivSpan>{A[2]}</RoundDivSpan>
            </QSelectListItem>
          </QSelectDrawer>
        </QSelectList>
      </QSelectContainer>
    </>
  );
};

import React, { useState } from "react";
import styled from "styled-components";

const QSpan = styled.span`
  margin: 20px 0px;
  display: block;
  padding: 10px;
  font-size: 36px;
  color: #000;
  font-weight: 800;
  @media (max-width: 420px) {
    margin: 0px;
    display: block;
    padding: 10px;
    font-size: 20px;
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
  padding: 5px;
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

const QSelectDrawer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  :last-child {
    margin-bottom: 30px;
  }
  @media (max-width: 420px) {
    margin: 0px;
  }
`;

const QSelectList = styled.ul``;

const QSelectListItem = styled.li`
  cursor: pointer;
  margin: 0 3px;
`;

const RoundDiv = styled.div`
  width: 50px;
  height: 50px;
  margin: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 5px 5px 10px black, 0 0 45px maroon;
  cursor: pointer;
  :hover {
    box-shadow: 2px 2px 2px black, 0 0 5px black;
  }
`;

const RoundDivSpan = styled.span`
  color: #000;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
`;

const InsideSpan = styled.span`
  color: #000;
  font-weight: 600;
  font-size: 9px;
  text-align: center;
`;

const Form = styled.form``;
export default ({ bgColor1, setBgColor1, Q1Answer, setQ1Answer }) => {
  //문항은 추후에 DB에서 추출
  const Q = "베이스 컬러를 선택해주세요";
  const A = ["dark", "bright", "WarmTone", "CoolTone"];
  const colors = ["#444", "#ddd", "#dbcab7", "#a2b9e0"];
  const boxShadows = [
    "3px 3px 3px white, 0 0 7px white",
    "5px 5px 10px black, 0 0 45px maroon",
  ];
  const [click, setClick] = useState("N");
  const clickFunc = (index) => {
    setBgColor1(colors[index]);
    setQ1Answer(A[index]);
    setClick(A[index]);
  };

  return (
    <>
      <QRedSpan>ORDER</QRedSpan>
      <QSubSpan>
        Customize #01 /<QSubGraySpan> 04</QSubGraySpan>
      </QSubSpan>
      <QSpan>Q1.{Q}</QSpan>
      <QDetailSpan>
        원하는 옷 조합의 전체적인 분위기를 선택해 주세요
      </QDetailSpan>
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
                    backgroundColor: `${colors[0]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`,
                  }}
                ></RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[0]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`,
                  }}
                ></RoundDiv>
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
                    backgroundColor: `${colors[1]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`,
                  }}
                ></RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[1]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`,
                  }}
                ></RoundDiv>
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
                    backgroundColor: `${colors[2]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`,
                  }}
                ></RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[2]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`,
                  }}
                ></RoundDiv>
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
                    backgroundColor: `${colors[3]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`,
                  }}
                ></RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[3]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`,
                  }}
                ></RoundDiv>
              )}
              <RoundDivSpan>{A[3]}</RoundDivSpan>
            </QSelectListItem>
          </QSelectDrawer>
        </QSelectList>
      </QSelectContainer>
    </>
  );
};

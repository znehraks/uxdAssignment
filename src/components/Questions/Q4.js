import React, { useState } from "react";
import styled from "styled-components";

const QSpan = styled.span`
  margin: 20px 0px;
  display: block;
  padding: 10px;
  font-size: 34px;
  color: #000;
  font-weight: 800;
  @media (max-width: 420px) {
    margin: 20px 0px;
    display: block;
    font-size: 20px;
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
  width: 50px;
  height: 50px;
  margin: 15px 55px;
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

const InsideSpan = styled.span`
  color: #000;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

const RoundDivSpan = styled.span`
  color: #000;
  display: block;
  margin-top: 5px;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`;

const Form = styled.form``;

export default ({ Q4Answer, setQ4Answer, opa, setOpa }) => {
  //문항은 추후에 DB에서 추출
  const Q = "원하는 시즌을 선택해주세요";
  const A = ["S/S", "F/W"];
  const colors = ["#ffffba", "#473a3a"];
  const boxShadows = [
    "3px 3px 3px white, 0 0 7px white",
    "5px 5px 10px black, 0 0 45px maroon",
  ];
  const O = [1, 1];
  const [click, setClick] = useState("N");
  const clickFunc = (index) => {
    setQ4Answer(A[index]);
    setClick(A[index]);
    setOpa(O[index]);
  };
  return (
    <>
      <QRedSpan>ORDER</QRedSpan>
      <QSubSpan>
        Customize #04 /<QSubGraySpan> 04</QSubGraySpan>
      </QSubSpan>
      <QSpan>Q4.{Q}</QSpan>
      <QDetailSpan>원하는 옷의 시즌을 선택해주세요</QDetailSpan>
      <QDetailSpan>해당 될 옷의 계절을 선택하시면 됩니다</QDetailSpan>
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
                  backgroundColor: `${colors[0]}`,
                  transitionDuration: "0.5s",
                  boxShadow: `${boxShadows[0]}`,
                }}
              >
                <InsideSpan>S/S</InsideSpan>
              </RoundDiv>
            ) : (
              <RoundDiv
                style={{
                  backgroundColor: `${colors[0]}`,
                  transitionDuration: "0.5s",
                  boxShadow: `${boxShadows[1]}`,
                }}
              >
                <InsideSpan>S/S</InsideSpan>
              </RoundDiv>
            )}
            <RoundDivSpan>Spring/Summer</RoundDivSpan>
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
              >
                <InsideSpan style={{ color: "#ccc" }}>F/W</InsideSpan>
              </RoundDiv>
            ) : (
              <RoundDiv
                style={{
                  backgroundColor: `${colors[1]}`,
                  transitionDuration: "0.5s",
                  boxShadow: `${boxShadows[1]}`,
                }}
              >
                <InsideSpan style={{ color: "#ccc" }}>F/W</InsideSpan>
              </RoundDiv>
            )}
            <RoundDivSpan>Fall/Winter</RoundDivSpan>
          </QSelectListItem>
        </QSelectList>
      </QSelectContainer>
    </>
  );
};

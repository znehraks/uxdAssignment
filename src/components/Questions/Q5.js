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
    margin: 20px 0px;
    display: block;
    padding: 10px;
    font-size: 20px;
    color: #000;
    font-weight: 800;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 25px;
  }
`;

const QSelectList = styled.ul``;

const QSelectListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 80%;
  cursor: pointer;
  margin: 0 20px;
`;

const RoundDiv = styled.div`
  width: 30vh;
  height: 14vh;
  margin: 15px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 20px;
  box-shadow: 5px 5px 10px black, 0 0 30px maroon;
  cursor: pointer;
  :hover {
    box-shadow: 2px 2px 2px black, 0 0 5px black;
  }
  @media (max-width: 420px) {
    width: 16vh;
    height: 8vh;
  }
`;

const RoundDivSpan = styled.span`
  color: #cccccc;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  :last-child {
  }
  @media (max-width: 375px) {
  font-size: 8px;
  }
`;


const Form = styled.form``;
export default ({ Q5Answer, setQ5Answer }) => {
  //문항은 추후에 DB에서 추출
  const Q = "주문 구성을 선택해주세요";
  const A = [
    "1PALETTEA Large(150g)x1 + PALETTEA 12T/3g",
    "2PALETTEA Large(150g)x1 + PALETTEA 12T/3g",
    "3PALETTEA Large(150g)x1 + PALETTEA 12T/3g",
    "4PALETTEA Large(150g)x1 + PALETTEA 12T/3g",
    "5PALETTEA Large(150g)x1 + PALETTEA 12T/3g",
    "6PALETTEA Large(150g)x1 + PALETTEA 12T/3g"
  ];
  const cost = [
    "115,000won(무료배송)",
    "125,000won(무료배송)",
    "135,000won(무료배송)",
    "145,000won(무료배송)",
    "155,000won(무료배송)",
    "165,000won(무료배송)"
  ];
  const colors = [
    "#444444",
    "#444444",
    "#444444",
    "#444444",
    "#444444",
    "#444444"
  ];
  const boxShadows = [
    "5px 5px 5px white, 0 0 10px white",
    "5px 5px 10px black, 0 0 30px maroon"
  ];
  const [click, setClick] = useState("N");
  const clickFunc = index => {
    setQ5Answer(A[index]);
    setClick(A[index]);
  };

  return (
    <>
      <QRedSpan>ORDER</QRedSpan>
      <QSubSpan>
        Customize #05 /<QSubGraySpan> 05</QSubGraySpan>
      </QSubSpan>
      <QSpan>Q5.{Q}</QSpan>
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
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivSpan>{A[0]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[0]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivSpan>{A[0]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              )}
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
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivSpan>{A[1]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[1]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivSpan>{A[1]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              )}
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
                    backgroundColor: `${colors[2]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivSpan>{A[2]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[2]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivSpan>{A[2]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              )}
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
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivSpan>{A[3]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[3]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivSpan>{A[3]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              )}
            </QSelectListItem>
          </QSelectDrawer>

          <QSelectDrawer>
            <QSelectListItem
              onClick={() => {
                clickFunc(4);
              }}
            >
              {click === A[4] ? (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[4]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivSpan>{A[4]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[4]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivSpan>{A[4]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              )}
            </QSelectListItem>

            <QSelectListItem
              onClick={() => {
                clickFunc(5);
              }}
            >
              {click === A[5] ? (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[5]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[0]}`
                  }}
                >
                  <RoundDivSpan>{A[5]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              ) : (
                <RoundDiv
                  style={{
                    backgroundColor: `${colors[5]}`,
                    transitionDuration: "0.5s",
                    boxShadow: `${boxShadows[1]}`
                  }}
                >
                  <RoundDivSpan>{A[5]}</RoundDivSpan>
                  <RoundDivSpan>{cost[0]}</RoundDivSpan>
                </RoundDiv>
              )}
            </QSelectListItem>
          </QSelectDrawer>
        </QSelectList>
      </QSelectContainer>
    </>
  );
};

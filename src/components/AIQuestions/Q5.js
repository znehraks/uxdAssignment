import React, { useState } from "react";
import styled from "styled-components";
import type1 from "./imgs/wood.jpg";
import type2 from "./imgs/beach.jpg";
import type3 from "./imgs/cafe.jpg";
import type4 from "./imgs/forest.jpg";

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

const QRedTitleSpan = styled.span`
  padding: 10px;
  display: inline;
  font-size: ${props => props.fontsize};
  text-shadow: 1px 1px black;
  color: #fd3d1d;
  font-weight: 800;
  @media (max-width: 420px) {
    font-size: 10px;
  }
`;

const QRedSpan = styled.span`
  padding: 10px;
  display: inline;
  font-size: ${props => props.fontsize};
  text-shadow: 1px 1px black;
  color: #fff;
  font-weight: 800;
  @media (max-width: 420px) {
    font-size: 10px;
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

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const QSelectDrawer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30vh;
  height: 20vh;
  margin: 30px 30px;
  border-radius: 10px;
  box-shadow: 3px 3px black;
  align-items: center;
  justify-content: center;
  :last-child {
    margin-bottom: 40px;
  }
  filter: ${props => (props.detail === true ? "blur(1px)" : "none")};
  opacity: ${props => (props.detail === true ? "0.5" : "1")};
  @media (max-width: 420px) {
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    box-shadow: 3px 3px black;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    width: 18vh;
    height: 12vh;
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
export default ({ bgColor3, setBgColor5, Q5Answer, setQ5Answer, title }) => {
  //문항은 추후에 DB에서 추출
  const A = ["시트러스", "복숭아", "Q2A3", "Q2A4", "D", "F"];
  const colors = ["#d14124", "#e9c97f"];
  const boxShadows = [
    "5px 5px 5px white, 0 0 7px maroon",
    "10px 10px 10px black, 0 0 10px black"
  ];
  const [click, setClick] = useState("N");
  const [detail, setDetail] = useState(false);
  const clickFunc = index => {
    setQ5Answer(A[index]);
    setClick(A[index]);
  };

  return (
    <>
      <QRedTitleSpan fontsize={"32px"}>A.I ORDER</QRedTitleSpan>
      <QSubSpan>
        A.I Customize #03 /<QSubGraySpan> 05</QSubGraySpan>
      </QSubSpan>
      <QSpan>Q5.{title}</QSpan>
      <QSelectContainer>
        <QSelectList>
          <DrawerContainer>
            <QSelectDrawer
              onClick={() => {
                clickFunc(0);
              }}
              onMouseEnter={() => {
                setDetail(0);
              }}
              onMouseLeave={() => {
                setDetail(false);
              }}
              detail={detail}
            >
              <Backdrop imgType={type1} />
              {click === A[0] || detail === 0 ? (
                <DetailBox>
                  <QRedSpan fontsize={"16px"}>Wood Smoky</QRedSpan>
                </DetailBox>
              ) : (
                <></>
              )}
            </QSelectDrawer>
            <QSelectDrawer
              onClick={() => {
                clickFunc(1);
              }}
              onMouseEnter={() => {
                setDetail(1);
              }}
              onMouseLeave={() => {
                setDetail(false);
              }}
              detail={detail}
            >
              <Backdrop imgType={type2} />
              {click === A[1] || detail === 1 ? (
                <DetailBox>
                  <QRedSpan fontsize={"16px"}>LIGHT BLUE</QRedSpan>
                </DetailBox>
              ) : (
                <></>
              )}
            </QSelectDrawer>
          </DrawerContainer>
          <DrawerContainer>
            <QSelectDrawer
              onClick={() => {
                clickFunc(2);
              }}
              onMouseEnter={() => {
                setDetail(2);
              }}
              onMouseLeave={() => {
                setDetail(false);
              }}
              detail={detail}
            >
              <Backdrop imgType={type3} />
              {click === A[2] || detail === 2 ? (
                <DetailBox>
                  <QRedSpan fontsize={"16px"}>BERGAMOT</QRedSpan>
                </DetailBox>
              ) : (
                <></>
              )}
            </QSelectDrawer>
            <QSelectDrawer
              onClick={() => {
                clickFunc(3);
              }}
              onMouseEnter={() => {
                setDetail(3);
              }}
              onMouseLeave={() => {
                setDetail(false);
              }}
              detail={detail}
            >
              <Backdrop imgType={type4} />
              {click === A[3] || detail === 3 ? (
                <DetailBox>
                  <QRedSpan fontsize={"16px"}>CITRONELLA</QRedSpan>
                </DetailBox>
              ) : (
                <></>
              )}
            </QSelectDrawer>
          </DrawerContainer>
          <DrawerContainer>
            <QSelectDrawer
              onClick={() => {
                clickFunc(4);
              }}
              onMouseEnter={() => {
                setDetail(4);
              }}
              onMouseLeave={() => {
                setDetail(false);
              }}
              detail={detail}
            >
              <Backdrop imgType={type1} />
              {click === A[4] || detail === 4 ? (
                <DetailBox>
                  <QRedSpan fontsize={"16px"}>HESPERIDES</QRedSpan>
                </DetailBox>
              ) : (
                <></>
              )}
            </QSelectDrawer>
            <QSelectDrawer
              onClick={() => {
                clickFunc(5);
              }}
              onMouseEnter={() => {
                setDetail(5);
              }}
              onMouseLeave={() => {
                setDetail(false);
              }}
              detail={detail}
            >
              <Backdrop imgType={type3} />
              {click === A[5] || detail === 5 ? (
                <DetailBox>
                  <QRedSpan fontsize={"16px"}>LIME BASIL</QRedSpan>
                </DetailBox>
              ) : (
                <></>
              )}
            </QSelectDrawer>
          </DrawerContainer>
        </QSelectList>
      </QSelectContainer>
    </>
  );
};

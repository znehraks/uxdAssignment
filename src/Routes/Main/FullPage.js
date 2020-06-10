import React, { useState } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import "../css/FullPage.css";
import "../css/override.css";
import { Logo, Logo_white } from "../../components/Icons";
import { Link } from "react-router-dom";
import content from "../../components/Questions/imgs/maincontent.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Article = styled.div`
  width: 80%;
  margin-top: 20px;
  min-height: 33%;
  text-align: center;
`;

const TitleSpan = styled.span`
  margin: 30px 0px;
  display: block;
  font-weight: 800;
  color: #fff;
  text-shadow: 3px 3px #111;
  font-size: 3rem;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
`;

const BigSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: 600;
  text-shadow: 3px 3px #111;
  color: #fff;
  font-size: 2rem;
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
  text-shadow: 4px 4px 6px black;
  color: #fff;
  :hover {
    transition-duration: 0.5s;
    text-shadow: 2px 2px 3px white;
  }
  @media (max-width: 420px) {
    font-size: 36px;
    :hover {
      transition-duration: 0.5s;
      text-shadow: 2px 2px 3px white;
    }
  }
`;

const H3 = styled.h2`
  font-size: 5em;
  text-align: center;
  color: #ddd;
  font-weight: 700;
  text-shadow: 4px 4px 6px black;
  color: #fff;
  :hover {
    transition-duration: 0.5s;
    text-shadow: 2px 2px 3px white;
  }
  @media (max-width: 420px) {
    font-size: 24px;
    :hover {
      transition-duration: 0.5s;
      text-shadow: 2px 2px 3px white;
    }
  }
`;

const HiddenContainer = styled.div`
  @media (min-width: 421px) {
    visibility: hidden;
  }
  @media (max-width: 420px) {
    position: relative;
    top: 90px;
  }
`;

const HiddenButton = styled(Link)`
  @media (max-width: 420px) {
    border: 4px solid #f4210e;
    background-color: #000;
    color: #f4210e;
    font-weight: 800;
    padding: 8px 10px;
    font-size: 16px;
  }
`;

export default () => {
  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={["#cdec56", "#9d15a9", "#2bce79"]}
      navigation={true}
      slidesNavigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <div className="slide">
                <Wrapper>
                  <Article>
                    <TitleSpan>나만의 스타일을 찾는</TitleSpan>
                    <TitleSpan> 무신사의 방법</TitleSpan>
                    <BigSpan>Customized Own Style</BigSpan>
                    <LittleSpan>Would you try?</LittleSpan>
                    <HiddenContainer>
                      <HiddenButton to="/Question">CURATE</HiddenButton>
                    </HiddenContainer>
                  </Article>
                </Wrapper>
              </div>
              <div className="slide">
                <Wrapper>
                  <Article>
                    <TitleSpan>나만의 스타일을 찾는</TitleSpan>
                    <TitleSpan> 무신사의 방법</TitleSpan>
                    <BigSpan>Customized Own Style</BigSpan>
                    <LittleSpan>Would you try?</LittleSpan>
                    <HiddenContainer>
                      <HiddenButton to="/Question">CURATE</HiddenButton>
                    </HiddenContainer>
                  </Article>
                </Wrapper>
              </div>
              <div className="slide">
                <Wrapper>
                  <Article>
                    <TitleSpan>나만의 스타일을 찾는</TitleSpan>
                    <TitleSpan> 무신사의 방법</TitleSpan>
                    <BigSpan>Customized Own Style</BigSpan>
                    <LittleSpan>Would you try?</LittleSpan>
                    <HiddenContainer>
                      <HiddenButton to="/Question">CURATE</HiddenButton>
                    </HiddenContainer>
                  </Article>
                </Wrapper>
              </div>
            </div>
            <div className="section section2">
              <div className="slide">
                <TitleSpan>2020-S/S Styles</TitleSpan>
                <img src={content}></img>
              </div>
              <div className="slide">
                <h2>PALETTEA안양범계점</h2>
              </div>
              <div className="slide">
                <h2>Slide 2.3</h2>
              </div>
            </div>
            <div className="section section3">
              <Link to="/Question">
                <H2>Find Your Own Style!</H2>
              </Link>
            </div>
            <div className="section section4">
              <RowWrapper>
                <Article>
                  <Logo />
                </Article>
                <Article>
                  <H3>ABOUT US</H3>
                  <H3> </H3>
                  <H3>By. JungMin You</H3>
                </Article>
              </RowWrapper>
            </div>
          </div>
        );
      }}
    />
  );
};

import React, { useState } from "react";
import styled from "styled-components";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "../css/FullPage.css";
import "../css/override.css";
import { Link } from "react-router-dom";
import Q1 from "../../components/Questions/Q1";
import Q2 from "../../components/Questions/Q2";
import Q3 from "../../components/Questions/Q3";
import Q4 from "../../components/Questions/Q4";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: transparent;
  background-repeat: no-repeat;
  opacity: ${(props) => props.opa};
  border-radius: 16px;
  @media (max-width: 420px) {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    background-color: transparent;
    border-radius: 16px;
  }
`;

const Article = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3px;
  min-height: 20%;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 8px;
  transition-duration: 0.5s;
  cursor: pointer;
  :hover {
    transition-duration: 0.5s;
    width: 40%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    span {
      transition-duration: 0.5s;
      color: #fff;
      text-shadow: 2px 2px #000;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    :hover {
      transition-duration: 0.5s;
      width: 80%;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 16px;
      span {
        transition-duration: 0.5s;
        color: #fff;
        text-shadow: 2px 2px #000;
      }
    }
  }
`;

const SubmitArticle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3px;
  min-height: 20%;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 8px;
  transition-duration: 0.5s;
  cursor: pointer;
  :hover {
    transition-duration: 0.5s;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    span {
      transition-duration: 0.5s;
      color: #fff;
      text-shadow: 2px 2px #000;
    }
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3px;
  min-height: 20%;
  text-align: center;
  @media (max-width: 420px) {
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
`;

const ButtonSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: 200;
  font-size: 12px;
  color: black;
  padding: 5px 20px;
  border: 1px solid #777777;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #999;
    color: #fff;
  }
`;

const BigSpan = styled.span`
  margin: 10px 0px;
  display: block;
  padding: 10px;
  font-weight: 200;
  font-size: 24px;
  color: black;
  cursor: pointer;
`;

const LittleSpan = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: 200;
  font-size: 14px;
  color: black;
  padding: 5px 20px;
  cursor: pointer;
`;

const Form = styled.form``;

export default () => {
  const [mode, setMode] = useState("Prepare");
  const [theme, setTheme] = useState("Normal");
  const [QNumber, setQNumber] = useState(0);
  const [bgColor1, setBgColor1] = useState("transparent");
  const [bgColor2, setBgColor2] = useState(bgColor1);
  const [opa, setOpa] = useState(1);

  const [Q1Answer, setQ1Answer] = useState("N");
  const [Q2Answer, setQ2Answer] = useState("N");
  const [Q3Answer, setQ3Answer] = useState("N");
  const [Q4Answer, setQ4Answer] = useState("N");

  const QList = [
    "원하는 베이스차를 선택해주세요",
    "원하는 향(flavor)을 선택해주세요",
    "원하는 향의 농도를 선택해주세요",
    "4",
  ];
  const QSubList = [
    ["홍차", "우롱차", "백차", "녹차", "라벤더차", "히비스커스차"],
    ["시트러스", "복숭아"],
    ["깊게", "보통", "약하게"],
    [""],
    [
      ["PALETTEA Large(150g)x1 + PALETTEA 12T/3g", "155,000won(무료배송)"],
      ["PALETTEA Large(150g)x1 + PALETTEA 12T/3g", "155,000won(무료배송)"],
      ["PALETTEA Large(150g)x1 + PALETTEA 12T/3g", "155,000won(무료배송)"],
      ["PALETTEA Large(150g)x1 + PALETTEA 12T/3g", "155,000won(무료배송)"],
      ["PALETTEA Large(150g)x1 + PALETTEA 12T/3g", "155,000won(무료배송)"],
      ["PALETTEA Large(150g)x1 + PALETTEA 12T/3g", "155,000won(무료배송)"],
    ],
  ];

  const Q = [];

  const Qdata = [];

  return (
    <ReactFullpage
      scrollOverflow={true}
      sectionsColor={["#F3F3F3"]}
      slidesNavigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div
              className="section Qsection1"
              style={{
                // background: `linear-gradient( ${bgColor1}, ${bgColor1}, ${bgColor2},  #000)`,
                // background: `-webkit-linear-gradient( ${bgColor1}, ${bgColor1}, ${bgColor2}, #000)`,
                backgroundColor: `${bgColor1}`,
                opacity: `${opa}`,
                WebkitTransitionDuration: "1s",
                transitionDuration: "1s",
                flex: 1,
                resizeMode: "stretch",
                backgroundSize: "contain",
              }}
            >
              <Wrapper>
                {mode === "Prepare" && (
                  <Article
                    onClick={() => {
                      setMode("Question");
                      fullpageApi.fitToSection();
                    }}
                  >
                    <LittleSpan>Let me find your own style</LittleSpan>
                    <BigSpan>START TO FIND</BigSpan>
                  </Article>
                )}

                {mode === "Submit" && (
                  <Link to="/Product">
                    <SubmitArticle>
                      <BigSpan>Submit Complete</BigSpan>
                      <LittleSpan>Let's see your own style!</LittleSpan>
                    </SubmitArticle>
                  </Link>
                )}
                <Form>
                  {mode === "Question" && (
                    <QuestionContainer>
                      {QNumber === 0 && (
                        <Q1
                          bgColor1={bgColor1}
                          setBgColor1={setBgColor1}
                          Q1Answer={Q1Answer}
                          setQ1Answer={setQ1Answer}
                        />
                      )}
                      {QNumber === 1 && (
                        <Q2
                          bgColor2={bgColor2}
                          setBgColor2={setBgColor2}
                          Q2Answer={Q2Answer}
                          setQ2Answer={setQ2Answer}
                        />
                      )}
                      {QNumber === 2 && (
                        <Q3
                          Q3Answer={Q3Answer}
                          setQ3Answer={setQ3Answer}
                          opa={opa}
                          setOpa={setOpa}
                        />
                      )}
                      {QNumber === 3 && (
                        <Q4
                          Q4Answer={Q4Answer}
                          setQ4Answer={setQ4Answer}
                          opa={opa}
                          setOpa={setOpa}
                        />
                      )}
                      <ButtonContainer>
                        {QNumber !== 0 && (
                          <ButtonSpan
                            onClick={() => {
                              fullpageApi.moveSlideLeft();
                              setQNumber(QNumber - 1);
                            }}
                          >
                            prev
                          </ButtonSpan>
                        )}

                        {QNumber !== QList.length - 1 ? (
                          <ButtonSpan
                            onClick={() => {
                              fullpageApi.moveSlideRight();
                              setQNumber(QNumber + 1);
                            }}
                          >
                            next
                          </ButtonSpan>
                        ) : (
                          <ButtonSpan
                            onClick={() => {
                              console.log(
                                Q1Answer,
                                Q2Answer,
                                Q3Answer,
                                Q4Answer
                              );
                              if (
                                Q1Answer !== "N" &&
                                Q2Answer !== "N" &&
                                Q3Answer !== "N" &&
                                Q4Answer !== "N"
                              ) {
                                fullpageApi.moveSectionDown();
                                setMode("Submit");
                              } else {
                                alert("모든 항목을 체크해 주세요!");
                              }
                            }}
                          >
                            submit
                          </ButtonSpan>
                        )}
                      </ButtonContainer>
                    </QuestionContainer>
                  )}
                </Form>
              </Wrapper>
            </div>
          </div>
        );
      }}
    />
  );
};

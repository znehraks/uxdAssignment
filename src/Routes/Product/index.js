import React from "react";
import styled from "styled-components";
import coat2 from "../../components/Questions/imgs/coat2.png";
import coat3 from "../../components/Questions/imgs/coat3.png";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const Article = styled.div`
  width: 50%;
  min-height: 33%;
  padding: 30px 0px;
  text-align: center;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  :first-child {
    margin-top: 110px;
  }
  :last-child {
    margin-bottom: 80px;
    div {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 420px) {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 55%;
  margin: 10px 0px;
  img {
    width: 90%;
  }
  @media (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    margin: 10px 0px;
    img {
      width: 110%;
    }
  }
`;

const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0px 80px;
`;

const BigSpan = styled.span`
  margin-top: 20px;
  font-weight: 700;
  font-size: 32px;
  color: white;
  @media (max-width: 420px) {
    margin-top: 10px;
    font-weight: 700;
    font-size: 20px;
    color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const LittleSpan = styled.span`
  display: block;
  color: #ddd;
  font-weight: 200;
  font-size: 18px;
  @media (max-width: 420px) {
    visibility: hidden;
    font-size: 0px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Article>
        <ImageContainer>
          <img
            src="https://image.msscdn.net/images/goods_img/20200513/1444035/1444035_1_500.jpg"
            alt="tealeaf"
          />
        </ImageContainer>
        <SpanContainer>
          <BigSpan>Double Coat</BigSpan>
          <LittleSpan>LIBERCLASSY</LittleSpan>
          <LittleSpan>wool overfit wide lapel double coat</LittleSpan>
          <BigSpan>LongSleeve Shirt</BigSpan>
          <LittleSpan>LIBERCLASSY</LittleSpan>
          <LittleSpan>longSleeve vertical pattern shirt</LittleSpan>
          <BigSpan>Black SlacksPants</BigSpan>
          <LittleSpan>LIBERCLASSY</LittleSpan>
          <LittleSpan>black waist banding slackspants </LittleSpan>
          <BigSpan>Black Lether shoes</BigSpan>
          <LittleSpan>LIBERCLASSY</LittleSpan>
          <LittleSpan>black lether polished shoes</LittleSpan>
        </SpanContainer>
      </Article>
      <Article>
        <ImageContainer>
          <img src={coat2} alt="tealeaf" />
        </ImageContainer>
        <SpanContainer>
          <BigSpan>Double CheckPattern Coat</BigSpan>
          <LittleSpan>ipsem Lorem</LittleSpan>
          <LittleSpan>ipsem Loremipsem Loremipsem Lorem</LittleSpan>
          <BigSpan>Long Sleeve turtleneck </BigSpan>
          <LittleSpan>ipsem Lorem</LittleSpan>
          <LittleSpan>ipsem Loremipsem Loremipsem Lorem</LittleSpan>
          <BigSpan>wide cargo pants</BigSpan>
          <LittleSpan>ipsem Lorem</LittleSpan>
          <LittleSpan>ipsem Loremipsem Loremipsem Lorem</LittleSpan>
          <BigSpan>white sporty shoes</BigSpan>
          <LittleSpan>ipsem Lorem</LittleSpan>
          <LittleSpan>ipsem Loremipsem Loremipsem Lorem</LittleSpan>
        </SpanContainer>
      </Article>
      <Article>
        <ImageContainer>
          <img src={coat3} alt="tealeaf" />
        </ImageContainer>
        <SpanContainer>
          <BigSpan>khaki Sweat Shirt</BigSpan>
          <LittleSpan>ipsem Lorem</LittleSpan>
          <LittleSpan>ipsem Loremipsem Loremipsem Lorem</LittleSpan>
          <BigSpan>Cool gray wide pants</BigSpan>
          <LittleSpan>ipsem Lorem</LittleSpan>
          <LittleSpan>ipsem Loremipsem Loremipsem Lorem</LittleSpan>
          <BigSpan>Black & White Sneakers</BigSpan>
          <LittleSpan>ipsem Lorem</LittleSpan>
          <LittleSpan>ipsem Loremipsem Loremipsem Lorem</LittleSpan>
          <BigSpan>Neon yellow beanie</BigSpan>
          <LittleSpan>ipsem Lorem</LittleSpan>
          <LittleSpan>ipsem Loremipsem Loremipsem Lorem</LittleSpan>
        </SpanContainer>
      </Article>
    </Wrapper>
  );
};

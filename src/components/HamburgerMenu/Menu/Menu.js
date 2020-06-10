import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuList = styled(Link)`
  display: flex;
  flex-direction: column;
  :hover {
    background-color: #eeeeee;
    color: #000;
  }
`;

const SubMenuList = styled(Link)`
  display: flex;
  flex-direction: column;
  :hover {
    background-color: #eeeeee;
    color: #000;
  }
`;

const RedSpan = styled.span`
  color: red;
`;

const SmallSpan = styled.span`
  font-size: 1rem;
`;

const NormalSpan = styled.span``;

const VerySmallSpan = styled.span`
  padding: 0;
  font-size: 0.8rem;
`;

const TinySpan = styled.span`
  font-size: 0.5rem;
`;

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu
      open={open}
      setOpen={setOpen}
      aria-hidden={!isHidden}
      {...props}
    >
      <MenuList
        onClick={() => setOpen(false)}
        to="/Question"
        tabIndex={tabIndex}
      >
        <RedSpan>CURATING</RedSpan>
        <SmallSpan>CUSTOMIZE-</SmallSpan>
        <SmallSpan>OWN MY STYLE</SmallSpan>
      </MenuList>
      <MenuList
        onClick={() => setOpen(false)}
        to="/AIQuestion"
        tabIndex={tabIndex}
      >
        <RedSpan>RANKING</RedSpan>
        <SmallSpan>RECOMMEND-</SmallSpan>
        <SmallSpan>CLOTHES CUSTOMIZE</SmallSpan>
      </MenuList>
      <MenuList
        onClick={() => setOpen(false)}
        to="/AboutUs"
        tabIndex={tabIndex}
      >
        <NormalSpan>TOP</NormalSpan>
      </MenuList>
      <MenuList
        onClick={() => setOpen(false)}
        to="/AboutUs"
        tabIndex={tabIndex}
      >
        <NormalSpan>BOTTOM</NormalSpan>
      </MenuList>
      <MenuList
        onClick={() => setOpen(false)}
        to="/AboutUs"
        tabIndex={tabIndex}
      >
        <NormalSpan>OUTER</NormalSpan>
      </MenuList>
      <MenuList
        onClick={() => setOpen(false)}
        to="/AboutUs"
        tabIndex={tabIndex}
      >
        <NormalSpan>ACCESSORY</NormalSpan>
      </MenuList>
      <MenuList
        onClick={() => setOpen(false)}
        to="/AboutUs"
        tabIndex={tabIndex}
      >
        <NormalSpan>SHOES</NormalSpan>
      </MenuList>
      <SubMenuList onClick={() => setOpen(false)} to="/O" tabIndex={tabIndex}>
        <VerySmallSpan>주문 조회하기</VerySmallSpan>
      </SubMenuList>
      <SubMenuList
        onClick={() => setOpen(false)}
        to="/Auth"
        tabIndex={tabIndex}
      >
        <VerySmallSpan>로그인</VerySmallSpan>
      </SubMenuList>
      <SubMenuList onClick={() => setOpen(false)} to="/" tabIndex={tabIndex}>
        <TinySpan>KR | EN | FR</TinySpan>
      </SubMenuList>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

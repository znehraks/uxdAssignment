import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Logo, Login, Cart } from "./Icons";
import useInput from "../Hooks/useInput";
import { useOnClickOutside } from "../Hooks/useOnClickOutside";
import { Burger, Menu } from "./HamburgerMenu";

const Header = styled.header`
  width: 100%;
  height: 11.5vh;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f3f3f3;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin: 15px auto 0 30px;
    text-align: left;
  }
  &:last-child {
    margin: 16px 30px 0 auto;
    text-align: right;
  }
  @media (max-width: 420px) {
    &:first-child {
      margin: 0;
      text-align: left;
      position: relative;
      top: -2px;
    }
    &:last-child {
      margin-right: 8px;
      text-align: right;
    }
    :nth-child(2) {
      margin-right: 36px;
      position: relative;
      right: 32px;
    }
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 10px;
    margin-top: 15px;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const [show, setShow] = useState("N");
  const loading = false;
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  if (loading) return "";
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </HeaderColumn>
        <HeaderColumn>
          <Link onClick={() => setShow("N")} to="/">
            <Logo width={240} />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink onClick={() => setShow("N")} to="/Auth">
            <Login />
          </HeaderLink>
          <HeaderLink onClick={() => setShow("N")} to="/MyPage">
            <Cart />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});

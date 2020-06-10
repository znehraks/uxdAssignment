import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  left: 100;
  top: 100;
  min-width: 900px;
  background-color: red;
  -webkit-transition: min-width 0.5s;
  transition: min-width 0.5s;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  z-index: 99999;
`;

const MenuList = styled.div`
  height: 20%;
  width: 80%;
  background-color: blue;
`;

export default ({ show, setShow }) => {
  return (
    <>
      {show === "Y" && (
        <Wrapper>
          <MenuList>
            <h1>fu</h1>
          </MenuList>
          <MenuList>
            <h1>fu</h1>
          </MenuList>
          <MenuList>
            <h1>fu</h1>
          </MenuList>
          <MenuList>
            <h1>fu</h1>
          </MenuList>
          <MenuList>
            <h1>fu</h1>
          </MenuList>
          <MenuList>
            <h1>fu</h1>
          </MenuList>
        </Wrapper>
      )}
    </>
  );
};

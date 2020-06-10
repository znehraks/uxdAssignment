import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-top: 10px;
  position: relative;
  bottom: 0;
  left: 0;
  font-weight: 600;
  font-size: 12px;
  z-index: 1;
  @media (max-width: 400px) {
    visibility: hidden;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  text-align: center;
`;

const ListItem = styled.li`
  margin: 40px 16px 40px 0px;
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const CopyRight = styled.span`
  color: ${props => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <FooterWrapper>
      <List>
        <ListItem>
          <Link href="#">about us</Link>
        </ListItem>
        <ListItem>
          <Link href="#">support</Link>
        </ListItem>
        <ListItem>
          <Link href="#">press</Link>
        </ListItem>
        <ListItem>
          <Link href="#">api</Link>
        </ListItem>
        <ListItem>
          <Link href="#">jobs</Link>
        </ListItem>
        <ListItem>
          <Link href="#">privacy</Link>
        </ListItem>
        <ListItem>
          <Link href="#">terms</Link>
        </ListItem>
        <ListItem>
          <Link href="#">directory</Link>
        </ListItem>
        <ListItem>
          <Link href="#">profiles</Link>
        </ListItem>
        <ListItem>
          <Link href="#">hashtags</Link>
        </ListItem>
        <ListItem>
          <Link href="#">language</Link>
        </ListItem>
      </List>
      <CopyRight>Mollyyei {new Date().getFullYear()} &copy;</CopyRight>
    </FooterWrapper>
  </Footer>
);

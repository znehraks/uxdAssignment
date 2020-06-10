import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import GlobalStyles from "./Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  const isLoggedIn = true;

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            {isLoggedIn && <Header />}
            <Wrapper>
              <Routes isLoggedIn={isLoggedIn} />
            </Wrapper>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};

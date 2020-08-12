import * as React from 'react';
import App from 'next/app';
import { getTokens } from '@kiwicom/orbit-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Trebuchet MS';
  }
`;

const tokens = getTokens();

class MyApp extends App {
  componentDidMount() {
    if (!window.GA_INITIALIZED && process.env.NODE_ENV !== 'development') {
      //initGA();
      window.GA_INITIALIZED = true;
    }
    // logPageView();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={{ orbit: tokens }}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;

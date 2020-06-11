import React from "react";
import App, { Container } from "next/app";
import { AnimatePresence } from "framer-motion";
import FadeInAnimation from '../animations/FadeInAnimation';

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AnimatePresence>
        <FadeInAnimation>
          <Component {...pageProps} />;
        </FadeInAnimation>
      </AnimatePresence>
    );
  }
}

export default MyApp;

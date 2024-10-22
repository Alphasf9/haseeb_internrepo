/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/section";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Mohd Haseeb Ali",
  title: "MERN stack developer ",
  email: "developerhaseeb1234@gmail.com",
  gitHub: "https://github.com/Alphasf9",
  instagram: "https://www.instagram.com/mohdhaseeb4909/",
  linkedIn: "https://www.linkedin.com/in/mohd-haseeb-ali-47387a224/",
  medium: "",
  twitter: "https://x.com/Dipomacy9114742",
  youTube: "https://www.youtube.com/@mohdhaseebali7078",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

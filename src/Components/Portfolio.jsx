/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mern.png";

const imageAltText = "showcase of skill set of a mern developer";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " FUll stack ecommerce application 🎉",
    description:
      "A MERN stack e-commerce application features user authentication, product management, shopping cart functionality, and payment processing in a full-stack setup.",
    url: "https://github.com/Alphasf9/fullStackBackhendApplication"
  },
  {
    title: "A background colour changer",
    description:
      "The background color changes on click by toggling the state using React's `useState` to update the component's style..",
    url: "https://backgroundcolourchanger.vercel.app/",
  },
  {
    title: "Youtube Backend Application",
    description:
      "I have developed the complete backend for a YouTube application, handling video uploads, user authentication, and data management.",
    url: "https://github.com/Alphasf9/fullStackBackhendApplication",
  },
  {
    title: "Password Generator",
    description:
      "I have developed a password generator application that creates secure, random passwords based on user-defined criteria..",
    url: "https://react-password-generator-flame.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

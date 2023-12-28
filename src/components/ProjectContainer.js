import React from "react";
import Project from "../components/Project";
import { Element } from "react-scroll";
import "./ProjectContainer.css";

const ProjectContainer = () => {
  const projects = [
    {
      name: "Project 1",
      img: "https://free4kwallpapers.com/uploads/originals/2023/03/06/burning-sports-car.-neon-explosion-wallpaper_.jpg",
      title: "CRUD",
      desc: "CRUD is the acronym for CREATE, READ, UPDATE and DELETE. These terms describe the four essential operations for creating and managing persistent data elements, mainly in relational and NoSQL databases.",
      link: "www.google.com",
    },

    {
      name: "Project 2",
      img: "https://free4kwallpapers.com/uploads/wallpaper/train-neon-synthwave-buildings-wallpaper-1024x768-wallpaper.jpg",
      title: "Restaurant Website",
      desc: "The interface you build in this project should allow customers to select from various options, including food, themes, duration, quick delivery, seating, bookings, etc. It would help if you employed a variety of HTML, React, and CSS tools, such as radio buttons, checkboxes, action buttons, etc., to construct a restaurant website.",
      link: "www.google.com",
    },

    {
      name: "Project 3",
      img: "https://free4kwallpapers.com/uploads/wallpaper/neon-girl-digital-art-wallpaper-1024x768-wallpaper.jpg",
      title: "Portfolio Website ",
desc: "An essential portfolio website can be created by custom coding using HTML, CSS, and JavaScript. Besides the technical skills, working on this project will help you establish credibility and trust with potential employers or clients by showcasing that you have expertise.",
      link: "www.google.com",
    },

    {
      name: "Project 4",
      img: "https://free4kwallpapers.com/uploads/wallpaper/neon-reflection-wallpaper-1024x768-wallpaper.jpg",
      title: "To-do List App",
      desc: "A to-do list application is a valuable tool that can help individuals and teams stay organized and on track with their tasks and responsibilities. Developing a to-do list application involves several key steps: planning, design, development, integration, testing, launch, and maintenance.",
      link: "www.google.com",
    },

    {
      name: "Project 5",
      img: "https://free4kwallpapers.com/uploads/wallpaper/pink-neon-street-wallpaper-1024x768-wallpaper.jpg",
      title: "Temperature Converter Website ",
      desc:"The measuring units of the temperature recorded in a particular unit can be converted with a temperature converter, necessitating you to build a dropdown menu with temperature scales. You can also more functionality to the website by providing some other converters.",      
      link: "www.google.com"
    },

    {
      name: "Project 6",
      img: "https://free4kwallpapers.com/uploads/wallpaper/neon-flair-cafe-wallpaper-1024x768-wallpaper.jpg",
      title: "Quiz App",
      desc: "Creating a quiz app is a fun yet challenging project that can help you improve your web development, front-end development, and user experience design skills all at once. This project aims to create a web application that allows users to take quizzes and receive feedback on their performance. ",
      link: "www.google.com",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>PROJECTS ACCOMPLISHED</p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              name={project.name}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;

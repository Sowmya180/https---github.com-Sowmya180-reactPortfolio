import React from 'react'
import Header from "./components/header";
import TopContainer from './components/TopContainer';
import SkillContainer from './components/SkillContainer';
import '@mui/material/styles';
import ProjectContainer from './components/ProjectContainer';
import './App.css'
import ExperienceContainer from './components/ExperienceContainer';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
    <Header />
    <TopContainer />
    <SkillContainer />
    <ProjectContainer />
    <ExperienceContainer />
    <Contact />
    </div>
  )
}
  
export default App

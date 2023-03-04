// Imports
import { useState } from 'react'
import './App.scss'

// Components
import Header from './components/header/header'
import Project, { ProjectProps } from './components/project/project'

// Images
import githubIcon from './assets/github.png'
import discordIcon from './assets/discord.png'
import emailIcon from './assets/email.png'
import profilePicture from './assets/profilePicture.png'

import { Projects } from './projects'

function App() {

  const [projects, setProjects] = useState<ProjectProps[]>(Projects)

  return (
    <div className="content">
      <Header />
      <div className="areas">
        <div className="left">
          <div className="about">
            <span className="title">About me</span>
            <div className="content">
              <img src={profilePicture} alt="" className="picture" draggable={false} />
              <span className="text"> My name is <span>Marcos Douglas</span> and I'm currently 18 years old, I live in Brazil and I want to pursue a career as a <span>programmer</span> professionally.</span>
            </div>
            <span className="title">Skills</span>
            <div className="skills">
              <div className="master">
                <p>
                  Master
                </p>
                <div className='items'>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
              </div>
              <div className="studying">
                <p>
                  Studying
                </p>
                <div className="items">
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
              </div>
            </div>
            <div className="contact">
              <a href='https://github.com/SrDouglax' target='_blank' className="github contact">
                <img src={githubIcon} alt="github-icon" className="contact-icon" />
                <span className="text">GitHub</span>
              </a>
              <a href='https://discord.com/users/522054522445758465' target='_blank' className="discord contact">
                <img src={discordIcon} alt="discord-icon" className="contact-icon" />
                <span className="text">Discord</span>
              </a>
              <a href='mailto:contactarodouglas@gmail.com' target='_blank' className="email contact">
                <img src={emailIcon} alt="email-icon" className="contact-icon" />
                <span className="text">Send Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="myprojects">
            <span className="title">My projects</span>
          </div>
          <div className="projects">
            {projects.map(({ title, description, status, picture, projectURL, github, tags }) => (
              <Project title={title} description={description} status={status} picture={picture} projectURL={projectURL} github={github} tags={tags} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

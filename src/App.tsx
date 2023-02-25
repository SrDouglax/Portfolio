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
import braseIcon from './assets/BraseIcon.png'

function App() {

  const [projects, setProjects] = useState<ProjectProps[]>([
    {
      title: 'Brase', description: 'A webapp created with ReactJs', status: 'In development', picture: braseIcon, projectURL: 'https://brese-indev.web.app', tags: [
        { docs: 'https://reactjs.org/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
        { docs: 'https://firebase.google.com/', iconURL: 'https://i.pinimg.com/originals/07/ca/4a/07ca4afbde70ce0c995b3f63e9c04ceb.png' },
        { docs: 'https://sass-lang.com/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' },
      ]
    },
    {
      title: 'Brase', description: 'A webapp created with ReactJs', status: 'In development', picture: braseIcon, projectURL: 'https://brese-indev.web.app', tags: [
        { docs: 'https://reactjs.org/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
        { docs: 'https://firebase.google.com/', iconURL: 'https://i.pinimg.com/originals/07/ca/4a/07ca4afbde70ce0c995b3f63e9c04ceb.png' },
        { docs: 'https://sass-lang.com/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' },
      ]
    },
    {
      title: 'Brase', description: 'A webapp created with ReactJs', status: 'In development', picture: braseIcon, projectURL: 'https://brese-indev.web.app', tags: [
        { docs: 'https://reactjs.org/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
        { docs: 'https://firebase.google.com/', iconURL: 'https://i.pinimg.com/originals/07/ca/4a/07ca4afbde70ce0c995b3f63e9c04ceb.png' },
        { docs: 'https://sass-lang.com/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' },
      ]
    },
    {
      title: 'Brase', description: 'A webapp created with ReactJs', status: 'In development', picture: braseIcon, projectURL: 'https://brese-indev.web.app', tags: [
        { docs: 'https://reactjs.org/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
        { docs: 'https://firebase.google.com/', iconURL: 'https://i.pinimg.com/originals/07/ca/4a/07ca4afbde70ce0c995b3f63e9c04ceb.png' },
        { docs: 'https://sass-lang.com/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' },
      ]
    },
    {
      title: 'Brase', description: 'A webapp created with ReactJs', status: 'In development', picture: braseIcon, projectURL: 'https://brese-indev.web.app', tags: [
        { docs: 'https://reactjs.org/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
        { docs: 'https://firebase.google.com/', iconURL: 'https://i.pinimg.com/originals/07/ca/4a/07ca4afbde70ce0c995b3f63e9c04ceb.png' },
        { docs: 'https://sass-lang.com/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' },
      ]
    },
    {
      title: 'Brase', description: 'A webapp created with ReactJs', status: 'In development', picture: braseIcon, projectURL: 'https://brese-indev.web.app', tags: [
        { docs: 'https://reactjs.org/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
        { docs: 'https://firebase.google.com/', iconURL: 'https://i.pinimg.com/originals/07/ca/4a/07ca4afbde70ce0c995b3f63e9c04ceb.png' },
        { docs: 'https://sass-lang.com/', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' },
      ]
    },
  ])

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
            {projects.map(({ title, description, status, picture, projectURL, tags }) => (
              <Project title={title} description={description} status={status} picture={picture} projectURL={projectURL} tags={tags} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

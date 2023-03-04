import './style.scss'

// Images
import openLink from '../../assets/openLink.webp'

export interface ProjectProps {
  title: string,
  description: string,
  status: string,
  picture: string,
  projectURL: string,
  github: string,
  tags: Array<{
    docs: string,
    iconURL: string,
  }>
}

function Project({ title, description, status, picture, projectURL, github, tags }: ProjectProps) {
  return (
    <div className="project">
      <div className="inline">
        <img src={picture} alt="" className="project-image" />
        <div className="status">
          <span className="text">{status}</span>
        </div>
      </div>
      <span className="title">
        {title}
        <a href={github} target='_blank'>
          <span className="material-symbols-outlined">code_blocks</span>
        </a>
      </span>
      <span className="description">{description}</span>
      <div className="tags">
        <a className="open" href={projectURL} target='_blank'>
          <img className="openImg" src={openLink} alt="" />
        </a>
        {tags.map(({ docs, iconURL }) => (
          <a href={docs} style={{ textDecoration: 'none' }} target='_blank' >
            <img src={iconURL} alt={docs} />
          </a>
        ))}
      </div>
    </div >
  )
}

export default Project

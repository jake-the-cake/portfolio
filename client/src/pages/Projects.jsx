import React from 'react'
import SetTitles from '../scripts/SetTitles'
import { clientProjects, schoolProjects } from '../storage'

const Projects = (props) => {
	SetTitles(props.title)

	const projectList = [...clientProjects, ...schoolProjects]

	return (
		<div className='project-list'>
			{
				projectList.map((project) => {
					return (
						<div className='project-card' key={project.slug}>
							<div className="project-card-image">{project.screenShot ? <img src={project.screenShot} alt="" width='260px' height='260px' /> : 'no image'}</div>
							{project.name}
						</div>
					)
				})
			}
		</div>
	)
}

export default Projects
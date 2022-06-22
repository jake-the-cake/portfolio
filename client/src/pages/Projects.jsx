import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SetTitles from '../scripts/SetTitles'
import { myProjects, schoolProjects } from '../storage'

const Projects = (props) => {
	SetTitles(props.title)

	// const projectList = [...clientProjects, ...schoolProjects]

	const [projectList, setProjectList] = useState([])
	let currentProjects = []

	const filterDisplay = () => {
		const filterFunction = (filterBy) => {
			const filteredProjects = []
			myProjects.forEach((project) => {
				project.filters.forEach((filter) => {
					if (filter === filterBy) {
						filteredProjects.push(project)
					}
				})
			})
			return filteredProjects
		}

		switch (props.filter) {		
			case 'school':
				currentProjects = [...schoolProjects]
				break		
			case 'client':
				currentProjects = filterFunction('client')
				break		
			case 'freeware':
				currentProjects = filterFunction('freeware')
				break
			default:
				currentProjects = [...myProjects, ...schoolProjects]
				break
		}
	}
	
	
	useEffect(() => {
		props.filter
			? filterDisplay()
			: console.log('no filter')
		setProjectList(currentProjects)
	}, [props.filter])
	
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
			<Outlet />
		</div>
	)
}

export default Projects
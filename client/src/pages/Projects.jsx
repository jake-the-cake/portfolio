import { GitHub, Web } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import SetTitles from '../scripts/SetTitles'
import { myProjects, schoolProjects } from '../storage'


	


const Projects = (props) => {
	SetTitles(props.title)

	const [projectList, setProjectList] = useState([])
	let currentProjects = []

	const formatDescription = (lines) => {
		lines.forEach((line) => {
			console.log('there is data here')
		})
		return 'description being formatted...'
	}

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
		{ props.filter &&
			<div className="page-header">
				<div className="page-title"><Link className='text-dark text-decoration-none hover-title' to='/portfolio/projects'>Projects</Link></div>{props.filter !== 'all'  && 
				<>
				<div className="page-title-divider"></div>
				<div className="page-subtitle text-muted">{props.filter[0].toUpperCase() + props.filter.slice(1)}</div>
				</>
				}
			</div>
		}
			{
				projectList.map((project) => {
					return (
						<div className='project-card' key={project.slug}>
							<div className="project-card-image">{project.screenShot ? <img src={project.screenShot} alt="" /> : 'no image'}</div>
								<div className="project-card-title">{project.name}</div>
								<div className="project-card-body">{project.description ? formatDescription(project.description) : 'no description'}</div>
								<div className="project-card-links">
									<button><GitHub />View Git</button>
									<button><Web />View Page</button>
								</div>
							</div>
					)
				})
			}
			<Outlet />
		</div>
	)
}

export default Projects
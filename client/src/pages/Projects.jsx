import { GitHub, Web } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { handleButton } from '../scripts/projectModal'
import SetTitles from '../scripts/SetTitles'
import { myProjects, schoolProjects } from '../storage'


	


const Projects = (props) => {
	SetTitles(props.title)

	const [projectList, setProjectList] = useState([])
	let currentProjects = []

	const formatDescription = (lines) => {
		return (
			<>
				{
					lines.map((line,idx ) => {
						return (
							<p key={idx} className="project-card-line"><span className='me-3'></span>{line}</p>
						)
					})
				}
			</>
		)
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
				currentProjects = [...schoolProjects, ...myProjects]
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
							<div className="project-card-image">{project.screenShot ? <img src={project.screenShot} alt="" /> : <img src='/portfolio/images/comingsoon.png' alt="" />}</div>
								<div className="project-card-title">{project.name}</div>
								<div className="project-card-body">{project.description ? formatDescription(project.description) : 'no description'}</div>
								<div className="project-card-links">
									<button className='btn btn-info' onClick={()=>handleButton('git',project)}><GitHub />View Git</button>
									<button className='btn btn-primary' onClick={()=>handleButton('address',project)}><Web />Demo Page</button>
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
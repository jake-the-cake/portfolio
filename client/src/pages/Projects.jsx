import React from 'react'
import ProjectSlider from '../components/ProjectSlider'
import SetTitles from '../scripts/SetTitles'

const Projects = (props) => {
	SetTitles(props.title)

	return (
		<div>
			<ProjectSlider />
		</div>
	)
}

export default Projects
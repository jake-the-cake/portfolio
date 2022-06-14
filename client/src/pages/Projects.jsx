import React, { useState, useEffect } from 'react'
import SetTitles from '../scripts/SetTitles'

const Projects = (props) => {
	SetTitles(props.title)

	return (
		<div>Projects</div>
	)
}

export default Projects
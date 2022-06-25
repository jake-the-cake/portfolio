import React from 'react'
import styled from 'styled-components'
import Bio from '../components/Bio'
import { ProjectSlider } from '../components/ProjectSlider'
import SetTitles from '../scripts/SetTitles'
import { schoolProjects } from '../storage'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Home = (props) => {
	SetTitles(props.title)

	const sliderArray = [...schoolProjects]

	return (
		<Container>
			<Bio />
			<ProjectSlider arr={sliderArray} />			
		</Container>
	)
}

export default Home
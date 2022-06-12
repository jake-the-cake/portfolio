import React from 'react'
import styled from 'styled-components'
import Bio from '../components/Bio'
import ProjectSlider from '../components/ProjectSlider'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Home = () => {
	return (
		<Container>
			<Bio />
			<ProjectSlider />			
		</Container>
	)
}

export default Home
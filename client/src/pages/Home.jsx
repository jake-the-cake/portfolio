import React from 'react'
import styled from 'styled-components'
import Bio from '../components/Bio'
import ProjectSlider from '../components/ProjectSlider'

const Container = styled.div`
	background: rgba(0,0,0,.2);
	display: flex;
	flex-direction: column;
	// row-gap: 20px;
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
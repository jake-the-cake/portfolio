import React from 'react'
import styled from 'styled-components'
import ProjectSlider from '../components/ProjectSlider'

const Container = styled.div`
	background-color: red;
	display: flex;
	flex-direction: column;
	row-gap: 20px;
`

const Home = () => {
	return (
		<Container>
			<ProjectSlider />			
		</Container>
	)
}

export default Home
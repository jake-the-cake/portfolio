import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Bio from '../components/Bio'
import ProjectSlider from '../components/ProjectSlider'
import SetTitles from '../scripts/SetTitles'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Home = (props) => {
	SetTitles(props.title)

	return (
		<Container>
			<Bio />
			<ProjectSlider />			
		</Container>
	)
}

export default Home
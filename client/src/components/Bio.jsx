import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	column-gap: 20px;
`

const BioInfo = styled.div`
	background-color: rgba(255,255,255,.8);
	padding: 10px;
`
const BioVideo = styled.div`
	background-color: rgba(170,170,170,.6);
	padding: 10px;
`

const Bio = () => {
	return (
		<Container>
			<BioInfo>bio</BioInfo>
			<BioVideo>video</BioVideo>
		</Container>
	)
}

export default Bio
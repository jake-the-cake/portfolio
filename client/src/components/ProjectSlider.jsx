import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { schoolProjects } from '../storage'

const Container = styled.div`
	background-color: white;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	row-gap: 15px;
`

const SliderTitle = styled.div`
	display: flex;
	font-style: italic;
	justify-content: center;
	font-size: 12px;
`

const SliderWrapper = styled.div`
	display: flex;
	border: 1px solid rgba(0,0,0,.3);
	justify-content: space-between;
	column-gap: 15px;
	padding: 15px;
	position: relative;

	& > * {
		display: flex;
		justify-content: center;
	}
`

const LeftPreview = styled.div`
	margin: auto 0px auto 30px;
	
	img {
		width: 20vw;
		height: 20vw;
	}
`

const MainDisplay = styled.div`
	background-color: rgba(100,100,100,.1);
	position: relative;

	img {
		height: 40vw;
		width: 40vw;
	}

	@media only screen and (max-width: 550px) {
		margin: auto -30px;
		z-index: 10;
	}
`

const RightPreview = styled.div`
	margin: auto 30px auto 0px;

	img {
		width: 20vw;
		height: 20vw;
	}
`

const SlideLeft = styled.button`
	background-color: rgba(0,222,0,.3);
	opacity: .6;
	color: #090;
	border: none;
	outlineL none;
	border-radius: 50%;
	position: absolute;
	left: 10px;
	top: calc(50% - 15px);
`

const SlideRight = styled.button`
	background-color: rgba(0,222,0,.3);
	opacity: .6;
	border: none;
	color: #090;
	outlineL none;
	border-radius: 50%;
	position: absolute;
	right: 10px;
	top: calc(50% - 15px);
`


const ProjectSlider = () => {
	const [currentlyDisplayed, setCurrentlyDisplayed] = useState([])
	const sliderArray = []
	schoolProjects.forEach((project) => {
		sliderArray.push(project)
		})
		
	const handleClick = (direction) => {
		let movingItem
		sliderArray.forEach((item, index) => {
			sliderArray[index] = currentlyDisplayed[index]
		})
		switch (direction) {
			case 'left':
				movingItem = sliderArray[0]
				sliderArray.shift()
				sliderArray.push(movingItem)
				break
			case 'right':
				movingItem = sliderArray[sliderArray.length - 1]
				sliderArray.pop()
				sliderArray.unshift(movingItem)
				break
		}
		setCurrentlyDisplayed(sliderArray)
	}	

	const displayPreview = (index) => {
		if (currentlyDisplayed.length > 0) {
			return (
				<img src={currentlyDisplayed[index].screenShot} />
			)
			// return currentlyDisplayed[index].name
		}
	}

	useEffect(() => {
		setCurrentlyDisplayed(sliderArray)
	}, [])

	return (
		<Container>
			<SliderTitle>Browse my archived school projects...</SliderTitle>
			<SliderWrapper>
				<LeftPreview>{displayPreview(0)}</LeftPreview>
				<MainDisplay>{displayPreview(1)}</MainDisplay>
				<RightPreview>{displayPreview(2)}</RightPreview>
				<SlideLeft onClick={()=>handleClick('left')}><ArrowLeft /></SlideLeft>
				<SlideRight onClick={() => handleClick('right')}><ArrowRight /></SlideRight>
			</SliderWrapper>
		</Container>
	)
}

export default ProjectSlider

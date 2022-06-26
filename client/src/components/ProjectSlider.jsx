import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ArrowRight, GitHub, Web } from '@mui/icons-material'
import { myProjects, schoolProjects } from '../storage'
import { handleButton } from '../scripts/projectModal'

const Container = styled.div`
	background-color: #212529;
	color: #f8f9fa;
	padding: 25px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 25px;

	@media only screen and (max-width: 450px) {
		padding: 0px;
	}
`

const SliderTitle = styled.div`
	display: flex;
	font-style: italic;
	justify-content: center;
	font-size: 1.1em;
`

const SliderWrapper = styled.div`
	display: flex;
	background-color: white;
	box-shadow: 0px 4px 8px -2px #f8f9fa;
	justify-content: space-between;
	column-gap: 15px;
	padding: 15px;
	position: relative;
	max-width: 1100px;

	& > * {
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 700px) {
		column-gap: 10px;
		width: calc(100vw - 30px);
	}
`

const LeftPreview = styled.div`
	margin: auto 0px;
	max-width: 25vw;

	img {
		width: 250px;
		height: 250px;
		max-height: 20vw;
		max-width: 20vw;
	}
`

const MainOverlay = styled.div`
	position: absolute;
	bottom: 20px;
	display: flex;
	gap: 20px;
	opacity: 0%;
	transition: opactiy .5s linear;
	overflow: hidden;
	
	@media only screen and (max-width: 550px) {
		opacity: 100%;
		bottom: 0px;
		width: 100%;
		height: 100%;
	}
`

const MainDisplay = styled.div`
	background-color: rgba(100,100,100,.1);
	position: relative;

	img {
		width: 500px;
		height: 500px;
		max-height: 40vw;
		max-width: 40vw;
		box-shadow: 0px 4px 10px #333;
	}

	&:hover ${MainOverlay} {
		opacity: 100%;
	}

	@media only screen and (max-width: 550px) {
		margin: auto -30px;
		z-index: 10;
	}
`

const OverlayButton = styled.button`
	@media only screen and (max-width: 550px) {
		position: absolute;
		left: ${props => props.loc === 'left' ? '-30%' : 'auto'};
		right: ${props => props.loc === 'right' ? '-30%' : 'auto'};
		bottom: -25%;
		width: 60%;
		height: 60%;
		border-radius: 50%;
		padding-bottom: 20%;
		padding-top: 5%;
		padding-left: ${props => props.loc === 'left' ? '32%' : 'auto'};
		padding-right: ${props => props.loc === 'right' ? '32%' : 'auto'};
		font-size: .8em;
		display: flex;
		flex-direction: column;
		align-items: ${props => props.loc === 'left' ? 'start' : 'end'};
	}
`

const RightPreview = styled.div`
	margin: auto 0px;
	max-width: 25vw;

	img {
		width: 250px;
		height: 250px;
		max-height: 20vw;
		max-width: 20vw;
	}
`

const arrowStyles = `
	background-color: rgba(100,255,100,.6);
	opacity: .8;
	color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 3px 5px -1px #444;
	border: none;
	height: 40px;
	width: 40px;
	outline: none;
	border-radius: 50%;
	position: absolute;
	top: calc(50% - 15px);

	@media only screen and (max-width: 450px) {
		display: none;
	}
`

const SlideLeft = styled.button`
	left: -20px;
	${arrowStyles}
`

const SlideRight = styled.button`
	right: -20px;
	${arrowStyles}
`

export const ProjectSlider = (props) => {
	/*
		::: INIT
		--> Set state of slider to incoming array
	*/
	const [currentlyDisplayed, setCurrentlyDisplayed] = useState([])
	const sliderArray = [...props.arr]
	useEffect(() => {
		setCurrentlyDisplayed(sliderArray)
	}, [])	
	
	/*
		::: ACTION
		--> Copy the current display array into the manipulation array
		--> Copy first (left) or last (right) item into temp variable, then remove that item
		--> Add temp variable to beginning (right) or end (left)
		--> Set state of slider to manipulated array
	*/
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
			default:
				console.log('something')
		}
		setCurrentlyDisplayed(sliderArray)
	}	

	/*
		::: RENDER
		--> Take in index of current display array
		--> Return IMG tag with corresponding thumbnail
	*/
	const displayPreview = (index) => {
		if (currentlyDisplayed.length > 0) {
			return (
				<img src={currentlyDisplayed[index].screenShot} alt="" />
			)
		}
	}

	return (
		<Container>
			<SliderTitle>Browse my archived school projects...</SliderTitle>
			<SliderWrapper>
				<LeftPreview onClick={() => handleClick('right')}>{displayPreview(0)}</LeftPreview>
				<MainDisplay>
					{displayPreview(1)}
					<MainOverlay>
						<OverlayButton loc="left"  className='btn btn-info' onClick={()=>handleButton('git', currentlyDisplayed[1])}><GitHub /><span className='view-text'>View </span>Git</OverlayButton>
						<OverlayButton loc="right" className='btn btn-primary' onClick={()=>handleButton('address', currentlyDisplayed[1])}><Web /><span className='view-text'>Demo </span>Page</OverlayButton>
					</MainOverlay>
				</MainDisplay>
				<RightPreview onClick={()=>handleClick('left')}>{displayPreview(2)}</RightPreview>
				<SlideLeft onClick={()=>handleClick('left')}><ArrowLeft /></SlideLeft>
				<SlideRight onClick={() => handleClick('right')}><ArrowRight /></SlideRight>
			</SliderWrapper>
		</Container>
	)
}
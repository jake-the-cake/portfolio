import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ArrowRight, GitHub, Web } from '@mui/icons-material'
import { schoolProjects } from '../storage'

const Container = styled.div`
	background-color: white;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
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
	width: fit-content;
	max-width: 1100px;

	& > * {
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 700px) {
		column-gap: 10px;
		max-width: 95vw;
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
`

const MainDisplay = styled.div`
	background-color: rgba(100,100,100,.1);
	position: relative;

	img {
		width: 500px;
		height: 500px;
		max-height: 40vw;
		max-width: 40vw;
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
	border: none;
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
	box-shadow: 0px 3px 2px 0px #444;
	border: none;
	height: 30px;
	width: 30px;
	outline: none;
	border-radius: 50%;
	position: absolute;
	top: calc(50% - 15px);
`

const SlideLeft = styled.button`
	left: 10px;
	${arrowStyles}
`

const SlideRight = styled.button`
	right: 10px;
	${arrowStyles}
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
			default:
				console.log('something')
		}
		setCurrentlyDisplayed(sliderArray)
	}	

	const displayPreview = (index) => {
		if (currentlyDisplayed.length > 0) {
			return (
				<img src={currentlyDisplayed[index].screenShot} alt="" />
			)
		}
	}

	const openWindow = (modal, link) => {
		const windowFrame = document.createElement('iframe')
		windowFrame.src = link
		windowFrame.classList.add('demo-frame')
		setTimeout(()=>{windowFrame.classList.toggle('demo-fade-in')},30)
		modal.appendChild(windowFrame)
	}

	const handleButton = (link) => {
		if (link === 'address') {
			// create and open modal
			const previewWindow = document.createElement('div')
			previewWindow.classList.add('preview-start')
			setTimeout(()=>{
				previewWindow.classList.toggle('fade-in')
			},10)
			// open iframe
			openWindow(previewWindow, currentlyDisplayed[1][link])
			// click on gray to close modal
			previewWindow.addEventListener('click', () => {
				previewWindow.classList.toggle('fade-in')
				previewWindow.classList.toggle('fade-out')
				setTimeout(()=>{
					previewWindow.remove()
				},200)
			})
			// inject modal div into html
			document.body.appendChild(previewWindow)
		}
		else if (link === 'git') {
			window.open(currentlyDisplayed[1][link], "_blank");
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
				<MainDisplay>
					{displayPreview(1)}
					<MainOverlay>
						<OverlayButton onClick={()=>handleButton('git')}><GitHub />View Git</OverlayButton>
						<OverlayButton onClick={()=>handleButton('address')}><Web />View Page</OverlayButton>
					</MainOverlay>
				</MainDisplay>
				<RightPreview>{displayPreview(2)}</RightPreview>
				<SlideLeft onClick={()=>handleClick('left')}><ArrowLeft /></SlideLeft>
				<SlideRight onClick={() => handleClick('right')}><ArrowRight /></SlideRight>
			</SliderWrapper>
		</Container>
	)
}

export default ProjectSlider

import { Computer } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 20px;
	display: flex;
	max-width: 1100px;
	margin: 0px auto;
	justify-content: center;
	gap: 20px;
	flex-direction: column;
`

const BioInfo = styled.div`
	background-color: rgba(255,255,255,.9);
	border-radius: 5px;
	padding: 10px;
	display: flex;
	gap: 50px;
	flex: 1;

	@media only screen and (max-width: 650px) {
		flex-direction: column;
	}
`

const LeftBioInfo = styled.div`
	min-width: 300px;
`

const BioPhoto = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	width: 180px;
	height: 180px;
	border: 1px solid black;
	box-shadow: 0px 4px 10px #333;
	border-radius: 50%;
	background-image: url('/portfolio/images/bio-pic.jpg');
	background-size: 190px;
	background-position: bottom left;
	margin: 0px auto 30px;
`

const BioInfoText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const BioStat = styled.div`
	&.bio-stat-name {
		font-size: 16px;
		margin-bottom: 95px;
		font-weight: 700;
	}

	&.bio-sub-stat {
		font-size: 12px;
	}

	&.bio-lang {
		font-size: 18px;
	}

	&.shift-right {
		margin-right -20px;
	}

	&.z-10 {
		position: relative;
		z-index: 10;
	}
`

const BioStatLine = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 15px;
	width: 100%;

	&.language-box {
		border: 1px solid rgba(0,0,0,.2);
		padding: 10px;
		margin: auto;
		margin-top: -1px;
		box-shadow: 0px 2px 12px #333;
	}
`

const BioStatIcon = styled.div`
	width: 40px;
	height: 40px;
	background: url(${props => props.image ? props.image : '/portfolio/logo192.png'}) center center no-repeat;
	background-size: contain;
`

const RightBioInfo = styled.div`
	min-width: 350px;
	font-size: .8em;
	background-color: rgba(0,255,0,.1);
	box-shadow: 0px 2px 12px #333;
	padding: 15px;
`

const BioVideo = styled.div`
	background-color: rgba(170,170,170,.6);
	padding: 10px;
	flex: 1;
`

const Bio = () => {
	const timedGreeting = () => {
		const timestamp = new Date()
		if (timestamp >= 0 && timestamp.getHours() < 12) {
			return 'Good morning!'
		}
		else if (timestamp >= 12 && timestamp < 6) {
			return 'Good afternoon!'
		}
		else {
			return 'Good evening!'
		}
	}

	return (
		<Container>
			<BioInfo>
				<LeftBioInfo>
					<BioPhoto>						
						<BioStat className="bio-stat-name text-center btn btn-success px-1 py-0 mt-2 shift-right">
							Jake Thompson
						</BioStat>
						<BioStat className="bio-sub-stat btn btn-danger py-0 px-1 mb-1 shift-right">37 years old</BioStat>
						<BioStat className="bio-sub-stat btn btn-warning py-0 px-1 shift-right">Ocean Township, NJ</BioStat>		
					</BioPhoto>
					<BioInfoText>
						<BioStat className='d-flex justify-content-between mt-2 align-items-center px-1 bg-info w-100 bio-lang z-10'><Computer style={{width:'26px',height:'23px'}} />Full Stack Web Developer</BioStat>
						<BioStatLine className='language-box'>
							<BioStatIcon image='/portfolio/images/html.svg' />
							<BioStatIcon image='/portfolio/images/css.svg' />
							<BioStatIcon image='/portfolio/images/js.svg' />
							<BioStatIcon image='/portfolio/images/bs.svg' />
							<BioStatIcon image='/portfolio/images/mongo.svg' />
							<BioStatIcon image='/portfolio/images/exp.svg' />
							<BioStatIcon image='/portfolio/images/react.svg' />
							<BioStatIcon image='/portfolio/images/node.svg' />
						</BioStatLine>
					</BioInfoText>
				</LeftBioInfo>
				<RightBioInfo>
					<p>
						{timedGreeting()} Thank you for visiting. I'm Jake Thompson, a student of Full Stack MERN Development, currently enrolled with MIT xPro.
					</p>
					<p>
						I first started playing around with HTML as a teenager back in the late 90s, and instantly fell in love. As I grew older, I continued to teach myself more in the background, while entering the workforce, which I also fell in love with. I worked my way up to management at a few of companies over the years, before I was sidelined by a torn biceps muscle. During the time off, I rediscovered my passion for coding, and have been hard at work to polish off my knowledge, and continue to learn more.
					</p>
					<p>
						Thanks again for taking the time to take a look at my work, which should hopefully do the rest of the required talking for me.
					</p>
					<div className='contact-table'>
						Links
					</div>
				</RightBioInfo>
			</BioInfo>
			<BioVideo>video</BioVideo>
		</Container>
	)
}

export default Bio
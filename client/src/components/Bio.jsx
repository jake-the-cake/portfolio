import { Computer } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	column-gap: 20px;
`

const BioInfo = styled.div`
	background-color: rgba(255,255,255,.9);
	border-radius: 5px;
	padding: 10px;
	display: flex;
	gap: 20px;
	flex: 1;
`

const LeftBioInfo = styled.div`
	max-width: 250px;
`

const BioPhoto = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	width: 180px;
	height: 180px;
	border-radius: 50%;
	background-image: url('/portfolio/images/bio-pic.jpg');
	background-size: 190px;
	background-position: bottom left;
	margin: 0px auto 10px;
`

const BioInfoText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const BioStat = styled.div`
	&.bio-stat-name {
		font-size: 16px;
		margin-bottom: 100px;
	}

	&.bio-sub-stat {
		font-size: 12px;
	}

	&.bio-lang {
		font-size: 12px;
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
	}
`

const BioStatIcon = styled.div`
	width: 40px;
	height: 40px;
	background: url(${props => props.image ? props.image : '/portfolio/logo192.png'}) center center no-repeat;
	background-size: contain;
`

const RightBioInfo = styled.div``

const BioVideo = styled.div`
	background-color: rgba(170,170,170,.6);
	padding: 10px;
	flex: 1;
`

const Bio = () => {
	return (
		<Container>
			<BioInfo>
				<LeftBioInfo>
					<BioPhoto>						
						<BioStat className="bio-stat-name text-center btn btn-success px-0 w-100 py-0">
							Jason "Jake" Thompson
						</BioStat>
						<BioStat className="bio-sub-stat btn btn-danger py-0 px-1 mb-1">37 yrs old</BioStat>
						<BioStat className="bio-sub-stat btn btn-warning py-0 px-1">Ocean Township, NJ</BioStat>		
					</BioPhoto>
					<BioInfoText>
						<BioStat className='d-flex justify-content-between mt-2 px-1 bg-info w-100 bio-lang'><Computer style={{width:'18px',height:'18px'}} />Full Stack Web Developer</BioStat>
						<BioStatLine className='language-box'>
							<BioStatIcon image='/portfolio/images/js.svg' />
							<BioStatIcon image='/portfolio/images/html.svg' />
							<BioStatIcon image='/portfolio/images/css.svg' />
							<BioStatIcon image='/portfolio/images/mongo.svg' />
							<BioStatIcon image='/portfolio/images/exp.svg' />
							<BioStatIcon image='/portfolio/images/react.svg' />
							<BioStatIcon image='/portfolio/images/node.svg' />
							<BioStatIcon image='/portfolio/images/py.svg' />
						</BioStatLine>
					</BioInfoText>
				</LeftBioInfo>
				<RightBioInfo>
					Written bio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tenetur minus nostrum fugit quos ad, labore alias quaerat. Repellat eos eveniet ullam cum itaque consequuntur quasi et expedita libero dolores?
				</RightBioInfo>
			</BioInfo>
			<BioVideo>video</BioVideo>
		</Container>
	)
}

export default Bio
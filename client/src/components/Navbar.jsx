import { SearchOutlined } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import logo from '../logo.svg'

let direction = 'right'
let rotation = 0

const rotationAmount = 5
const rotationOffset = 2

const Navbar = () => {
	const getPageTitle = () => {
		return 'home'
	}

	const [pageTitle, setPageTitle] = useState('')

	useEffect(() => {
		setPageTitle(`jakeThompson.portfolio("${getPageTitle()}")`)
	},[])

	const moveImage = (width, logo) => {
		if (direction === 'right') {
			if (logo.offsetLeft < width - 40) {
				logo.style.left = (logo.offsetLeft + rotationOffset) + 'px'
			}
			else {
				direction = 'left'
				logo.style.left = (logo.offsetLeft - rotationOffset) + 'px'
			}
			rotation += rotationAmount
		}
		else if (direction === 'left') {
			if (logo.offsetLeft > -20) {
				logo.style.left = (logo.offsetLeft - rotationOffset) + 'px'
			}
			else {
				direction = 'right'
				logo.style.left = (logo.offsetLeft + rotationOffset) + 'px'
			}
			rotation -= rotationAmount
		}
		else {
			console.log('Something bad has happened')
		}
		logo.style.transform = `rotate(${rotation}deg)`
	}
	
	const logoAnimation = () => {
		const width = document.getElementById('logo-link')
		const movingLogo = document.getElementById('moving-logo')
		if (movingLogo != null) {
			setInterval(() => {
				moveImage(width.offsetWidth, movingLogo)
			}, 70)
		}
	}
	
	logoAnimation()

	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-success px-2">
			<a id='logo-link' className="navbar-brand text-warning d-flex align-items-center position-relative logo-text-on-top title-text" href="/">
	 			<img id='moving-logo' src={logo} alt="" width="50" height="50" className="position-absolute logo-back-20" />
	 			{ pageTitle }
	 		</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	)
}

export default Navbar
import React, { useState, useEffect } from 'react'
import logo from '../logo.svg'

let logoX
let direction = 'right'
let rotation = 0

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
				logo.style.left = (logo.offsetLeft + 3) + 'px'
			}
			else {
				direction = 'left'
				logo.style.left = (logo.offsetLeft - 3) + 'px'
			}
		}
		else if (direction === 'left') {
			if (logo.offsetLeft > -20) {
				logo.style.left = (logo.offsetLeft - 3) + 'px'
			}
			else {
				direction = 'right'
				logo.style.left = (logo.offsetLeft + 3) + 'px'
			}
		}
		else {
			console.log('Something bad has happened')
		}
		rotation += 10
		logo.style.transform = `rotate(${rotation}deg)`
		console.log(rotation)
	}
	
	const logoAnimation = () => {
		const width = document.getElementById('logo-link')
		const movingLogo = document.getElementById('moving-logo')
		if (movingLogo != null) {
			setInterval(() => {
				moveImage(width.offsetWidth, movingLogo)
			}, 50)
			// moveImage(width.offsetWidth, movingLogo.offsetLeft)
		}
	}
	
	logoAnimation()

	return (
		<nav className='navbar bg-dark navbar-expand-lg'>
			<div className="container-fluid">
				<a id='logo-link' className="navbar-brand text-warning d-flex align-items-center position-relative logo-text-on-top title-text" href="/">
					<img id='moving-logo' src={logo} alt="" width="50" height="50" className="position-absolute logo-back-20" />
					{ pageTitle }
				</a>
			</div>
		</nav>
	)
}

export default Navbar
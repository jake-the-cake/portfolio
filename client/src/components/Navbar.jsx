import React, { useState, useEffect } from 'react'
import logo from '../logo.svg'

let logoX

const Navbar = () => {
	const getPageTitle = () => {
		return 'home'
	}

	const [pageTitle, setPageTitle] = useState('')

	useEffect(() => {
		setPageTitle(`jakeThompson.portfolio("${getPageTitle()}")`)
	},[])

	const moveImage = (width, logo) => {
		return
	}
	
	const logoAnimation = () => {
		const width = document.getElementById('logo-link')
		const movingLogo = document.getElementById('moving-logo')
		if (movingLogo != null) {
			setInterval(() => {
				moveImage(width.offsetWidth, movingLogo)
			}, 1500)
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
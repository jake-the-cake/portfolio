import { Search } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

let direction = 'right'
let rotation = 0

const rotationAmount = 5
const rotationOffset = 2

const Navbar = () => {
	const getPageTitle = () => {
		return 'home'
	}

	const [pageTitle, setPageTitle] = useState('')

	const currentPath = document.location.pathname
	useEffect(() => {
		setPageTitle(
		<span className="navbar-brand text-warning position-relative logo-text-on-top">
		jakeThompson.<span className="text-info">portfolio</span>(<span className="text-danger" id="dynamic-title">'home'</span>)</span>
		)
	},[])

	const moveImage = (width, logo) => {
		if (direction === 'right') {
			if (logo.offsetLeft < width - 45) {
				logo.style.left = (logo.offsetLeft + rotationOffset) + 'px'
			}
			else {
				direction = 'left'
				logo.style.left = (logo.offsetLeft - rotationOffset) + 'px'
			}
			rotation += rotationAmount
		}
		else if (direction === 'left') {
			if (logo.offsetLeft > -5) {
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
			}, 110)
		}
	}
	
	logoAnimation()

	// remove underline from links
	document.querySelectorAll('a').forEach(link => {
		link.style.textDecoration = 'none'
	})

	const toggleNavLinks = (active) => {
		const inactive = [0,1,2].filter(i=>i !== active)
		const elements = document.getElementsByClassName('nav-link')
		for (const index of inactive) {
			elements[index].classList.remove('active')
		}
		elements[active].classList.add('active')
	}

	window.addEventListener('load', () => {
		const path = document.location.pathname.replace('/portfolio/','').replace('-','').split('/')
		const setPath = () => {
			let finalPath
			path[0] === '' ? finalPath = 'home' : finalPath = path[0]
			return finalPath
		}
		const links = {
			home: 0,
			projects: 1,
			hireme: 2
		}
		toggleNavLinks(links[setPath()])
	})

	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to='/portfolio' id="logo-link" onClick={()=>{toggleNavLinks(0)}}>
					{ pageTitle }
					<img src={logo} alt="Logo" className="position-absolute logo-back-20 z-10 lift-10" id="moving-logo" width="50px" height="50px" />

				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
						<Link to='/portfolio'><span className="nav-link" aria-current="page" onClick={()=>{toggleNavLinks(0)}}>Home</span></Link>
						</li>
						<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle"id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Projects
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link to='/portfolio/projects/school'><span className="dropdown-item" onClick={()=>{toggleNavLinks(1)}}>School Work</span></Link></li>
								<li><Link to='/portfolio/projects/client'><span className="dropdown-item" onClick={()=>{toggleNavLinks(1)}}>Client Jobs</span></Link></li>
								<li><Link to='/portfolio/projects/freeware'><span className="dropdown-item" onClick={()=>{toggleNavLinks(1)}}>Freeware</span></Link></li>
								<li><hr className="dropdown-divider w-75 mx-auto" /></li>
								<li><Link to='/portfolio/projects'><span className="dropdown-item">View All</span></Link></li>
							</ul>
						</li>
						<li className="nav-item">
						<Link to='/portfolio/hire-me'><span className="nav-link" onClick={()=>{toggleNavLinks(2)}}>Hire Me</span></Link>
						</li>
					</ul>
					<form className="d-flex search-form" role="search">
						<input className="form-control search-bar" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-warning search-button" type="submit"><Search style={{width:'22px',height:'22px'}} /></button>
					</form>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
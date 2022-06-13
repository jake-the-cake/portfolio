import { SearchOutlined } from '@mui/icons-material'
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

	useEffect(() => {
		setPageTitle(
		<span className="navbar-brand text-warning position-relative z-20">
		jakeThompson.<span className="text-info">portfolio</span>(<span className="text-danger">'{getPageTitle()}'</span>)</span>
		)
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

	console.log(logo)

	// remove underline from links
	document.querySelectorAll('a').forEach(link => {
		link.style.textDecoration = 'none'
	})

	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-success">
  <div className="container-fluid">
    <Link to='/portfolio' id="logo-link">
	 		{ pageTitle }
			<img src={logo} alt="Logo" className="position-absolute logo-back-20 z-10 lift-10" id="moving-logo" width="50px" height="50px" />

		</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
				<Link to='/portfolio'><span className="nav-link active" aria-current="page">Home</span></Link>
        </li>
        <li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle"id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/portfolio'><span className="dropdown-item">School Work</span></Link></li>
            <li><Link to='/portfolio'><span className="dropdown-item">Client Jobs</span></Link></li>
            <li><hr className="dropdown-divider w-75 mx-auto" /></li>
            <li><Link to='/portfolio/projects'><span className="dropdown-item">View All</span></Link></li>
          </ul>
        </li>
        <li className="nav-item">
				<Link to='/portfolio'><span className="nav-link" href="#">Hire Me</span></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
	)
}

export default Navbar
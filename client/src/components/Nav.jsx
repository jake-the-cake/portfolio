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
		<nav className="navbar navbar-expand-md navbar-dark bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="/portfolio">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/portfolio">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">School Work</a></li>
            <li><a className="dropdown-item" href="#">Client Jobs</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/portfolio/projects">View All</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hire Me</a>
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
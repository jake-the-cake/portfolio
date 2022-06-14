import { useState, useEffect } from 'react'

const SetTitles = (value) => {
	const [navTitle, setNavTitle] = useState('')

	useEffect(() => {
		setNavTitle(value)
		const title = document.getElementById('dynamic-title')
		if (title && navTitle) {
			title.innerText = `'${navTitle}'`
			const pageTitle = document.title.split('[')
			document.title = pageTitle[0] + '[' + navTitle[0].toUpperCase() + navTitle.slice(1) + ']'
		}
	},[navTitle, value])
}

export default SetTitles
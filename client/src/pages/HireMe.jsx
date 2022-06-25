import React from 'react'
import SetTitles from '../scripts/SetTitles'

const HireMe = (props) => {
	SetTitles(props.title)

	return (
		<div className='hire-container'>
			<h1>Page Coming Soon...</h1>
			<p>Sorry to break it to you, but this page is currently under development.</p>
			<p>Please email me (<a href='mailto:askjake331@gmail.com'>askjake331@gmail.com</a>) with any questions.</p>
		</div>
	)
}

export default HireMe
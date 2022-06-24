const openWindow = (modal, link) => {
	const windowFrame = document.createElement('iframe')
	windowFrame.src = link
	windowFrame.classList.add('demo-frame')
	setTimeout(()=>{windowFrame.classList.toggle('demo-fade-in')},30)
	modal.appendChild(windowFrame)
}

export const handleButton = (linkType, linkObj) => {
	if (linkType === 'address') {
		// create and open modal
		const previewWindow = document.createElement('div')
		previewWindow.classList.add('preview-start')
		setTimeout(()=>{
			previewWindow.classList.toggle('fade-in')
		},10)
		// open iframe
		openWindow(previewWindow, linkObj[linkType])
		// click on gray to close modal
		previewWindow.addEventListener('click', () => {
			previewWindow.classList.toggle('fade-in')
			previewWindow.classList.toggle('fade-out')
			setTimeout(()=>{
				previewWindow.remove()
			},200)
		})
		// inject modal div into html
		document.body.appendChild(previewWindow)
	}
	else if (linkType === 'git') {
		window.open(linkObj[linkType], "_blank");
	}

}
export const Video = (props={}) => {
	return (
		<div className="bg-secondary d-flex flex-column gap-4 justify-content-center align-items-center" style={{minHeight:'35vh', paddingBottom:'2rem'}}>
			<div className="project-card-title text-light">About Me</div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/tQbSTMybY-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
		</div>
	)
}
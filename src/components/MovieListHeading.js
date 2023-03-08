import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col flex-column d-flex align-items-center justify-content-center mb-4'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;
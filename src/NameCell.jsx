import React from 'react';

const NameCell = ({ name, url }) => {
	return (
		<div>
			{
				<a href={url}>{name}</a>
			}
		</div>
	);
}

export default NameCell;
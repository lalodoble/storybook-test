import React from 'react';
import PropTypes from 'prop-types';

import './card.module.css';

export function Card({ icon, title, text, ...props }) {
	return (
		<div className={"card"}>
			<img src={icon} alt={title} />
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
};

Card.propTypes = {
	icon: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

Card.defaultProps = {
	icon: null,
	title: null,
	text: null,
};

import React from 'react';
import PropTypes from 'prop-types';

import './hero.module.css';

export function SectionHero({ title, text, bgColor, ...props }) {
	return (
		<section className={"hero"} style={{backgroundColor: bgColor}}>
			<div className="container">
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</section>
	);
};

SectionHero.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.object.isRequired,
	bgColor: PropTypes.string,
};

SectionHero.defaultProps = {
	bgColor: '#666',
	title: null,
	text: null,
};

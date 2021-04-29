import React from 'react';

import './header.module.css';

import logo from './public/bytelion-logo.png';

export function Header() {
	return (
		<header id={"header"}>
			<div className="container">
				<div>
					<img src={logo} alt="Bytelion" className={"logo"} />
				</div>
			</div>
		</header>
	)
}
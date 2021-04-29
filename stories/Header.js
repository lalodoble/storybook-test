import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './_global.css';
import './header.css';

import logo from './public/bytelion-logo.png';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
	<header>
		<div className="container">
			<div>
				<img src={logo} alt="Bytelion" className="logo" />
			</div>
		</div>
	</header>
);

Header.propTypes = {
	user: PropTypes.shape({}),
	onLogin: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
	user: null,
};

import react from 'react';
import {link} from 'react-router-dom';

const MenuNav = () => {(
	<nav>
		<ul>
		<li><link to='/'></link></li>
		<li><link to='/about'></link></li>
		<li><link to='/contact'></link></li>
		</ul>
	</nav>
)};

export default MenuNav;
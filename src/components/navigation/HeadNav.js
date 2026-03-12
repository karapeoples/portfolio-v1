import React, { useState } from 'react'
import logoLight from '../images/logo-light-insight.png';
import { Link } from 'react-router-dom';






const HeadNav = () => {

const [collapsed, setCollapsed] = useState(false);
const handleMenuToggle = () => {
  setCollapsed(prev => !prev);
};


	return (
		<div>
			<nav className='nav-bar'>
				<div className='nav-item'id='nav-logo'>
					<Link to='/'>
						<img src={logoLight} alt='logo' className='logo' />
					</Link>
				</div>

				<div id='nav-toggle' className='nav-item'>
  					<img src='https://img.icons8.com/cotton/64/000000/menu.png' alt='menu' onClick={handleMenuToggle}/>
				</div>
			</nav>

	{collapsed && (
		<section>
			<div className='nav-menu'>
				<div className='nav-item'>
					<Link to='/about' className='link'>About</Link>
					<Link to='/projects' className='link'> Showcase</Link>
				</div>	
			</div>
  			<div className='sub-nav-menu'>
    			<div className='sub-nav-item'>
      				<a className='sub-link' target='_blank' rel='noopener noreferrer' href='https://codestats.net/users/kararpeoples'> Code Stats
      				</a>
      				<a className='sub-link' target='_blank' rel='noopener noreferrer' href='https://docs.google.com/document/d/1saZNfU5pbsngdvptPidxZAhBZCH7RBgqX8xBomiCDRM'>
        			Resume
      				</a>
    			</div>
  			</div>
		</section>
		)}
	
		</div>
	);
}

export default HeadNav

import React from 'react';


const Footer = () => {
	  const linkedIn = 'https://www.linkedin.com/in/karapeoples/';
  return (
			<div>
				<div className='nav-bar'>
					<nav className='c-nav-footer'>
						<div className='contact'>
	  						<a target='_blank' rel='noopener noreferrer' className='c-btn' href={linkedIn}>
								<img src='https://img.icons8.com/fluent-systems-regular/50/000000/linkedin.png' alt='LinkedIn logo' /> LinkedIn 
	  						</a>
						</div>
						<div>
							<h5 className='copyright'>©2024~~Kara R. Peoples </h5>
						</div>
					</nav>
				</div>
			</div>

		);
}

export default Footer

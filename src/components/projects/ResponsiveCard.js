import React from 'react';
import schoolR from '../images/schoolR.png';
import oppia from '../images/oppia.png'
import { HStack, Card, CardBody, CardFooter, CardHeader, Image } from '@chakra-ui/react';


const ResponsiveCard = () => {


	if (window.innerWidth <= 500){
		return(
			<HStack spacing= '24px'>
			<div className='showcase'>
				<Card>
							<span className='sc-card'>
								<div className='sc-img-container'>
									<Image className="sc-image" src={schoolR} alt="Website Snapshot" />
								</div>
									<CardHeader className='sc-header'>
  										<h6>One-Week Collaborative Build</h6>
  											<h3>"School'R"</h3>
									</CardHeader>
								   <CardBody>
								<span clsassName='sc-copy'>
									<p className='sc-card-body'>
										School'R was built in a one-week sprint as a deep dive into the concepts I had learned so far while taking a break in my curriculum. The project
										explores how parents and children could engage with educational resources, activities, and interactive features through a shared platform.</p>

									<p className = 'sc-card-body'>
										The current preview includes the landing page, registration flow mockups, About page, and interactive features such as Memory and Rock, Paper,
										Scissors, while preserving the authentic team personality behind the build.</p>

									<p className = 'sc-card-body'>
									 Through this project, I worked through frontend structure, UI planning, collaboration, and interactive React features while applying JavaScript
									 concepts in a larger build.<br /></p>
								</span>
								</CardBody>
							</span>
							<CardFooter className='sc-section-btns'>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://front-end-schoolr.vercel.app/'>
									💻 Project Preview
								</a>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/School-R/front-end'>
									🐙 GitHub Repo
								</a>
							</CardFooter>
							</Card>
						</div>

						<div className='showcase'>
							<Card>
							<span >
								<div className='sc-img-container'>
									<Image className="sc-image" src={oppia} alt="Website Snapshot" />
								</div>
								<CardBody>
									<CardHeader >
										<h6>Volunteer Project</h6><br /><h3>Oppia</h3></CardHeader>
									<p className='sc-card-body'>
										An open-source Education/Technology Website.<br />
										Free Math Lessons for Everyone<br />
										Angular and Python<br />
										WSL2 and Virtual Machine Environment Exposure<br />
										Blog writing to chronicle what I learn
									</p>
								</CardBody>
							</span>
							<CardFooter>
								<span className='sc-section-btns'>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://oppia.org'>
									Site
								</a>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/karapeoples/oppia'>
									Repo
								</a>
							</span>
							</CardFooter>

							<a className ="libutton" rel='noopener noreferrer' href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7153949983069638656" target="_blank">💼 Read on LinkedIn</a>
						</Card>
						</div>
				</HStack>
		)
	} else{
		return (
			<HStack spacing='50px'>
				<div className='showcase'>
								<Card>
							<span className='sc-card'>
								<div className='sc-img-container'>
									<Image className="sc-image" src={schoolR} alt="Website Snapshot" />
								</div>
									<CardHeader className='sc-header'>
  										<h6>One-Week Collaborative Build</h6>
  											<h3>"School'R"</h3>
									</CardHeader>
								   <CardBody>
								<span clsassName='sc-copy'>
									<p className='sc-card-body'>
										School'R was built in a one-week sprint as a deep dive into the concepts I had learned so far while taking a break in my curriculum. The project
										explores how parents and children could engage with educational resources, activities, and interactive features through a shared platform.</p>

									<p className = 'sc-card-body'>
										The current preview includes the landing page, registration flow mockups, About page, and interactive features such as Memory and Rock, Paper,
										Scissors, while preserving the authentic team personality behind the build.</p>

									<p className = 'sc-card-body'>
									 Through this project, I worked through frontend structure, UI planning, collaboration, and interactive React features while applying JavaScript
									 concepts in a larger build.<br /></p>
								</span>
								</CardBody>
							</span>
							<CardFooter>
								<span className='sc-section-btns'>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://oppia.org'>
									Site
								</a>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/karapeoples/oppia'>
									Repo
								</a>
							</span>
							</CardFooter>
							</Card>
						</div>

						<div className='showcase'>
						<Card>
							<span >
								<div className='sc-img-container'>
									<Image className="sc-image" src={oppia} alt="Website Snapshot" />
								</div>
								<CardBody>
									<CardHeader >
										<h6>Volunteer Project</h6><br /><h3>Oppia</h3></CardHeader>
									<p className='sc-card-body'>
										An open-source Education/Technology Website.<br />
										Free Math Lessons for Everyone<br />
										Angular and Python<br />
										WSL2 and Virtual Machine Environment Exposure<br />
										Blog writing to chronicle what I learn
									</p>
								</CardBody>
							</span>
							<CardFooter className='sc-section-btns'>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://oppia.org'>
									Site
								</a>
								<a
									className='sc-btn'
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/karapeoples/oppia'>
									Repo
								</a>

							</CardFooter>

							<a className ="libutton" rel='noopener noreferrer' href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7153949983069638656" target="_blank">💼 Read on LinkedIn</a>
							</Card>
						</div>
			</HStack>
		)
	}
};

export default ResponsiveCard;

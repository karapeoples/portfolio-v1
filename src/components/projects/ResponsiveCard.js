import React from 'react';
import schoolR from '../images/schoolR.png';
import oppia from '../images/oppia.png'
import { HStack, Card, CardBody, CardFooter, CardHeader, Image } from '@chakra-ui/react';


const ResponsiveCard = () => {


	if (window.innerWidth <= 500){
		return(
			<HStack spacing= '24px'>
			<div className='showcase'>
			<div className='sc-card'>
				<Card>
								<div className='sc-img-container'>
									<Image className="sc-image" src={schoolR} alt="Website Snapshot" />
								</div>
									<CardHeader >
			                         <span className='sc-header'>
  										<h6>One-Week Collaborative Build</h6>
  											<h3>"School'R"</h3>
										</span>
									</CardHeader>
								   <CardBody>
								<span className='sc-copy'>
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
							<CardFooter>
									<span className='sc-section-btns'>
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
										</span>
							</CardFooter>
							</Card>
						</div>
						</div>

						<div className='showcase'>
  <div className='sc-card'>
    <Card>
      <div className='sc-img-container'>
        <Image className="sc-image" src={oppia} alt="Website Snapshot" />
      </div>

      <CardHeader>
        <span className='sc-header'>
          <h6>Open-Source Volunteer Journey</h6>
          <h3>Oppia</h3>
        </span>
      </CardHeader>

      <CardBody>
        <span clsassName='sc-copy'>
          <p className='sc-card-body'>
            Oppia is an open-source education platform focused on making high-quality learning accessible to students around the world. Through volunteering with the project, I’ve been deepening my understanding of large codebases, onboarding workflows, and the realities of contributing within an established open-source environment.
          </p>

          <p className='sc-card-body'>
            This work has given me hands-on exposure to WSL2, Ubuntu-based workflows, Angular, Python, and project documentation, while also strengthening how I approach troubleshooting, environment setup, and technical learning in public.
          </p>

          <p className='sc-card-body'>
            Alongside the technical work, Oppia has also become a space for reflective writing — documenting what I’m learning, where I get blocked, and how open-source contribution builds both skill and perspective over time.
          </p>
        </span>
      </CardBody>

      <CardFooter>
        <span className='sc-section-btns'>
          <a
            className='sc-btn'
            target='_blank'
            rel='noopener noreferrer'
            href='https://oppia.org'>
            🌍 Project Site
          </a>
          <a
            className='sc-btn'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/karapeoples/oppia'>
            🐙 GitHub Repo
          </a>
          <a
            className='sc-btn'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7153949983069638656'
            target='_blank'>
            💼 Read on LinkedIn
          </a>
        </span>
      </CardFooter>
    </Card>
  </div>
</div>
				</HStack>
		)
	} else{
		return (
			<HStack spacing='50px'>
				<div className='showcase'>
			<div className='sc-card'>
				<Card>
								<div className='sc-img-container'>
									<Image className="sc-image" src={schoolR} alt="Website Snapshot" />
								</div>
									<CardHeader >
			                         <span className='sc-header'>
  										<h6>One-Week Collaborative Build</h6>
  											<h3>"School'R"</h3>
										</span>
									</CardHeader>
								   <CardBody>
								<span className='sc-copy'>
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
							<CardFooter>
									<span className='sc-section-btns'>
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
										</span>
							</CardFooter>
							</Card>
						</div>
						</div>

						<div className='showcase'>
  <div className='sc-card'>
    <Card>
      <div className='sc-img-container'>
        <Image className="sc-image" src={oppia} alt="Website Snapshot" />
      </div>

      <CardHeader>
        <span className='sc-header'>
          <h6>Open-Source Volunteer Journey</h6>
          <h3>Oppia</h3>
        </span>
      </CardHeader>

      <CardBody>
        <span clsassName='sc-copy'>
          <p className='sc-card-body'>
            Oppia is an open-source education platform focused on making high-quality learning accessible to students around the world. Through volunteering with the project, I’ve been deepening my understanding of large codebases, onboarding workflows, and the realities of contributing within an established open-source environment.
          </p>

          <p className='sc-card-body'>
            This work has given me hands-on exposure to WSL2, Ubuntu-based workflows, Angular, Python, and project documentation, while also strengthening how I approach troubleshooting, environment setup, and technical learning in public.
          </p>

          <p className='sc-card-body'>
            Alongside the technical work, Oppia has also become a space for reflective writing — documenting what I’m learning, where I get blocked, and how open-source contribution builds both skill and perspective over time.
          </p>
        </span>
      </CardBody>

      <CardFooter>
        <span className='sc-section-btns'>
          <a
            className='sc-btn'
            target='_blank'
            rel='noopener noreferrer'
            href='https://oppia.org'>
            🌍 Project Site
          </a>
          <a
            className='sc-btn'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/karapeoples/oppia'>
            🐙 GitHub Repo
          </a>
          <a
            className='sc-btn'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7153949983069638656'
            target='_blank'>
            💼 Read on LinkedIn
          </a>
        </span>
      </CardFooter>
    </Card>
  </div>
</div>
			</HStack>
		)
	}
};

export default ResponsiveCard;

import React from 'react';

const Intro = () => {
	return (
		<div className='a-page'>
			<h1>My Story</h1>
			<section>
				<div>
					<img src='https://img.icons8.com/wired/64/000000/mental-health.png' alt='mental health' />
					<img src='https://img.icons8.com/ios/50/000000/sporty-wheelchair-user.png' alt='disabled' />
				</div>
				<p>
					I’m a detail-oriented technical professional with strengths in documentation, QA thinking, and developer-facing workflows. My path into tech has been shaped by persistence, curiosity, and a drive to turn complex information into something clear and usable.
				</p>
			</section>
			<hr />
			<section>
				<p>
					Crafting and creative problem-solving have shaped the way I approach programming. They taught me patience, attention to detail, and how to see individual pieces as part of a larger system — skills that naturally carry over into debugging, documentation, and improving technical processes.
				</p>
				<div>
					<img src='https://img.icons8.com/ios/50/000000/knitting-ball.png' alt='yarn' />
					<img src='https://img.icons8.com/ios/50/000000/art-book.png' alt='art book' />
				</div>
			</section>
			<hr />
			<section>
				<div className='div-type1'>
					<img src='https://img.icons8.com/wired/64/000000/lambda.png' alt='lambda' />
					<img src='https://img.icons8.com/ios/50/000000/graduation-scroll.png' alt='diploma' />
				</div>
				<p className='p-type1'>
					Through BloomTech, GenSpark, hands-on projects, and continued self-driven learning, I’ve built a strong foundation in adapting to new tools, understanding technical systems, and communicating ideas clearly. I’m especially interested in work where I can build, test, explain, and improve the experience of working with technology.
				</p>
			</section>
			<a className="libutton" rel="noopener noreferrer" href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6898716482310590464" target="_blank">💼 Read the Full Story on LinkedIn</a>
		</div>
	);
};

export default Intro;

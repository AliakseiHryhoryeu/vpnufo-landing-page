import React, { FC } from 'react'

import './Footer.scss'

export const Footer: FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__title'>Contacts</div>
			<div className='footer__contacts'>
				<ul className='footer__list'>
					<li className='footer__item'>
						<a
							className='footer__link'
							href='https://www.linkedin.com/in/aliaksei-hryhoryeu-15a3a6219/'
						>
							LinkedIn
						</a>
					</li>
					<li className='footer__item'>
						<a
							className='footer__link'
							href='https://github.com/AliakseiHryhoryeu'
						>
							Github
						</a>
					</li>
				</ul>
				<ul className='footer__list'>
					<li className='footer__item'>
						<a
							className='footer__link'
							href='mailto:aliaksei.hryhoryeu.1@gmail.com'
						>
							aliaksei.hryhoryeu.1@gmail.com
						</a>
					</li>
					<li className='footer__item'>
						<a className='footer__link' href='tel:+375 29 243 37 59'>
							+375 29 243 37 59
						</a>
					</li>
				</ul>
			</div>
			<div className='footer__subtitle'>Aliaksei Hryhoryeu 2022</div>
		</footer>
	)
}

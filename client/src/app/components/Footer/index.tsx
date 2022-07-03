import React, { FC } from 'react'

import './Footer.scss'

import footerImg from 'assets/img/footer_ufo.png'
import { Link } from 'react-router-dom'

export const Footer: FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__title'>
					<Link to='/'>vpnufo</Link>
				</div>
				<div className='footer__menu'>
					<div className='footer__menu-group'>
						<div className='footer__menu-group-item'>What is a VPN?</div>
						<div className='footer__menu-group-item'>Features</div>
					</div>
					<div className='footer__menu-group'>
						<div className='footer__menu-group-item'>Pricing</div>
						<div className='footer__menu-group-item'>FAQ</div>
					</div>
				</div>
				<div className='footer__contacts'>
					<div className='footer__contacts-img'>
						<img src={footerImg} alt='footer img' />
					</div>
					<div className='footer__contacts-title'>
						<Link to='/support'>Contact US</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

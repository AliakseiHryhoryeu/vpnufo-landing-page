import React, { FC } from 'react'

import './Footer.scss'

export const Footer: FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__title'>vpnufo</div>
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
						<img src='' alt='' />
					</div>
					<div className='footer__contacts-title'>Contact US</div>
				</div>
			</div>
		</footer>
	)
}

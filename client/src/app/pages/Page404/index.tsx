import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Page404.scss'

export const Page404: FC = () => {
	return (
		<div className='page404'>
			<div className='page404__header'>
				<Link to='/'>VPNUFO</Link>
			</div>
			<div className='page404__title'>404</div>
			<div className='page404__subtitle'>
				<div className='page404__subtitle-main'>Oops!</div>
				<div className='page404__subtitle-secondary'>The page not found</div>
			</div>
			<div className='page404__wrapper'>
				<Link to='/' className='page404__button'>
					Home
				</Link>
				<Link to='/support' className='page404__button'>
					Contact us
				</Link>
			</div>
		</div>
	)
}

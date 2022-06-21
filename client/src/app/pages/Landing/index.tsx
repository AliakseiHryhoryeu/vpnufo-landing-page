import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'app/reducers'
import { Header, Footer } from 'app/components'

import './Landing.scss'

export const Landing: FC = () => {
	const { isAuth } = useSelector((state: RootState) => {
		return {
			isAuth: state.user.isAuth,
		}
	})

	return (
		<div className='Landing'>
			<section className='home'>
				<Header />

				<div className='home__wrapper'>
					<div className='home__title'>VPNUFO</div>
					<div className='home__subtitle'>
						We are promoting the idea that everyone in the world has the right
						to completely control their digital life!
					</div>
					<Link className='home__button' to='/hiodsgijdjisd'>
						Get it free
					</Link>
				</div>
			</section>
			<section className='wewill'>
				<div className='wewill__wrapper'>
					<div className='wewill__img'>
						<img src='' alt='' height={'390px'} width={'390px'} />
					</div>
					<div className='wewill__text'>
						<div className='wewill__title'>
							We will make your browsing the Internet secure and anonymous.
						</div>
						<div className='wewill__subtitle'>
							Search for information or watch your favorite shows without ads or
							third party tracking! With Vpnufo, your accounts are completely
							safe.
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

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
			<Header />
			<section className='home'>
				<div className='home__wrapper'>
					<div className='home__title'>Manage your tasks</div>
					<div className='home__subtitle'>
						To do list enable you to organize and prioritize your projects in a
						fun, flexible, and rewarding way. Let's started.
					</div>
					<div className='home__container'>
						<Link className='home__button' to='/hiodsgijdjisd'>
							Get started
						</Link>
						<Link className='home__button' to='/main'>
							Lets see how it work
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}

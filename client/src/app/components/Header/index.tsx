import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { UserActions } from 'app/store/actions'
import { RootState } from 'app/store/reducers'

import './Header.scss'

export const Header: FC = () => {
	const [isActiveHeaderBurger, setActiveHeaderBurger] = useState(false)
	const [isActiveUsername, setActiveUsername] = useState(false)
	const toggleClassActiveHeaderBurger = () => {
		setActiveHeaderBurger(!isActiveHeaderBurger)
	}

	const dispatch = useDispatch()
	const { isAuth, username } = useSelector((state: RootState) => {
		return {
			isAuth: state.user.isAuth,
			username: state.user.activeUser.username,
		}
	})

	const navItems = [
		{ id: 1, title: 'What is a VPN?', url: '/' },
		{ id: 2, title: 'Features', url: '/' },
		{ id: 3, title: 'Pricing', url: '/' },
		{ id: 4, title: 'FAQ', url: '/' },
	]
	return (
		<>
			<header className='header__wrapper'>
				<header className='header'>
					<div className='header__container'>
						<div
							className={classNames('header__burger', {
								'header__burger-active': isActiveHeaderBurger,
							})}
							onClick={toggleClassActiveHeaderBurger}
						>
							<span></span>
						</div>

						<Link to='/' className='header__logo'>
							VPNUNFO
						</Link>
						<nav
							className={classNames('header__nav', {
								'header__nav-active': isActiveHeaderBurger,
							})}
						>
							<ul className='header__nav__list'>
								{navItems.map(({ id, title, url }) => (
									<li className='header__nav__item' key={id}>
										<Link to={url} className='header__nav__link'>
											{title}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						{!isAuth && (
							<div className='header__auth'>
								<Link
									to='/auth'
									className='header__auth__link header__auth__login'
								>
									Log in
								</Link>
								<div className='header__auth__link header__auth__divider'>
									/
								</div>
								<Link
									to='/signup'
									className='header__auth__link header__auth__join'
								>
									Join
								</Link>
							</div>
						)}
						{isAuth && (
							<div className='header__auth'>
								<Link
									to='/settings'
									className='header__auth__link header__auth__join'
								>
									Hello {username}
								</Link>
							</div>
						)}
					</div>
				</header>
			</header>
		</>
	)
}

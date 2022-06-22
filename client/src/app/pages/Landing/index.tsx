import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from 'app/reducers'
import { Header, Footer } from 'app/components'

import './Landing.scss'

import wewill_img from 'assets/img/wewill-bg1.png'
import features_img1 from 'assets/img/features-bg-1.png'
import features_img2 from 'assets/img/features-bg-2.png'

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
						<img
							src={wewill_img}
							alt='wewill__img'
							height={'390px'}
							width={'390px'}
						/>
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
			<section className='features'>
				<div className='features__wrapper'>
					<div className='features__text'>
						<div className='features__title'>Features</div>
						<div className='features__subtitle'>
							With <span className='features__subtitle-bold'>Vpnufo</span> your
							work will be fun and fast! And most importantly -
							<span className='features__subtitle-orange'>it's free! </span>
							Play, enjoy movies and chat with like-minded people without
							thinking that afterwards you will receive a bill for using the
							service.
						</div>
					</div>

					<div className='features__img'>
						<img
							src={features_img1}
							alt='wewill__img'
							height={'400px'}
							width={'237px'}
						/>
					</div>
				</div>
				<div className='features__wrapper'>
					<div className='features__img'>
						<img
							src={features_img2}
							alt='wewill__img'
							height={'238px'}
							width={'524px'}
						/>
					</div>

					<div className='features__text'>
						<div className='features__subtitle'>
							We have created a unique work system for Vpnufo. Our users connect
							directly to each other, sharing their IP in exchange for free
							unlimited VPN use. This favorably distinguishes Vpnufo in the
							modern VPN services market.
						</div>
					</div>
				</div>
			</section>

			<section className='plan'>
				<div className='plan__wrapper'>
					<div className='plan__title'>
						<span className='plan__title-orange'>Free</span> plan
					</div>
					<div className='plan__subtitle'>
						The unique system of Vpnufo allows our customers not to pay for the
						service and use a free plan. We always offer only the most favorable
						conditions for you!
					</div>
					<div className='plan__button'>Get it free</div>
				</div>
			</section>

			<section className='bonuses'>
				<div className='bonuses__wrapper'></div>
				<div className='bonuses__block'>
					<div className='bonuses__title'>24/7 support</div>
					<div className='bonuses__subtitle'>
						Our support managers are available 24/7 and are always ready to help
						you with any question!
					</div>
				</div>
				<div className='bonuses__block'>
					<div className='bonuses__title'>p2p network</div>
					<div className='bonuses__subtitle'>
						We use a P2P network, which means that your Internet connection will
						always be stable and fast
					</div>
				</div>
				<div className='bonuses__block'>
					<div className='bonuses__title'>built-in adblock</div>
					<div className='bonuses__subtitle'>
						And the built-in adblock will protect you from unnecessary annoying
						ads.
					</div>
				</div>
			</section>

			<section className='feedbacks'>
				<div className='feedbacks__wrapper'>
					<div className='feedbacks__title'>feedbacks</div>
					<div className='feedbacks__block'>
						<div className='feedbacks__block-text'>
							An excellent service for working with multiple accounts at the
							same time! I no longer worry that my accounts will be blocked
						</div>
						<div className='feedbacks__block-userinfo'>
							<div className='feedbacks__block-usericon'>
								<img src='' alt='' />
							</div>
							<div className='feedbacks__block-username'>Ufo</div>
							<div className='feedbacks__block-userdate'>29.12.2289</div>
						</div>
					</div>
					<div className='feedbacks__block'>
						<div className='feedbacks__block-text'>
							If not for Vpnufo, my online business would have been blown away a
							long time ago! Thank you guys, you are helping me earn more.
						</div>
						<div className='feedbacks__block-userinfo'>
							<div className='feedbacks__block-usericon'>
								<img src='' alt='' />
							</div>
							<div className='feedbacks__block-username'>Ufo</div>
							<div className='feedbacks__block-userdate'>29.12.2289</div>
						</div>
					</div>
					<div className='feedbacks__block'>
						<div className='feedbacks__block-text'>
							I live in a country with strict Internet restrictions. Thanks to
							Vpnufo, I can get in touch with my friends on social networks
							prohibited in my country, watch films and matches anonymously and
							at high speed.
						</div>
						<div className='feedbacks__block-userinfo'>
							<div className='feedbacks__block-usericon'>
								<img src='' alt='' />
							</div>
							<div className='feedbacks__block-username'>Ufo</div>
							<div className='feedbacks__block-userdate'>29.12.2289</div>
						</div>
					</div>
				</div>
			</section>
			<section className='faq'>
				<div className='faq__wrapper'>
					<div className='faq__title'>Faq</div>
					<div className='faq__block'>
						<div className='faq__block-title'>What is Vpnufo?</div>
						<div className='faq__block-text'>
							Vpnufo is a community of users who make information on the
							Internet available to each other. In other words, Vpnufo is a
							Peer-to-Peer VPN that is ad-free and free of charge. <br /> Will
							my information be available to other users in the community?
							<br />
							Definitely not. Vpnufo handles your HTTP requests in browsing
							mode, the same way as a regular Internet service provider.
						</div>
					</div>
					<div className='faq__block'>
						<div className='faq__block-title'>Why is Vpnufo free?</div>
						<div className='faq__block-text'>
							You do not pay for the plan because you are trading some of your
							device's resources (Wi-Fi and very limited cellular data) for a
							Vpnufo proxy. We use a special network for HTTP, with which you
							can access the sites you need through the devices of other Vpnufo
							users, and not through expensive servers.
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

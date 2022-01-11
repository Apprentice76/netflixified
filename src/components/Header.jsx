import styles from '../styles/Header.module.css'
import { useState, useEffect } from 'react'
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'

const Header = () => {
	const [navTransition, setNavTransition] = useState(false)

	const transitionNav = () => {
		if (window.scrollY > 100) {
			setNavTransition(true)
		} else {
			setNavTransition(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', transitionNav)
		return () => window.removeEventListener('scroll', transitionNav)
	}, [])

	return (
		<div
			className={styles.header}
			style={
				navTransition
					? {}
					: {
							background: 'linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 50%)',
					  }
			}>
			<div className={styles.header__left}>
				<img
					className={styles.header__logo_text}
					src='img/logo-text.png'
					alt='nf-text-logo'
				/>
				<span>Series</span>
				<span>Movies</span>
				<span>New &amp; Popular</span>
				<span>My List</span>
			</div>
			<div className={styles.header__right}>
				<Search className={styles.header__icon} />
				<span>user</span>
				<Notifications className={styles.header__icon} />
				<img
					className={styles.profile__logo}
					src='img/logo.png'
					alt='nf-logo'
				/>
				<div className={styles.profile}>
					<ArrowDropDown className={styles.header__icon} />
					<div className={styles.profile__options}>
						<span>Settings</span>
						<span>Logout</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header

import styles from '../styles/Header.module.css'
import { useState, useEffect } from 'react'

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
        <div className={styles.header} style={navTransition ? {} : {
            background: 'rgba(255, 255, 255, 0)'
        }}>
			<img
				className={styles.header__logo_text}
				src='img/logo-text.png'
				alt='nf-text-logo'
			/>
			<img
				className={styles.header__logo}
				src='img/logo.png'
				alt='nf-logo'
			/>
		</div>
	)
}

export default Header

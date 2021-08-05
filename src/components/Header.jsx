import styles from '../styles/Header.module.css'

const Header = () => {
	return (
		<div className={styles.header}>
			<img
				className={styles.logo_text}
				src='img/logo-text.png'
				alt='nf-text-logo'
			/>
			<img className={styles.logo} src='img/logo.png' alt='nf-logo' />
		</div>
	)
}

export default Header

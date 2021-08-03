import styles from '../styles/App.module.css'

const App = () => {
	return (
		<>
			<div className={styles.header}>
				<img
					className={styles.logo_text}
					src='img/logo-text.png'
					alt='nf-text-logo'
				/>
				<img className={styles.logo} src='img/logo.png' alt='nf-logo' />
			</div>
			{/* header */}
			<div className={styles.banner}>
				<div className={styles.banner_content}>
					<div className={styles.banner_title}>
						Ginny &amp; Georgia
					</div>
					<div className={styles.banner_buttons}>
						<div className={styles.button}>Play</div>
						<div className={styles.button}>Add to List</div>
					</div>
					<div className={styles.banner_description}>
						Angsty and awkward fifteen year old Ginny Miller often
						feels more mature than her thirty year old mother, the
						irresistible and dynamic Georgia Miller...
					</div>
				</div>
            </div>
            {/* banner */}
		</>
	)
}

export default App

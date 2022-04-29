import styles from '../styles/LoginForm.module.css'

const LoginForm = () => {
	return (
		<div className={styles.login__container}>
			<h2 className={styles.login__title}>Sign in</h2>
			<div className={styles.login__form_container}>
				<div className={styles.login__hybrid_float}>
					<input
						type='text'
						className={styles.login__input}
						required
					/>
					<label className={styles.login__floating_label}>
						Email
					</label>
				</div>
				<div className={styles.login__hybrid_float}>
					<input
						type='password'
						className={styles.login__input}
						required
					/>
					<label className={styles.login__floating_label}>
						Password
					</label>
				</div>
				<button className={styles.login__button}>Sign in</button>
				<div className={styles.login__options}>
					<div className={styles.login__options_choice}>
						<input type='checkbox' name='choice' id='' />
						<label htmlFor='choice'>Remember me</label>
					</div>
					<div className={styles.login__options_help}>Need help?</div>
				</div>
			</div>
			<div className={styles.login__footer}></div>
		</div>
	)
}

export default LoginForm

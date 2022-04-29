import Header from './Header'
import LoginForm from './LoginForm'
import styles from '../styles/Login.module.css'

const Login = () => {
	return (
		<>
			<Header />
			<div className={styles.login__background}>
				<LoginForm />
			</div>
		</>
	)
}

export default Login

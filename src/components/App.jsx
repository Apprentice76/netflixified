// import styles from '../styles/App.module.css'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const App = () => {
	return (
		<Router>
			<AnimatePresence exitBeforeEnter>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
				</Switch>
			</AnimatePresence>
		</Router>
	)
}

export default App

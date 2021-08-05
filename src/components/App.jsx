// import styles from '../styles/App.module.css'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">                
                    <Home />
                </Route>
            </Switch>
		</Router>
	)
}

export default App

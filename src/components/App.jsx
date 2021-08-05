import styles from '../styles/App.module.css'
import Header from './Header'
import Banner from './Banner'
import Row from './Row'

const App = () => {
    return (
        <>
            <Header />
			{/* header */}
			<Banner />
			{/* banner */}
			<div className={styles.movies_row}>
				<div className={styles.movies_row_title}></div>
				<div className={styles.movies}></div>
            </div>
            <Row title='Netflix Originals' movieType='netflix-originals' />
		</>
	)
}

export default App

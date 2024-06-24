import { useState, useEffect } from 'react'
import styles from './Header.module.css'
const Header = ({ onSearch }) => {
	const [search, setSearch] = useState('')

	useEffect(() => {}, [search, onSearch])

	const handleInputChange = (e) => {
		setSearch(e.target.value)
		onSearch(search)
	}

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.split}>
					<div className={styles.side}>
						<img
							src="../../../../logo-pokedex.png"
							alt="pokeball"
							className={styles.logo}
						/>
					</div>
					<div className={styles.side}>
						<input
							className={styles.searchbar}
							type="search"
							name="search"
							id="searchlist"
							placeholder="Search for a Pokemon..."
							onKeyUp={handleInputChange}
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

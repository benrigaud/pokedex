import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './PokemonCard.module.css'
import { capitalize } from '../../../../utils/textFormat'
import { fetchDetails } from '../../../../utils/fetch'

const PokemonCard = ({ name }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonDetails, setPokemonDetails] = useState(null)

	const loadDetails = () => {
		fetchDetails(name)
			.then((data) => {
				setPokemonDetails(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error('Error fetching Pokemon data:', error)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		loadDetails()
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}

	const renderPokemonCard = (data) => {
		return (
			<div className={styles.pokemonCard}>
				<Link to={`/pokemon/${data.name}`}>
					<img src={data.sprites.other.home.front_default} alt={data.name} />
				</Link>
				<h3>
					<Link to={`/pokemon/${data.name}`}>{capitalize(data.name)}</Link>
				</h3>
			</div>
		)
	}

	return <>{renderPokemonCard(pokemonDetails)}</>
}

export default PokemonCard

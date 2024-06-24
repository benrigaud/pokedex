import { useState, useEffect } from 'react'
import styles from './PokemonDetail.module.css'
import { fetchPokemonDetails } from '../../utils/fetch'
import { capitalize } from '../../utils/textFormat'

const PokemonCard = ({ name }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonDetails, setPokemonDetails] = useState(null)

	const loadDetails = () => {
		fetchPokemonDetails(name)
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
			<div className={styles.pokemonDetail}>
				<img
					src={data.sprites.other.dream_world.front_default}
					alt={data.name}
				/>
				<h3>{capitalize(data.name)}</h3>
			</div>
		)
	}

	return <>{renderPokemonCard(pokemonDetails)}</>
}

export default PokemonCard

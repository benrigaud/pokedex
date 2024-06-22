import { useState, useEffect } from 'react'
import styles from './PokemonCard.module.css'

async function fetchDetails(pokemonName) {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error fetching data:', error)
		return {}
	}
}

function capitalize(str) {
	if (!str) return ''
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

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
				<img src={data.sprites.other.home.front_default} alt={data.name} />
				<h3>{capitalize(data.name)}</h3>
			</div>
		)
	}

	return <>{renderPokemonCard(pokemonDetails)}</>
}

export default PokemonCard

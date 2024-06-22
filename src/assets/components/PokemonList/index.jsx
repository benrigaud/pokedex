import { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard'
import styles from './PokemonList.module.css'

async function fetchList() {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
		const data = await response.json()
		return data.results
	} catch (error) {
		console.error('Error fetching data:', error)
		return {}
	}
}

const PokemonList = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [listData, setListData] = useState(null)

	const loadData = () => {
		fetchList()
			.then((data) => {
				setListData(data)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error('Error fetching Pokemon data:', error)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		loadData()
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}

	const renderPokemon = (data) => {
		return data.map((pokemon, index) => {
			return <PokemonCard key={index} name={pokemon.name} />
		})
	}

	return (
		<>
			<div className={styles.pokemonList}>{renderPokemon(listData)}</div>
		</>
	)
}

export default PokemonList

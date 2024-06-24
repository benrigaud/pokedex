import Header from '../../components/Header'
import PokemonList from '../../components/PokemonList'
import Footer from '../../components/Footer'
import usePokemonResults from '../../state/pokemon-list'
import { useState, useEffect } from 'react'

const Home = () => {
	const { data, isLoading, error, fetchPokemon } = usePokemonResults()
	const pokemons = data.results || []
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		fetchPokemon()
	}, [])

	const handleNavbarSearch = (term) => {
		setSearchTerm(term)
	}

	const renderPokemonList = () => {
		if (isLoading) {
			return (
				<div className="loading">
					<img src="../../../../../pokeball.png" alt="pokeball" />
				</div>
			)
		}
		if (error) {
			return <div>Error: {error.message}</div>
		}
		// filter
		let filteredPokemons = pokemons
		filteredPokemons = pokemons.filter((pokemon) =>
			pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
		return <PokemonList pokemons={filteredPokemons} searchTerm={searchTerm} />
	}

	return (
		<>
			<Header onSearch={handleNavbarSearch} />
			{renderPokemonList()}
			<Footer />
		</>
	)
}

export default Home

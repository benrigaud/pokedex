const MAX_POKEMON = 151
async function fetchAllPokemon() {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}}`
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error fetching data:', error)
		return {}
	}
}

async function fetchPokemonDetails(pokemonName) {
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

export { fetchAllPokemon, fetchPokemonDetails }

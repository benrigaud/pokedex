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

async function fetchList(url) {
	try {
		const response = await fetch(url || `https://pokeapi.co/api/v2/pokemon/`)
		const data = await response.json()
		return data.results
	} catch (error) {
		console.error('Error fetching data:', error)
		return {}
	}
}

export { fetchDetails, fetchList }

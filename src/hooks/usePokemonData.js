const usePokemonData = (params) => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${params}`)
		.then((response) => response.json())
		.then((data) => {
			return data
		})
		.catch((error) => {
			console.error('Error fetching data:', error)
		})
}

export default usePokemonData

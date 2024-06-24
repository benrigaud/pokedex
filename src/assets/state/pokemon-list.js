import { create } from 'zustand'

const MAX_POKEMON = 151

const usePokemonResults = create((set) => ({
	data: [],
	error: null,
	isLoading: false,
	fetchPokemon: async (params) => {
		const url = `https://pokeapi.co/api/v2/pokemon${
			params?.length ? `/${params}` : ''
		}?limit=${MAX_POKEMON}`
		try {
			await set(() => ({ isLoading: true }))

			const response = await fetch(url)
			const data = await response.json()

			await set(() => ({ data, isLoading: false }))
		} catch (error) {
			await set(() => ({ error }))
		}
	}
}))

export default usePokemonResults

import { useParams, Link } from 'react-router-dom'
import PokemonDetail from '../../components/PokemonDetail'

const Detail = () => {
	const { pokemonName } = useParams()
	console.log(`Pokemon name: ${pokemonName}`)
	return (
		<>
			<Link to="/">Back</Link>
			<PokemonDetail name={pokemonName} />
		</>
	)
}

export default Detail

import { useParams, Link } from 'react-router-dom'
import PokemonDetail from '../../components/PokemonDetail'
import styles from './Detail.module.css'
import Footer from '../../components/Footer'

const Detail = () => {
	const { pokemonName } = useParams()
	return (
		<>
			<Link to="/" className={styles.backButton}>
				Back
			</Link>
			<PokemonDetail name={pokemonName} />
			<Footer />
		</>
	)
}

export default Detail

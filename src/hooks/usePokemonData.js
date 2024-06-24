import useEventsResults from '../assets/state/pokemon-list'

const useEventsData = () => {
	const { data, isLoading, error, fetchEvents } = useEventsResults()
	return {
		events: data.results || [],
		// page: data?.page || {},
		isLoading,
		error,
		fetchEvents
	}
}

export default useEventsData

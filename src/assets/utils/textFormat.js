function lowercase(str) {
	if (!str) return ''
	return str.toLowerCase()
}

function capitalize(str) {
	if (!str) return ''
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export { lowercase, capitalize }

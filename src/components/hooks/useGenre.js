const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return ""

    const genresId = selectedGenres.map(g => g.id)
    return genresId.join(',')
}

export default useGenres
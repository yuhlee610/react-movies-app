import { Chip } from '@material-ui/core'
import axios from 'axios'
import React, {useEffect} from 'react'

function Genres({
    type,
    setSelectedGenres,
    selectedGenres,
    genres,
    setGenres,
    setPage
}) {
    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setGenres(data.genres)
    }

    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres({})
        }
    }, [])

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter(g => g.id !== genre.id))
        setPage(1)
    }

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter(g => g.id !== genre.id))
        setGenres([...genres, genre])
        setPage(1)
    }

    return (
        <div style={{padding: '6px 0'}}>
            {selectedGenres && selectedGenres.map((genre) => {
                const {id, name} = genre
                return (
                    <Chip 
                        key={id} 
                        label={name} 
                        style={{margin: 2}}
                        clickable
                        color="primary"
                        size={'small'}
                        onDelete={() => handleRemove(genre)}
                    />
                )
            })}
            {genres.map((genre) => {
                const {id, name} = genre
                return (
                    <Chip 
                        key={id} 
                        label={name} 
                        style={{margin: 2}}
                        clickable
                        size="small"
                        onClick={() => handleAdd(genre)}
                    />
                )
            })}
        </div>
    )
}

export default Genres

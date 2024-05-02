import React, { useContext, useEffect, useState } from 'react'
import { getMovie } from '@/services/getMovie'
import { MovieProps } from '@/interfaces'
import { useMovieContext } from '@/providers/SearchProvider'

const useMovies = () => {
    const[movieData, setmovie] = useState<MovieProps>()
    const[loading, setLoading] = useState(false)
    const{movieInput} = useMovieContext()

    const handleDataFetch  = async() =>{   
        try {
            if(movieInput){
                setLoading(true)
                const response = await getMovie(movieInput)
                if(response.error){
                    console.log("an error happened");
                }
                if(response) {
                    setTimeout(() => {
                       setLoading(false)
                    setmovie(response) 
                    }, 300);
                    }
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleDataFetch()
    }, [movieInput]);

    return {loading, movieData}
}

export default useMovies

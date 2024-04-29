import React, { useContext, useEffect, useState } from 'react'
import { getMovie } from '@/services/getMovie'
import { MovieProps } from '@/interfaces'
import { useMovieContext } from '@/providers/SearchProvider'

const useMovies = () => {
    const[movieData, setmovie] = useState<MovieProps>()
    const{movieInput} = useMovieContext()

    const handleDataFetch  = async() =>{   
        try {
            if(movieInput){       
                const response = await getMovie(movieInput)
                // console.log(response)
                if(response.error){
                    console.log("an error happened");
                }
                if(response) setmovie(response)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleDataFetch()
        // console.log(movieInput);
    }, [movieInput]);

    return {movieData}
}

export default useMovies

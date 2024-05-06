"use client"

import { MovieProps } from "@/interfaces";
import axios from "axios";

const APIkey = "e1898035";
const temp = "invincible"
// request example https://www.omdbapi.com/?t=parasite&apikey=e1898035



const getMovie = async(movieInput:MovieProps) =>{
    try {
        const response = await axios.get(`https://www.omdbapi.com/?t=${movieInput}&apikey=${APIkey}`)        
        if(response.data) return response.data 
    } catch (error) {
        console.log(error)
    }
    return null;

}



export {getMovie};


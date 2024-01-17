// import {RAPID_API_KEY} from "@env";
import { useState } from "react";
import axios from "axios";

const useFetch = (endpoint:string) =>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'f77e306517msh71a728961282f5fp1ff138jsn58e041dafd9e',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
      };
      
}
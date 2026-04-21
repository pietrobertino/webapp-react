import axios from "axios";
import { useEffect, useState } from "react"

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    const url = import.meta.env.VITE_SERVER_API_URL + '/api/movies';

    useEffect(() => {

        axios.get(url)
            .then(res => {
                console.log(res.data)
            })

    }, []);

    return (
        <h1>Home page</h1>
    )
}
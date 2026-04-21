import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function MoviePage() {

    const { movieid } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const url = import.meta.env.VITE_SERVER_API_URL + `/api/movies/${movieid}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMovieInfo(res.data);
            })
    }, [movieid])



    return (
        <>
            <div className="container">
                <h1>{movieInfo.title}</h1>
                <section>
                    <img src={import.meta.env.VITE_SERVER_API_URL + '/imgs/' + movieInfo.image} alt={movieInfo.title} />

                </section>
            </div>

            <div className="container">
                <section>
                    <h2>Reviews</h2>
                </section>
            </div>

        </>
    )
}
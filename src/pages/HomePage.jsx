import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    const url = import.meta.env.VITE_SERVER_API_URL + '/api/movies';

    useEffect(() => {

        axios.get(url)
            .then(res => {
                setMovies(res.data);
            })

    }, []);

    return (
        <>
            <div className="container">
                <h1>Movies</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div className="card bg-secondary-subtle h-100">
                                <div className="row row-cols-2 g-0">
                                    <img src={import.meta.env.VITE_SERVER_API_URL + '/imgs/' + movie.image} alt={movie.title} className=" card-img " />
                                    <div>
                                        <div className="card-header w-100">
                                            <div className="text-center fw-bold fs-3 ">{movie.title}</div>
                                        </div>
                                        <div className="card-body ">
                                            <div>{movie.genre}</div>
                                            <div>{movie.release_year}</div>
                                            <button className="btn btn-secondary mt-auto"><Link className="text-white text-decoration-none" to={`/movies/${movie.id}`}>View Details</Link></button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
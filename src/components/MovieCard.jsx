import { Link } from "react-router-dom";


export default function MovieCard({ movie }) {

    return (
        <div className="card  h-100">
            <div className="row row-cols-2 g-0">
                <img src={import.meta.env.VITE_SERVER_API_URL + '/imgs/' + movie.image} alt={movie.title} className=" card-img col" />
                <div className="col d-flex flex-column">
                    <div className="card-header w-100">
                        <div className="text-center fw-bold fs-3 card-title">{movie.title}</div>
                    </div>
                    <div className="card-body d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between">
                            <span className="fw-bold">Genre:</span>
                            <span>{movie.genre}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="fw-bold">Year:</span>
                            <span>{movie.release_year}</span>
                        </div>
                    </div>
                    <div className=" card-footer mt-auto text-center">
                        <button className="btn "><Link className="text-decoration-none text-white" to={`/movies/${movie.id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
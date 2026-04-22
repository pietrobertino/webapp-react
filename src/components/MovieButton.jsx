import { Link } from "react-router-dom";

export default function MovieButton({ movie }) {

    return (
        <button className="btn details-btn " data-bs-dismiss="modal">
            <Link className="text-decoration-none" id="btn-label" to={`/movies/${movie.id}`}>View Details</Link>
        </button>
    )
}
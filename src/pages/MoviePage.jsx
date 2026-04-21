import { useParams } from "react-router-dom"

export default function MoviePage() {

    const { movieid } = useParams();

    return (
        <h1>Pagina del film con id = {movieid}</h1>
    )
}
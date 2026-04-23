import { useState } from 'react';
import axios from 'axios';

export default function ReviewForm({ movieId, getMovieInfo, url }) {

    const post_url = import.meta.env.VITE_SERVER_API_URL + `/api/movies/${movieId}/reviews`;

    const initialData = {
        name: "",
        vote: 5,
        text: ""
    }

    const [data, setData] = useState(initialData);

    const [alert, setAlert] = useState(null); //success se successo nell'upload, error altrimenti

    function handleSubmit(e) {
        e.preventDefault();
        //effettuiamo la chiamata post per inserire la review nel database
        axios.post(post_url, data)
            .then(res => {
                console.log(res.data);
                setAlert("success");

            })
            .catch(function (error) {
                console.log(error)
                setAlert("error")
            })

        //puliamo il form
        setData(initialData);
        //aggiorniamo le reviews
        getMovieInfo(url);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input className=' form-control' type="text" required value={data.name} placeholder='Mario'
                onChange={e => setData({ ...data, name: e.target.value })} />
            <select
                className=' form-select'
                name="vote"
                id="vote"
                onChange={e => setData({ ...data, vote: e.target.value })}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <textarea className=' form-control' name="text" id="text" value={data.text} onChange={e => setData({ ...data, text: e.target.value })} placeholder='This movie is...'></textarea>
            <button>Submit</button>
        </form>
    )
}

//DA COMPLETARE: 
// funzione di alert con relativi messaggi
// ui del form 
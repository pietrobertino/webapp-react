import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ReviewForm({ movieId, getMovieInfo, url, setMovieInfo }) {

    const post_url = import.meta.env.VITE_SERVER_API_URL + `/api/movies/${movieId}/reviews`;

    const initialData = {
        name: "",
        vote: 5,
        text: ""
    }

    const [data, setData] = useState(initialData);

    const [alert, setAlert] = useState(null); //success se successo nell'upload, error altrimenti

    useEffect(() => {
        if (!alert) return;

        const timer = setTimeout(() => setAlert(null), 3000);
        return () => clearTimeout(timer);
    }, [alert]);

    function handleSubmit(e) {
        e.preventDefault();
        //effettuiamo la chiamata post per inserire la review nel database
        axios.post(post_url, data)
            .then(res => {
                console.log(res.data);
                setAlert("success");
                //aggiorniamo le reviews
                getMovieInfo(url);

            })
            .catch(error => {
                console.log(error)
                setAlert("error")
            })

        //puliamo il form
        setData(initialData);

    }

    return (
        <>
            {alert === 'success' && <div className='alert message-alert mt-3'>Uploading successful!</div>}
            {alert === 'error' && <div className='alert message-alert mt-3'>Error during uploading</div>}
            <form onSubmit={handleSubmit}>
                <label className=' col-form-label'>Username:</label>
                <input className=' form-control review-form-input' type="text" required value={data.name} placeholder='Mario'
                    onChange={e => setData({ ...data, name: e.target.value })} />
                <label className=' col-form-label'>Vote:</label>
                <select
                    className=' form-select review-form-input'
                    name="vote"
                    id="vote"
                    defaultValue={"5"}
                    onChange={e => setData({ ...data, vote: e.target.value })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label className=' col-form-label '>Comment:</label>
                <textarea className=' form-control review-form-input' name="text" id="text" value={data.text} onChange={e => setData({ ...data, text: e.target.value })} placeholder='This movie is...'></textarea>
                <button className='btn mt-3' id='submit-btn'>Submit</button>
            </form>
        </>
    )
}


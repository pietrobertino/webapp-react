import { useState, useEffect } from 'react';

export default function MovieScore({ vote }) {

    const [stars, setStars] = useState([]);

    useEffect(() => {
        const score = Number(vote) || 0;
        const array = [];
        for (let i = 0; i < 5; i++) {
            if (i < score) {
                array.push("star-fill")
            } else {
                array.push("star")
            }
        }
        setStars(array);
    }, [vote])


    return (
        <div>
            {stars.map((star, index) => (
                <i className={`bi bi-${star}`} key={index}></i>
            ))}
        </div>
    )
}
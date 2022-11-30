import { useParams } from "react-router-dom"

function MovieDetailPage ({movies}) {
    let {movieName} = useParams()
    let chosenMovie = movies.find(selectedMovie => selectedMovie.title === movieName)
    return (
        <div>
            <h1>{chosenMovie.title}</h1>
            <h2>Release Date: {new Date(chosenMovie.releaseDate).toLocaleDateString()}</h2>
            <h2>Cast Members:</h2>

                <ul>
                    {
                        chosenMovie.cast.map(actor => {return <li key={actor}>{actor}</li>})
                    }
                </ul>
            <img src={`${chosenMovie.posterPath}`} alt=""/>
        </div>
    )
}

export default MovieDetailPage;

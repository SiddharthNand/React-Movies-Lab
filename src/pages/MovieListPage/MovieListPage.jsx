import MovieCard from "../../Components/MovieCard/MovieCard"

 function MovieListPage ({movies}) {
    return (
    <div> 
        {movies.map(movie => {return<MovieCard key={movie.title} movie={movie} />} )}
    </div>
    )
}

export default MovieListPage

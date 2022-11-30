import {Link} from "react-router-dom" 

export default function MovieCard({movie}){
    return(
        <>
        <Link to={`/movies/${movie.title}`} >
            <div style={{background: `url(${movie.posterPath}) no-repeat`, WebkitBackgroundSize: 'cover'}} >
                <h1>{movie.title}</h1>
                <h3>{movie.releaseDate}</h3>
            </div>
        </Link>
        </>
    )
}
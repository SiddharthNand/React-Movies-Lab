import ActorCard from '../../Components/ActorCard/ActorCard'

function ActorListPage({movies}) {
    let actorList = []
    movies.forEach(castList => castList.cast.forEach(actors => actorList.push(actors)))
    let trimmedList = [...new Set(actorList)]
    return (
        <div>
            {trimmedList.map((actor, i) => <ActorCard key = {i} actor = {actor} i={i} />)}
        </div>
    )
}

export default ActorListPage;

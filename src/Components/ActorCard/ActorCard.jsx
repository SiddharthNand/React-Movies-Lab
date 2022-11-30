function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) * min)
}

function ActorCard({actor, i}){
    let back = randomNumber(10, 25)
     console.log(back)
     return (
        <>
            <h3>{actor}</h3>
            <img src= {`https://picsum.photos/id/${back}/200/`}/>
           
        </>
    )
}

export default ActorCard;

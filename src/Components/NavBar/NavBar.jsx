import React from "react";
import { Link } from 'react-router-dom'

export default function NavBar ({user}) {
    return (
        <nav>
            <Link to="/Movies">Movies</Link> 
            &nbsp; | &nbsp;
            <Link to="/Actors">Actors</Link>
        </nav>
    )
}

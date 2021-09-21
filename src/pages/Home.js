import React from "react";
import {Link} from "react-router-dom"
import "../App.css"


const Home = (props) => {

    return (
        <>
        <Link to="/create">
            <i class="fas fa-plus fa-2x"> Add to the Bookshelf</i>
        </Link>
        <div className="home-container">
            {props.books.map((b) => {
                const {title, image_link, id} = b
                return (
                    <Link to={`/book/${id}`} key={id}>
                        <div className="book-container">
                            <img src={image_link} className="book-img"></img>
                            <p style={{textDecoration: 'none'}}className="book-title">{title}</p>
                        </div>
                    </Link>
                )
            })} 
        </div>
        </>
    )
}

export default Home
 
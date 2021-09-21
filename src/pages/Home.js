import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import Book from "../components/Book";
import "../App.css"


const Home = (props) => {
console.log(props.books)
    return (
        <div className="home-container">
            
                {props.books.map((b) => {
                    const {title, image_link, id} = b
                    return (
                        <Link to={`/book/${id}`} key={id}>
                            <div className="book-container">
                                <img src={image_link}></img>
                                <p>{title}</p>
                            </div>
                        </Link>
                    )
                })} 
            
          <Book bookInfo={props.book}/>
        </div>
    )
}

export default Home

import React, {useState} from "react";
import "../App.css";

const Book = (props) => {
    const [selected, setSelected] = useState([])

    const {books} = props
    
    const loading = () => {<h1> loading...</h1>}

    const loaded = () => {
        const current_id = props.match.params['bookId']
        const output = books.filter(book => book.id === current_id)
        const current_book = output[0]


    return (
        <div className="book">
            <img src={current_book.image_link}></img>
            <h2>{current_book.title}</h2>
            <h4>{current_book.author}</h4>
            <h4>{current_book.genre}</h4>
            <p className="book-desc">{current_book.description}</p>
            <div className="icons">
                <i class="fas fa-heart fa-2x"></i>
                <button className="edit-button" onClick={() => {
                            props.selectBook(current_book)
                            props.history.push("/edit")
                            }}>Edit</button>
                <button className="delete-button" onClick={() => {
                            props.deleteBook(current_book)
                            props.history.push("/home")
                            }}>Delete</button>
            </div>
        </div>
    )}

    return props.books ? loaded() : loading()
}

export default Book
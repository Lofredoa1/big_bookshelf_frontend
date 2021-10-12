import React, {useState} from "react";
import {Link} from "react-router-dom"
import "../App.css"


const Home = (props) => {

    const [formData, setFormData] = useState("")
    const [activeBooks, setActiveBooks] = useState(props.books)

    const handleChange = (event) => {
        setFormData(event.target.value)
        // let result = activeBooks.filter(t => t.title.toLowerCase() == formData.toLowerCase())
        // console.log(activeBooks)
        // console.log(result)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let result = activeBooks.filter(t => t.title.toLowerCase() == formData.toLowerCase())
        console.log(activeBooks)
        console.log(result)
        return result
    };

    return (
        <>
        <div className="home-header">
        <Link to="/create">
            <i class="fas fa-plus fa-2x"> Add to the Bookshelf</i>
        </Link>
        <form onSubmit={handleSubmit}>
            <h4 className="search-header">Filter the Bookshelf</h4>
            <input className="search-bar" name="search" value={formData} onChange={handleChange} />
            <input type="submit" value="search"/>
        </form>
        
        </div>
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
 
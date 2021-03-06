import React, { useState } from 'react'
import "../App.css"

const BookCreateForm = (props) => {

    const url = "https://big-bookshelf.herokuapp.com"
    // const url = "http://localhost:8000"

    const defaultBook = {
        id: props.myBook.id,
        title: props.myBook.title,
        author: props.myBook.author,
        genre: props.myBook.genre,
        description: props.myBook.description,
        image_link: props.myBook.image_link,
        favorite: props.myBook.favorite
    }
    
    
    const [formData, setFormData] = useState(defaultBook);
    const [searchData, setSearchData] = useState("");
    const [searchResults, setSearchResults] =useState([]);
    
    const searchBooks = () => {
        fetch(url + "/book/search/{" + searchData + "}")
        console.log("yes")
        .then((response) => response.json())
        .then((data)=> setSearchResults(data.data))
    }
    // Book Search - handleChange
    const handleChangeSearch = (event) => {
        setSearchData(event.target.value)
    }

    // Book Form submit 
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/home")
    
    };

    // Book Form - handleChange
    const handleChange = (event) =>  {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    return (
        <>
         <form onSubmit={searchBooks}>
            <h4 className="search-header">Search for Your Book Here:</h4>
            <input className="search-bar" name="search" value={searchData} onChange={handleChangeSearch}/>
            <input type="submit" value="Search"/>
        </form>
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <a onClick={() => props.history.goBack()}><i class="fas fa-arrow-circle-left fa-lg" ></i></a>
                <div>
                    <h2 className="form-title">Just one more step</h2>
                    <h4 className="form-sub-title">Add a Book to the Bookshelf</h4>    
                </div>
            </div>
            
            <div className="main-form">
                <h3 className="form-question">What's the title of the book?</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <h3 className="form-question">Who's the author of the book?</h3>
                <input
                    type="text"
                    name="author"
                    placeholder="Enter Author"
                    value={formData.author}
                    onChange={handleChange}
                />
                <h3 className="form-question">What is the genre of the book?</h3>
                <input
                    type="text"
                    name="genre"
                    placeholder="Enter Genre"
                    value={formData.genre}
                    onChange={handleChange}
                />
                <h3 className="form-question">What's a brief description of the book?</h3>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <h3 className="form-question">Enter a URL containing an image of the book cover.</h3>
                <input
                    type="text"
                    name="image_link"
                    placeholder="Enter Image URL Link"
                    value={formData.image_link}
                    onChange={handleChange}
                />
                <h3 className="form-question">Is this a favorite?</h3>
                <input
                    type="checkbox"
                    name="favorite"
                    value={formData.favorite}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    value="Add to Bookshelf"
                    className="submit-button"
                />
            </div>
        </form>
        </>
    ) 
};

export default BookCreateForm

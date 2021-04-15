// import { Component } from "react";

// class BookList extends Component {

//     componentDidMount() {
//         console.log(this.props.match.params.genre)
//     }

//     render() {
//         return (
//             <h1>BookList</h1>
//         )
//     }
// }


import React, {useState, useEffect } from 'react'

function BookList() {
    
    const [books, setBooks] = useState([])

    useEffect(() => {
        handleGetAllBooks() 
    },[])

    const getAllBooks = () => {

    
        fetch('http://localhost:8080/books')
        .then(response => response.json())
        .then(result => {
            console.log(result.Search)
            setBooks(result.Search)
        })
    }

    const handleGetAllBooks = () => {
        getAllBooks()
    }

    const bookItems = books.map(book => {
        return <li>{book.Title}</li>

    }) 

    return (
        <div>
            <h1>BookList</h1>
            
        
        </div>
        
    )
}


export default BookList
import React, { useState, useEffect } from 'react'

function AddBookPage () {

    const [details, setDetails] = useState({})

    const handleOnChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {

        fetch('http://localhost:8080/books',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({details})
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                console.log('here')
            }
        })
    }


    return (
        <div className="add-book-input">
            <h1>Add Book</h1>
            <input type="text" onChange = {handleOnChange} placeholder="Title" name= "title"/>
            <input type="text" onChange = {handleOnChange} placeholder="Genre" name= "genre" />
            <input type="text" onChange = {handleOnChange} placeholder="Publisher" name= "publisher" />
            <input type="text" onChange = {handleOnChange} placeholder="Year" name= "year" />
            <input type="text" onChange = {handleOnChange} placeholder="ImageURL" name= "imageURL" />
            <button onClick = {handleSave}>Submit</button>




        </div>
    )
}

export default AddBookPage
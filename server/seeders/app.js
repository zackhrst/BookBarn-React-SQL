const express = require('express')
const cors = require('cors')
const app = express()
const models = require('../models')

app.use(cors())
app.use(express.json())


app.get('/books', (req, res) => {
    models.Book.findAll({
    }).then((books) => {
        res.json(books)
    })
})

app.post('/books' , (req, res) => {
    
    const title = req.body.details.title
    const genre = req.body.details.genre
    const publisher = req.body.details.publisher
    const year = req.body.details.year
    const imageURL = req.body.details.imageURL

    console.log(req.body.details)

    let book = {title: title, genre: genre, publisher: publisher, year: year, imageURL: imageURL}
    books.push(book)

    res.json({success: true, message: "Book has been added!"})
})


app.listen(8080, () => {
    console.log('Server is running...')
})
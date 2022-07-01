const router = require("express").Router()

const Movie = require('./../models/Movie.model')

const uploaderConfig = require("../config/uploader.config")



router.get('/galeria', (req, res, next) => {

    Movie
        .find()
        .then(movies => res.render('movies/gallery', { movies }))
        .catch(err => next(new Error(err)))
})



router.get('/crear', (req, res, next) => {
    res.render('movies/create')
})



router.post('/crear', uploaderConfig.single('cover'), (req, res) => {

    console.log('ESTO ES EL OBJETO DE MULTER:', req.file)

    const { title, description } = req.body

    Movie
        .create({ title, description, imageUrl: req.file.path })
        .then(() => res.redirect('/peliculas/galeria'))
        .catch(err => next(new Error(err)))
})

module.exports = router
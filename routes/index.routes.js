module.exports = app => {

  app.use('/', require('./base.routes.js'))
  app.use('/peliculas', require('./movies.routes.js'))

}
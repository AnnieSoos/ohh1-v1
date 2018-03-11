const Router = require('express').Router
const User = require('./model')
const router = new Router()


router.put('/games/:id', (req, res) => {
  const gameId = Number(req.params.id)
  const updates = req.body

  console.log(`The user that's editting this Game has ID = ${req.user.id}`)

  Game.findById(req.params.id)
    .then(entity => {
      if (entity.userId !== req.user.id) {
        res.status(403).send({
          message: 'You\'re not allowed to edit this Game!'
        })
      }
      else {
        return entity.update(updates)
      }
    })
    .then(final => {
      res.send(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
})

router.put('/games/:id', (req, res) => {
  const gameId = Number(req.params.id)
  const updates = req.body

  console.log(`The user that's editting this game has ID = ${req.user.id}`)

  Game.findById(req.params.id)
    .then(entity => {
      return entity.update(updates)
    })
    .then(final => {
      res.send(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
})

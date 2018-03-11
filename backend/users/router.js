const Router = require('express').Router
const Users = require('./model')
const bcrypt = require('bcrypt')
const secret = require('../jwt').secret
const sign = require('../jwt').sign

const router = new Router()

router.post('/users', (req, res) => {
  const user = {
    name: req.body.name,
    password: bcrypt(req.body.password, 10)
  }

  Users
  .create(user)
    .then(entity => {
      res.status(201)
      res.json({
        id: entity.id,
        name: entity.name
      })
    })
    .catch(err => {
      res.status(422)
      res.json({ message: err.message })
    })
  })

  router.post('/login', (req, res) => {
    const user = {
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, 10)
    }

    Users
  	.findOne({
  		where: {
  			name: req.body.name
  		}
  	})
  	.then(entity => {
  		if (bcrypt.compareSync(req.body.password, entity.password)) {
  			res.send({
  				jwt: sign(entity.id),
          message: "correct"
  			})
  		}
  		else {
  			res.status(400).send({
  				message: 'Password was incorrect'
  			})
  		}
  	})
  	.catch(err => {
  		console.error(err)
  		res.status(500).send({
  			message: 'Something went wrong'
  		})
  	})
  })




module.exports = router

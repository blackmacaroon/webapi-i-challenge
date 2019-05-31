// implement your API here
const express = require('express');

const db = require('./data/db.js');

const server = express();

//middleware 
//json() returns its own bodyparser
server.use(express.json());


// server.get('/hobbits', (req, res) => {
//       res.send('Welcome to Hobbiton');
// });

// server.post('/hobbits', (req, res) => {
//       res.status(201).json({ url: '/hobbits', operation: 'POST' });
// });

// server.put('/hobbits', (req, res) => {
//       res.status(200).json({ url: '/hobbits', operation: 'PUT' });
// });

// server.delete('/hobbits', (req, res) => {
//       res.sendStatus(204);
// });

// server.get('/api/users', (req, res) => {
//       res.send ()
// })



//request handler function
server.get('/', (req, res) => {
      res.send('hold on to your butts..');
});

//create endpoints
//create new user
server.post('/api/users', (req, res) => {
      const newUser = req.body;
      // console.log('req body', req.body)
      db 
            .insert(newUser)
            .then(newUser => {
                  res.status(201).json({ newUser }) // 201 'created'
            })
            .catch(err => {
                  res.status(500).json({ err: 'could not create new user'})
            })

});

//get all users
server.get('/api/users', (req, res) => {
      db
            .find()
            .then(users => {
                  res.status(200).json(users)
            })
            .catch(err => {
                  res.status(500).json({ err: "can't find users" })
            })

});

//get specific user by id
server.get('/api/users/:id', (req, res) => {
      const id = req.params.id
      db
            .findById(id)
            .then(user => {
                  res.status(200).json({ user })
            })
            .catch(err => {
                  res.status(500).json({ err: "couldn't find them"})
            })

});

//remove specific user by id
server.delete('/api/users/:id', (req, res) => {
      const id = req.params.id
      db
            .remove(id)
            .then(removedUser => {
                  res.status(204)   // 204 no content
            })
            .catch(err => {
                  res.status(500).json({ err: 'Could not delete' })
            })
});

//edit specific user
server.put('/api/users/:id', (req, res) => {
      const id = req.params.id;
      const updates = req.body;
      db
            .update(id, updates)
            .then(updatedUser => {
                  if (updatedUser) {
                        res.status(200).json(updatedUser);
                  } else {
                        res.status(404).json({ err: 'wrong id' })
                  }
            })
            .catch(err => {
                  res.status(500).json({ err: 'could not edit' })
            })
});


server.listen(8000, () => console.log('api running on port 8000'));
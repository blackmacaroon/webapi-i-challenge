// implement your API here
const express = require('express');

const db = require('./data/db.js');

const server = express();
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

//endpoints
//create new user
server.post('/api/users', (req, res) => {
      db 
            .insert();

});

//get all users
server.get('/api/users', (req, res) => {
      db
            .find();

});

//get specific user by id
server.get('/api/users/:id', (req, res) => {
      db
            .findById();

});

//remove specific user by id
server.delete('/api/users/:id', (req, res) => {
      db
            .remove();
});

//edit specific user
server.put('/api/users/:id', (req, res) => {
      db
            .update();
})


server.listen(8000, () => console.log('api running on port 8000'));
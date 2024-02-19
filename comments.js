// Create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2

const express = require('express');
const app = express();
const comments = require('./commentsData');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




var express = require('express');
const { answer_isTrue } = require('../controllers/answerController');
const { question_bundle } = require('../controllers/questionController');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/questions', question_bundle);

router.get('/answers/:id', answer_isTrue);

module.exports = router;

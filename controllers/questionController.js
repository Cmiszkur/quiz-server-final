var Question = require('../models/Question');

exports.question_bundle = function(req, res, next){
    Question
    .aggregate(
        [
            {$sample: {size: 3}},
            {$lookup: {from: 'answers', localField: 'answer', foreignField: '_id', as: 'answer'}},
            {$project: {"answer.isTrue" : 0}}
        ])
    .exec(function (err, response) {
        if (err) { return next(err); }
        res.set('Content-Type', 'application/json');
        res.json(response);
        console.log(response);
    })
}


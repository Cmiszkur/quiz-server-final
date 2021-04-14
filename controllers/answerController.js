var Answer = require('../models/Answer')

exports.answer_isTrue = function(req, res, next){
    var answerId = req.params['id'];

    Answer
    .findById(answerId, 'isTrue' , function (err, response) {
        if (err) {return next(err); }
        // res.set('Content-Type', 'application/json');
        // res.json(response);
        res.send(response);
        console.log(response)
    })

    // Answer
    // .findOne({_id: ObjectId(answerIdURL)})
    // .exec(function(err, response){
    //     if (err) {return next(err); }
    //     res.set('Content-Type', 'application/json');
    //     res.json({"haha": "lubie placki"});
    //     console.log(answerIdURL);
    // })


}
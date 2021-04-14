var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var Schema = mongoose.Schema;

var QuestionSchema = new Schema(
    {
        content: {type: String, required: true},
        answer: [{type: Schema.Types.ObjectId, ref: 'answer', required: true}]
    }
);
QuestionSchema.plugin(random);

module.exports = mongoose.model('question', QuestionSchema);
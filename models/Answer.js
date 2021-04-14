var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AnswerSchema = new Schema(
    {
        content: {type: String, required: true},
        isTrue: {type: Boolean, required: true}
    }
);

// AnswerSchema
// .virtual('CheckIsTrue')
// .get(function () {
//     return this.isTrue;
// });

module.exports = mongoose.model('answer', AnswerSchema);
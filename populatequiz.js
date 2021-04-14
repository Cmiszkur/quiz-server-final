var userArgs = process.argv.slice(2);

var async = require('async')
var Question = require('./models/Question')
var Answer = require('./models/Answer')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var questions = []
var answers = []

function questionCreate(content, answer, cb) {
    questiondetail = {content:content, answer:answer}

    var question = new Question(questiondetail);

    question.save(function(err) {
        if (err) {
            cb(er, null)
            return
        }
        console.log('New Question: ' + question);
        questions.push(question)
        cb(null, question);
    });
}

function answerCreate(content, isTrue, cb) {
    answerdetail = {content:content, isTrue:isTrue}

    var answer = new Answer(answerdetail);

    answer.save(function (err) {
        if (err) {
            cb(er, null)
            return
        }
        console.log('New Answer: ' + answer);
        answers.push(answer)
        cb(null, answer);
    })
}

function createAnswers(cb) {
    async.series([
        function(callback) {
            answerCreate('trzy', false, callback)
        },
        function(callback) {
            answerCreate('dwie', false, callback)
        },
        function(callback) {
            answerCreate('pięć', false, callback)
        },
        function(callback) {
            answerCreate('cztery', true, callback)
        },
        function(callback) {
            answerCreate('W Europie', true, callback)
        },
        function(callback) {
            answerCreate('W Azji', false, callback)
        },
        function(callback) {
            answerCreate('W Afryce', false, callback)
        },
        function(callback) {
            answerCreate('W Ameryce Południowej', false, callback)
        },
        function(callback) {
            answerCreate('Czarnego', false, callback)
        },
        function(callback) {
            answerCreate('Środziemnego', false, callback)
        },
        function(callback) {
            answerCreate('Żadnego XDD', true, callback)
        },
        function(callback) {
            answerCreate('Bałtyckiego', false, callback)
        },
        function(callback) {
            answerCreate('Englund Gambit', false, callback)
        },
        function(callback) {
            answerCreate('Quenns Gambit', true, callback)
        },
        function(callback) {
            answerCreate('London System', false, callback)
        },
        function(callback) {
            answerCreate('French opening', false, callback)
        },
        function(callback) {
            answerCreate('nerki', true, callback)
        },
        function(callback) {
            answerCreate('procesora', false, callback)
        },
        function(callback) {
            answerCreate('płyty głównej', false, callback)
        },
        function(callback) {
            answerCreate('zasilacza', false, callback)
        },
        function(callback) {
            answerCreate('palec', false, callback)
        },
        function(callback) {
            answerCreate('mleko', false, callback)
        },
        function(callback) {
            answerCreate('śrubokręt', false, callback)
        },
        function(callback) {
            answerCreate('klawiature', true, callback)
        },
        function(callback) {
            answerCreate('wódka', false, callback)
        },
        function(callback) {
            answerCreate('whisky', false, callback)
        },
        function(callback) {
            answerCreate('bourbon', false, callback)
        },
        function(callback) {
            answerCreate('sok pomarańczowy', true, callback)
        },
        function(callback) {
            answerCreate('kilogram', false, callback)
        },
        function(callback) {
            answerCreate('dekagram', false, callback)
        },
        function(callback) {
            answerCreate('miligram', true, callback)
        },
        function(callback) {
            answerCreate('tona', false, callback)
        },
        function(callback) {
            answerCreate('b', false, callback)
        },
        function(callback) {
            answerCreate('c', false, callback)
        },
        function(callback) {
            answerCreate('d', false, callback)
        },
        function(callback) {
            answerCreate('a', true, callback)
        },
    ], cb);
}

function createQuestions(cb) {
    async.parallel([
        function(callback) {
            questionCreate("Ile łap mają koty?", [answers[0], answers[1], answers[2], answers[3]], callback)
        },
        function(callback) {
            questionCreate("Gdzie leży Polska?", [answers[4], answers[5], answers[6], answers[7]], callback)
        },
        function(callback) {
            questionCreate("Do jakiego morza mają dostęp Czesi?", [answers[8], answers[9], answers[10], answers[11]], callback)
        },
        function(callback) {
            questionCreate("Jak nazywa się popularny serial, nazywający się tak samo jak otwarcie w szachach?", [answers[12], answers[13], answers[14], answers[15]], callback)
        },
        function(callback) {
            questionCreate("Czego nie ma komputer?", [answers[16], answers[17], answers[18], answers[19]], callback)
        },
        function(callback) {
            questionCreate("Co można podłączyć do komputera?", [answers[20], answers[21], answers[22], answers[23]], callback)
        },
        function(callback) {
            questionCreate("Co nie jest alkoholem?", [answers[24], answers[25], answers[26], answers[27]], callback)
        },
        function(callback) {
            questionCreate("Co jest lżejsze od grama?", [answers[28], answers[29], answers[30], answers[31]], callback)
        },
        function(callback) {
            questionCreate("Co jest lżejsze od grama?", [answers[28], answers[29], answers[30], answers[31]], callback)
        },
        function(callback) {
            questionCreate("Która litera alfabetu jest pierwsza?", [answers[32], answers[33], answers[34], answers[35]], callback)
        }
    ], cb);
}

async.series([
    createAnswers,
    createQuestions
],
function(err, results) {
    if (err) {
        console.log("FINAL ERR: "+err);
    }else {
        console.log('chyba jest ok: '+questions)
    }
    mongoose.connection.close();
});
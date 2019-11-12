const mongoose = require('mongoose');

//schema de alunas
//representação das características do objeto aluna, que será utilizado no model

//Ex. de tipos de valores: String (texto), Number (Numérico), Date (Data), Booleano (Boolean)

const AlunasSchema = new mongoose.Schema({
    nome: { type: String },
    dateOfBirth: { type: String },
    nasceuEmSp: { type: String },
    livros: [{
        titulo: String,
        leu: String,
    }]
})

//exemplo de schema com campos obrigatórios
//var sampleSchema = new Schema({ name: { type: String, required: true } });

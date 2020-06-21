/* Esquema de criação de posts. 
Necessário atualizar com os parâmetros da imagem, ainda não estou certa de como vou fazer com a imagem.*/

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    date: {
        type: Date,
        default:Date.now,
    },
    category: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    },
    sectionTitle: {
        type: Array,
    },
    sectionText: {
        type: Array,
        required:true,
    },
    url: {
        type: String,
        required:true,
    },
    imageUrl: {
        type: String,
        required: true
    }

});

PostSchema.plugin(mongoosePaginate)

mongoose.model('Post', PostSchema);
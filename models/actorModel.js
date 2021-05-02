'use strict'
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const actorSchema = Schema( {

    //inician esion con este? o con algun mail o algo?
    name:{ type: String,
            unique: true,
            required: true
    },

    password:{
        type: String,
        required: true
    },

    role:{
        type: String,
        required: false
    },

})

mongoose.model('Actor', actorSchema)
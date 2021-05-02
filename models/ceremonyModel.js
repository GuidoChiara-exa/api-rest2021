'use strict'
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ceremonySchema = Schema( {
    id:{ 
        type: String,
        unique: true
    },

    date:{
        type: date,
        unique: true,
    },
    
    type:{
        type: String
    },

    duration:{
        type: String
    },
    
    participants:{
        type: [{
            id_act : String
             }]
    },
    
    reminder:{
        type: String,
        require = false
    },
    
    chat_text:{
        type: String,
        require = false
    }
})

mongoose.model('Ceremony', ceremonySchema)
'use strict'
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const procesoSchema = Schema( {
    name:{ type: String,
            unique: true,
            required: true
    },

    tiempoCeremonia: {
        type: Number,
        
    }

})

mongoose.model('Proceso', procesoSchema)
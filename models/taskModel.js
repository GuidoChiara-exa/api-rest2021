'use strict'
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const taskSchema = Schema( {
    id:{
        type: String,
        unique: true
    },

    name:{
        type: String
    },
    
    nickname:{
        type: String
    },
    
    date:{
        type: date,
    },
    
    description:{
        type: String
    },
    
    associated_message:{
        type: String
    },
    
    subtasks:{
        type: [{
            id_task : String
        }]
    },
    
    expiration_date:{
        type: date
    },
    
    color:{
        type: String
    },
    
    priority:{
        type: String
    },
    
    state:{
        type: String
    },

    actor:{
        type: String
    },
    
    id_previous:{
        type: String,
        required: false
    }
})

mongoose.model('Task', taskSchema)
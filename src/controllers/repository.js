//const moment = require('moment')
//const modify = require('../auxFunctions/createUpdateQuery')
const mongo = require('../dbConnection/mongoCon')


const createRep = async (req, res) => {

    
    const mongoconnection = await mongo.connect()

    const collection =  mongoconnection.collection('user')
    
    await collection.insertOne()


    res.status(200).json({message:'Correctly inserted'})


}

const getReps = async (req, res) => {

    const mongoconnection = await mongo.connect()

    const collection =  mongoconnection.collection('user')
    
    const data = collection.find()
    
    res.status(200).json({data})
   
}

const getRep = async (req, res) => {

  

}

const deleteRep = async (req, res) => {


}

const modifyRep = async (req, res) => {





}

module.exports= {
    createRep,
    getRep,
    getReps,
    deleteRep,
    modifyRep
}
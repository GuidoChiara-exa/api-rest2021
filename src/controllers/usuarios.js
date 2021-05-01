const mongo = require('../dbConnection/mongoCon')


const createUsuario = async (req, res) => {

    
    const mongoconnection = await mongo.connect()

    const collection =  mongoconnection.collection('Actor')
    
    await collection.insertOne()


    res.status(200).json({message:'Correctly inserted'})


}

const getUsuario = async (req, res) => {

    const mongoconnection = await mongo.connect()

    const collection =  mongoconnection.collection('Actor')
    
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
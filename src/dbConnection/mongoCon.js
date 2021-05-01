const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Guichi:hola1234@cluster0.clby5.gcp.mongodb.net/apiBD?retryWrites=true&w=majority";


 async function connect(){
  
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  await client.connect()
  
  const db = client.db('Guarani');
  
  return db;

}

module.exports = {
  
  connect:connect

}



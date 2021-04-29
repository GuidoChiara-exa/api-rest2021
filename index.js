const express = require('express')
const CONFIG = require('./config')

// import routes


const repRoutes = require('./src/routes/repository')



const app = express()

app.set('port', process.env.PORT || 3000);

app.use(express.json())

app.use('/repos', repRoutes)


app.listen(app.get('port'), () => console.log(' Server on '))


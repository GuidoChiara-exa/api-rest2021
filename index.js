const express = require('express')
const CONFIG = require('./config')

// import routes


const repRoutes = require('./src/routes/repository')
//aqui
const Task = require('./models/taskModel')
//aqui
app.post('/api/taskModel', (req, res) => {
    console.log('POST /api/taskModel')
    console.log(req.body)

    let task = new Task()

    task.proyect = req.body.proyect
    task.name = req.body.name
    task.nickname = req.body.nickname
    task.date = req.body.date //mmm mejor que la pasen ellos, porque el año pasado creaba horas random
    task.description = req.body.description
    task.associates_message = req.body.associates_message
    task.subtasks = req.body.subtaks //lo deberian pasar ellos? //necesitan saber los ids
    task.expiration_date = req.body.expiration_date
    task.color = req.body.color
    task.priority = req.body.priority
    task.state = req.body.state
    task.teammember = req.body.teammember
    task.id_previous = null //porque esta creando una
    task.actual = true //porque esta creando una

    task.save(())
    //tenemos que responder con el id que crea mongo

})

const app = express()

app.set('port', process.env.PORT || 3000);

app.use(express.json())

app.use('/repos', repRoutes)


app.listen(app.get('port'), () => console.log(' Server on '))


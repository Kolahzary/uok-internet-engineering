import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())


let message = 'initial message'
app.get('/api/message', (req, res) => {
    res.send({
        text: message
    })
})
app.post('/api/message', (req, res) => {
    message = req.body.text
    res.send({})
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
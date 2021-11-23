import express from 'express';

const app = express()

app.use(express.static('public'))


let message = 'initial message'
app.get('/message', (req, res) => {
    res.send(message)
})
app.post('/message', (req, res) => {
    console.log(req.body)
    // res.send(message)
})

app.get('/hi', (req, res) => {
    res.send("Hi world!")
})

let counter = 1;
app.get('/counter', (req, res) => {
    counter++;
    res.send(''+counter)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
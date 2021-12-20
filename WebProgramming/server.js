import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

const messages = [
    {
        time: '01 April 2016',
        content: 'Hello Friendie :)',
        avatarUserId: 1,
        isOtherMessage: true,
    },
    {
        time: '01 March 2020',
        content: 'Wassup?',
        avatarUserId: 2,
        isOtherMessage: false,
    },
]

const users = [
    {
        id: 1,
        name: 'Aide Chaves',
        status: 'online',
        statusClass: 'online'
    },
    {
        id: 2,
        name: 'My aaa Test User',
        status: 'long time ago',
        statusClass: 'offline'
    },
    {
        id: 3,
        name: 'My Test User 2',
        status: 'long time ago',
        statusClass: 'offline'
    },
]

let message = 'initial message'
app.get('/api/message', (req, res) => {
    res.send({
        text: message
    })
})
app.post('/api/message', (req, res) => {
    console.log(req.body)
    message = req.body.text
    res.send({})
})

app.get('/api/users', (req, res) => {
    res.send(users)
})

app.get('/api/messages', (req, res) => {
    res.send(messages)
})


app.get('/api/currentUser', (req, res) => {
    const randomIndex = Math.round((Math.random() * 3))
    res.send(users[randomIndex])
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
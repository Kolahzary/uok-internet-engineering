import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

const MessageLists = [
    {
        users: [1, 2],
        messages: [
            {
                time: '01 April 2016',
                content: 'Hello Friendie :)',

                senderId: 1,
            },
            {
                time: '01 March 2020',
                content: 'Wassup?',

                senderId: 2,
            },
        ]
    },
    {
        users: [1, 3],
        messages: [
            {
                time: '01 April 2016',
                content: 'Hello Friendie :)',

                senderId: 3,
            },
            {
                time: '01 March 2020',
                content: 'Wassup? dude',

                senderId: 1,
            },
        ]
    }
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

app.post('/api/sendMessage', (req, res) => {
    console.log(req.body)
    const from = req.body.from
    const target = req.body.target
    const text = req.body.text

    let messageList = MessageLists.find(x => 
        (x.users.includes(from) && x.users.includes(target))
    )
    if (messageList === undefined) {
        messageList = {
            users: [from, target],
            messages: []
        }

        MessageLists.push(messageList)
    }

    messageList.messages.push({
        time: new Date().toISOString(),
        content: text,
        senderId: from,
    })

    console.log([messageList, MessageLists])

    res.send({})
})

app.get('/api/users', (req, res) => {
    res.send(users)
})

app.get('/api/messages', (req, res) => {
    const me = parseInt(req.query.me, 10)
    const other = parseInt(req.query.other, 10)

    let messageList = MessageLists.find(x => 
        (x.users[0] == me && x.users[1] == other) ||
        (x.users[1] == me && x.users[0] == other)
    )

    if (messageList === undefined) {
        messageList = {
            users: [
                me,
                other
            ],
            messages: [
                {
                    time: '01 April 2016',
                    content: 'You haven\'t sent me any messages yet!',

                    senderId: me,
                }
            ]
        }
    }

    res.send(messageList.messages)
})


app.get('/api/currentUser', (req, res) => {
    const randomIndex = Math.round((Math.random() * 3))
    res.send(users[randomIndex])
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
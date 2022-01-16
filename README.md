# University of Kurdistan - Internet Engineering

References and sample project for Internet Engineering course in University of Kurdistan.

## Layer 4 - Socket Programming (TCP/UDP)

### Tools
- **netcat** (often abbreviated to `nc`) is a computer networking utility for reading from and writing to network connections using TCP or UDP.

### Presentation
- [Download PowerPoint Slides](SocketProgramming/slides.pdf)
- [Download PDF Slides](SocketProgramming/slides.pdf)

### Other References
- [TutorialsPoint - Python - Network Programming](https://www.tutorialspoint.com/python/python_networking.htm)
- [PythonProgramming - Sockets Tutorial](https://pythonprogramming.net/sockets-tutorial-python-3/)


## Layer 7 - HTTP
Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. (from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP))

### Tools
- Apache2
- NGINX
- Microsoft IIS
- Express.js

### Presentation
- http://namho102.github.io/http-presentation/

### Project
- [Bootstrap Chat Template](https://www.bootdey.com/snippets/view/chat-app)

## Source Control & DevOps

### Tools
- Project Management
    - [Atlassian Jira](https://www.atlassian.com/software/jira)
    - [Trello](https://trello.com/)
    - [Taskulu](https://taskulu.com/)
- Source Control
    - [Atlassian BitBucket](https://www.atlassian.com/software/bitbucket)
    - [GitHub](https://github.com/)
    - [GitLab](https://about.gitlab.com/)
    - [Microsoft Azure Devops (Visual Studio Teams)](https://azure.microsoft.com/en-us/services/devops/)
- Documentation
    - [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
    - [Atlassian Confluence](https://www.atlassian.com/software/confluence)

### References
- [Git-SCM Book](http://git-scm.com/book/en/v2)
- [GitFlow](http://datasift.github.io/gitflow/IntroducingGitFlow.html)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)


## Final Project

### Web

Create a todo-list management web-application with following features:
- Create ( create new item )
- Read ( show a list of created items )
- Update ( click checkbox and save done/undone state )
- Delete ( delete todo item )
- Search ( search a word in list items )
- Filter ( show only done items / show all items )

These concepts should be used in your project:
- Frontend / API / Backend ( todo data should be saved on server and front-end should access them using API )
- Ajax / SinglePage front-end
- Git + GitHub
- Good documentation on README.md file

Optional features: (implement following features if you want more score)
- Implement an authentication mechanism which each user has own account and can login and manage his records on multiple devices
- Use frameworks like vue.js, angular, react, etc...
- Database or File ( todo data should be stored permanently, nothing should be cleared after restarting server & client )

#### Web Results

- [Matin Moradi](https://github.com/MatinMorrradi/Matin-s-Todo-List)

### Socket
- Checkpoint 1: Single Client Chat (You got it!)
  - Inputs from server console should be printed on client console
  - Inputs from client console should be printed on server console
- Checkpoint 2: Multi-User Chat (You’re a great student)
  - First take own username from user
  - Then take target username
  - Create a dictionary of username → connection on server
  - Users should be able to start a bi-directional chat together
- Checkpoint 3: Users list (You’re a pro programmer!)
    - Create a specific request which returns list of online usernames
    - Create a UI to show users list and start a chat after clicking on a
username

#### Socket Results

- [Eghbal Amini Nejad](https://github.com/eqba1/erwin)
- [Mo\`men Hamaveisi](https://github.com/momen7899/SocketProgramming)
- [Hamed Azizi](https://github.com/H-Azizi/socket-Programming-chat-room)
- [Ramyar Seydi](https://github.com/lramyarl/Socket-programming-in-C-)
- [Edris Lotfpouri](https://github.com/GoodmanPole/GoodmanChatPole)
- [Aryas Karimi](https://github.com/Aryas1378/socket)
- [Parvin Hoseini & Pouya Haghighat](https://github.com/hoseini98/SI)
- [Ahmad Salehi](https://github.com/AhmadSalehi22/SocketProject)
- [Saivan Soleiman Baigi](https://github.com/sayvanbaigi/imple.chat.app)
- [Mohammad Hosein Totoonchi & Sahand Saed](https://github.com/mhtutunchi/ChatRoom)
- [Matin Moradi](https://github.com/MatinMorrradi/MatinGap)
- [Arash Ahmadi](https://github.com/Arash-san/Chat-Application)


## Other References
- [OSI Model Representation on GitHub](https://github.com/vald-phoenix/the-osi-model)

## TODO

- Migrade front-end of web-programming project to a web framework (Angular, Vue, React)
- Add photo sending feature to web-programming project
- Use websocket instead of http for web-programming project
- Add todo list definition to readme

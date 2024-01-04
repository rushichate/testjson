const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults()
require("dotenv").config()

const PORT = process.env.PORT

server.use(middleware)
server.use(jsonServer.bodyParser)

server.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})

server.use(router)

server.get("/",(req,res)=>{
    res.status(200).json("Welcome to json server")
})

server.listen(PORT,()=>{
    console.log("server is running")
})
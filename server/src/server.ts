import express, {type Request, type Response} from "express";

const app = express()
const PORT = 8000

app.use(express.json())

app.get("/", (req:Request, res:Response) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
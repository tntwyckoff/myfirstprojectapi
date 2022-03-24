import express, {Request, Response, Application} from 'express';

const app:Application = express();
const PORT = process.env.PORT || 8000;


app.get("/", (req:Request, res:Response) => {
    console.log(`REQ: <root>`); 
    res.send("Hello Typescript with Node.js!");
});

app.get("*", function (req, res) {
    console.log(`REQ: ${req.url}`); 
    res.send(`You requested: ${req.url}`);
});

app.listen(PORT, ():void => {
    console.log(`Hello world service listening at [https://localhost:${PORT}]`); 
});
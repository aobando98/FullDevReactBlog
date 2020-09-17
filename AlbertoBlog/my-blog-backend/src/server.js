import express from 'express';
import bodyParser from 'body-parser';

//We use express as our server for the app
const app = express();

//Reads the contents from the body with JSON formats
app.use(bodyParser.json());

//Goes to /hello page for get methods
app.get(`/hello`, (req, res) => res.send('Hello!'));
//Goes to the /hello page for post methods
app.post(`/hello`, (req, res) => res.send(`Hello ${req.body.name}!`));

//Creates localhost that listens in port 8000
app.listen(8000, () => console.log('Listeting on port 8000'));
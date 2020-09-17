import express from 'express';
import bodyParser from 'body-parser';

//Fake data base
const articlesInfo = {
    'learn-react': {
        upvotes: 0,
    },
    'learn-node': {
        upvotes: 0,
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
    },
}

//We use express as our server for the app
const app = express();

//Reads the contents from the body with JSON formats
app.use(bodyParser.json());

//Upvoting articles
app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`);
});

//Creates localhost that listens in port 8000
app.listen(8000, () => console.log('Listeting on port 8000'));
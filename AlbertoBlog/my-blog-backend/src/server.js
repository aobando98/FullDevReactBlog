import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';

//We use express as our server for the app
const app = express();

//Reads the contents from the body with JSON formats
app.use(bodyParser.json());

//Uses Database
app.get('/api/articles/:name', async (req, res) => {
    try {
        const articleName = req.params.name;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');
    
        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        res.status(200).json(articleInfo);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
    
})

//Upvoting articles
app.post('/api/articles/:name/upvote', (req, res) => {
    //Gets name from url
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`);
});

//Comenting articles
app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({ username, text });

    res.status(200).send(articlesInfo[articleName]);
});

//Creates localhost that listens in port 8000
app.listen(8000, () => console.log('Listeting on port 8000'));
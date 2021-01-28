const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const uri = "mongodb+srv://dbUser:dbUserPassword@cluster0.x7kwa.mongodb.net/ExampleAppDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        throw "MongoConnectionError"
    }

    const Posts = client.db("ExampleAppDb").collection("Posts");

    const port = process.env.PORT || 5000;

    const app = express()

    app.use(express.json());
    app.use(cors());


    app.get('/api/Posts', async (request, response) => {
        let documentCursor = Posts.find();
        let results = []
        await documentCursor.forEach((document) => {results.push(document)});
        if (results.length < 1) {
            console.error("No Docs");
            response.sendStatus(500);
        }
        else {
            response.status(200);
            response.send(results);
        }
    });

    app.post('/api/Posts', (request, response) => {
        Posts.insertOne(request.body, (error) => {
            if (error) {
                console.error(error);
                response.sendStatus(500);
            }
            else {
                response.sendStatus(200);
            }
        })
    });

    app.use('/*', (request, response) => {
        response.status(404)
        response.end();
    });

    app.listen(port, () => console.log(`Server now running on port ${port}!`));
});
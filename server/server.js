const express = require('express');

const port = process.env.PORT || 5000;

const app = express()

app.use(express.json());

app.use('/', (request, response) => {
    response.send(`You sent me:\n${JSON.stringify(request.body).length == 0 ? 'Nothing!' : JSON.stringify(request.body)}`);
});

app.listen(port, () => console.log(`Server now running on port ${port}!`));
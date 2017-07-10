const express = require('express');

const app = express();

app.get('/', (request,response) => {
    response.send('ayy bb');
});

app.listen(3000);


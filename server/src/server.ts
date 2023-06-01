import express from 'express';

const app = express();

app.get('/users',(request, response) => {
    console.log('Listagem de usuários');

    //json
    response.json([
        'Daniel',
        'Diego',
        'Pedro',
        'Joao'
    ]);
});

app.listen(3333);
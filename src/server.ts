import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listando usuários');

    response.json([
        'Paulo',
        'Diego',
        'Bruno',
        'Heitor',
        'Carlos'
    ]);
});

app.listen(3333);
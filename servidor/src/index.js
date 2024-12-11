const express = require('express');
const personaRoutes = require ('./personaRoutes')

const app = express();
app.use(express.json())


app.use('/', personaRoutes);

const port = 3001;

app.listen(port, () => console.log('listeing on port' + port));
/**
 * Server initialization
 */

/**
 * Dependencies
 */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const dataBase = require('./dataBase').getInstance();
const schema = require('./graphql/book');
const graphqlHTTP = require('express-graphql');
const MW = require('./helpers/middleware');

dataBase.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/graphql', MW, graphqlHTTP({
   schema: schema,
   graphiql: true
}));

server.listen(process.env.PORT || 3000, () => {
   console.log('Listening...');
});

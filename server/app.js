const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose
  .connect(
    `mongodb+srv://tonyxuan2023:${process.env.PASSWORD_MONGODB}@cluster0.7iwe822.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('Connected!'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});

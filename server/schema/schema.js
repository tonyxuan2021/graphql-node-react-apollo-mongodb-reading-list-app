const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data

let books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
  { name: 'The FInal EMpire', genre: 'Fantasy', id: '2' },
  { name: 'The Long Earch', genre: 'Sci-Fi', id: '3' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      // expect user to pass in a id when query for a single book
      args: { id: { type: GraphQLString } },
      // when receive the query fires the resolve function, this is the code to get data from db / other source
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

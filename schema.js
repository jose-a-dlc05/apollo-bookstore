const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    authors: [Author!]!
    author(id: ID!): Author!
    publishers: [Publisher!]!
    publisher(id: ID!): Publisher! 
    books: [Book!]!
    book(id: ID!): Book!
  }
  
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Publisher {
    id: ID!
    name: String! 
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
    publisher: Publisher!
    authors: [Author!]!
  }
`

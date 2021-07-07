const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Book {
    id: ID
    name: String
    generated: String
    author: Author
  }
  type Author {
    id: ID!
    name: String
    age: Int
  }
  #root type
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }
`;
module.exports = typeDefs;

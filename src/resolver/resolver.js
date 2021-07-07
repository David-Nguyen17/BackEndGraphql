const books = [
  {
    id: 1,
    name: "The name of me",
    generated: "Advanture",
    authorId: 1,
  },
  {
    id: 2,
    name: "The name of me two",
    generated: "Education",
    authorId: 2,
  },
  {
    id: 3,
    name: "The name of me",
    generated: "Advanture",
    authorId: 3,
  },
  {
    id: 4,
    name: "The name of me two",
    generated: "Education",
    authorId: 4,
  },
];
const authors = [
  {
    id: 1,
    name: "John Cena",
    age: 40,
  },
  {
    id: 2,
    name: "Justin bibber",
    age: 34,
  },
  {
    id: 3,
    name: "Taylor Swift",
    age: 29,
  },
  {
    id: 4,
    name: "Logan Paul",
    age: 25,
  },
];
const resolver = {
  Query: {
    books: () => books,
    authors: () => authors,
    book: (parent, args) =>
      books.find((book) => book.id.toString() === args.id),
    author: (parent, args) =>
      authors.find((author) => author.id.toString() === args.id),
  },
};

module.exports = resolver;

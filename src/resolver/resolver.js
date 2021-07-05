const resolver = {
  Query: {
    books: () => [
      {
        id: 1,
        name: "The name of me",
        generated: "Advanture",
      },
      {
        id: 2,
        name: "The name of me two",
        generated: "Education",
      },
    ],
  },
};

module.exports = resolver;

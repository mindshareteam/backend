const Query = require("./queries");
const Mutation = require("./mutations");

const resolvers = {
  Query,
  Mutation,
  Post: {
    author: ({ id }, args, context) => {
      return context.prisma.post({ id }).author();
    }
  },
  User: {
    posts: ({ id }, args, context) => {
      return context.prisma.user({ id }).posts();
    }
  }
};

module.exports = resolvers;

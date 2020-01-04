import Query from "./queries";
import Mutation from "./mutations";

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

export default resolvers;

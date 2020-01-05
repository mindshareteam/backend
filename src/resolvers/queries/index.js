const Query = {
  feed: (parent, args, context) => {
    return context.prisma.posts({ where: { published: true } });
  },
  filterPosts: (parent, { searchString }, context) => {
    return context.prisma.posts({
      where: {
        OR: [
          {
            title_contains: searchString
          },
          {
            content_contains: searchString
          }
        ]
      }
    });
  },
  post: (parent, { id }, context) => {
    return context.prisma.post({ id });
  }
};

module.exports = Query;

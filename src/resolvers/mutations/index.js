const Mutation = {
  signupUser: (parent, { email, name }, context) => {
    return context.prisma.createUser({
      email,
      name
    });
  },
  createDraft: (parent, { title, content, authorEmail }, context) => {
    return context.prisma.createPost({
      title,
      content,
      author: { connect: { email: authorEmail } }
    });
  },
  publish: (parent, { id }, context) => {
    return context.prisma.updatePost({
      where: { id },
      data: { published: true }
    });
  },
  deletePost: (parent, { id }, context) => {
    return context.prisma.deletePost({ id });
  }
};

module.exports = Mutation;

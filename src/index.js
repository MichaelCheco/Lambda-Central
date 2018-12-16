const { GraphQLServer } = require('graphql-yoga');
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    track: 'Web Development',
    title: 'Learn GraphQL!',
    description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.'
}]
const typeDefs =`
  type Query {
      info: String!
      feed: [Link!]!
  }
  type Link {
      id: ID!
      track: String!
      title: String!
      description: Post!

      type Post {
          content: String!
      }
  }
`

const resolvers = {
    Query: {
        info: () => `This is the API of my Lambda Central project`,
        feed: () => links
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
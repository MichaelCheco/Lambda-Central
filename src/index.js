const { GraphQLServer } = require('graphql-yoga');
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    track: 'Web Development',
    title: 'Learn GraphQL!',
    description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.'
}]
let idCount = links.length

const resolvers = {
    Query: {
        info: () => `This is the API of my Lambda Central project`,
        feed: () => links,
    },
    Mutation: {
        post: (root, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            }
            links.push(link)
            return link
        }
    }
 
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
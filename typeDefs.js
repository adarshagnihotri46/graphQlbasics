export const typeDefs  = `#graphql
type Author {
    id: ID!,
    name: String!,
    #books:String
}

type Books {
    id: ID!,
    title: String!,
    publisher: String,
    #author:String
}
  
type Query {
    authors: [Author],
    books: [Books]
}
`

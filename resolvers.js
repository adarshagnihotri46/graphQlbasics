export const resolvers = {
    Query: {
        authors: () => {
            return [{id:1, name:"Adarsh"}]
        },

        books: () => {
            return[{id:1, title:"Mockingbird"}]
        }
    }

}
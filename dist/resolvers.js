import { Book } from "./models/Books.js";
export const resolvers = {
    Query: {
        books: async () => {
            return await Book.find();
        },
    },
    Mutation: {
        createBook: async () => {
            const send = { title: "Graphql tut", author: "Apollo" };
            const book = await Book.create(send);
            return book;
        }
    }
};

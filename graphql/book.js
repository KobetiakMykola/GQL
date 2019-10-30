"use strict";

/**
 * GQL
 */

/**
 * Dependencies
 */
const bookServices = require('../services/book'),
    Graphql = require('graphql'),
    bookType = new Graphql.GraphQLObjectType({
        name: 'Book',
        fields: {
            id: {type: new Graphql.GraphQLNonNull(Graphql.GraphQLString)},
            title: {type: new Graphql.GraphQLNonNull(Graphql.GraphQLString)},
        }
    }),
    queryType = new Graphql.GraphQLObjectType({
        name: 'Query',
        description: 'query book',
        fields: {
            getBooks: {
                type: new Graphql.GraphQLList(bookType),
                args: {
                    id: {type: Graphql.GraphQLString}
                },
                resolve: (source, args) => {
                    return bookServices.getBooks(args);
                }
            }
        }
    }),
    mutationType = new Graphql.GraphQLObjectType({
        name: 'Mutation',
        description: 'Mutation of the books',
        fields: {
            addBook: {
                type: bookType,
                args: {
                    title: {
                        type: Graphql.GraphQLString
                    },
                },
                resolve: async (source, args) => {
                    return await bookServices.createBook(args)
                }
            },
            deleteBook: {
                type: bookType,
                args: {
                    id: {type: Graphql.GraphQLString}
                },
                resolve: async (source, args) => {
                    await bookServices.deleteBook(args);
                }
            },
            updateBook: {
                type: bookType,
                args: {
                    id: {type: Graphql.GraphQLString},
                    title: {type: Graphql.GraphQLString}
                },
                resolve: async (source, args) => {
                    await bookServices.updateBook(args);
                }
            }
        }
    });

module.exports = new Graphql.GraphQLSchema({
    query: queryType,
    mutation: mutationType
});
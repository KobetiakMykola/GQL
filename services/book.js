"use strict";

/**
 * Book database access object
 */

/**
 * Dependencies
 */
const dataBase = require('../dataBase').getInstance();

/**
 * Create new book
 */
async function createBook(data) {
    try {
        if (!data.title) throw new Error('Field title is required');
        return await dataBase.getModel('Books').create({title: data.title});
    } catch (e) {
        return e
    }
}

/**
 * Get all books or book by id
 */
async function getBooks(data) {
    try {
        let books;
        if (Object.keys(data).length !== 0){
            books = await dataBase.getModel('Books').findAll({where:{id: data.id}});
        }else {
            books = await dataBase.getModel('Books').findAll();
        }
        if (!books.length) throw new Error('Sorry, no books yet');
        return  books
    } catch (e) {
        console.log(e);
        return e
    }
}

/**
 * Update book
 */
async function updateBook(data) {
    try {
        return await dataBase.getModel('Books').update({title: data.title}, {where: {id: data.id}});
    } catch (e) {
        return e
    }
}

/**
 * Delete book
 */
async function deleteBook(data) {
    try {
        return await dataBase.getModel('Books').destroy({where: {id: data.id}});
    } catch (e) {
        return e
    }
}

/**
 * Exports
 */
module.exports = {
    createBook,
    getBooks,
    updateBook,
    deleteBook
};


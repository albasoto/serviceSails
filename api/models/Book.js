/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id : { type: 'integer', primaryKey: true, autoIncrement: true },

    title : { type: 'string' },

    isbn : { type: 'string' },

    pages : { type: 'integer' },

    authors: { collection: 'author', via: 'books' },

    editorial: { model: 'editorial' },

    copies: { collection: 'copy', via: 'book' }
  }
};


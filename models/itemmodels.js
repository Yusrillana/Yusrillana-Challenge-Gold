const knex = require('../database/migrations/db');

const getAllItems = () => {
  return knex('items').select('*');
};

const getItemById = (id) => {
  return knex('items').where({ id }).first();
};

const createItem = (item) => {
  return knex('items').insert(item).returning('*');
};

const updateItem = (id, item) => {
  return knex('items').where({ id }).update(item).returning('*');
};

const deleteItem = (id) => {
  return knex('items').where({ id }).del();
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
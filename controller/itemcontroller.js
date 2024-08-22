const Item = require('../models/itemmodels.js');

const getItems = async (req, res) => {
    const items = await Item.getAllItems();
    res.json(items);
};

const getItem = async (req, res) => {
    const item = await Item.getItemById(req.params.id);
    res.json(item);
};

const createItem = async (req, res) => {
    const newItem = await Item.createItem(req.body);
    res.status(201).json(newItem);
};

const updateItem = async (req, res) => {
    const updatedItem = await Item.updateItem(req.params.id, req.body);
    res.json(updatedItem);
};

const deleteItem = async (req, res) => {
    await Item.deleteItem(req.params.id);
    res.status(204).send();
};

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
};

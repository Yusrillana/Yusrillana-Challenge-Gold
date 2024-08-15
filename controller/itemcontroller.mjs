import { Item } from '../models/itemModel.mjs';

// Mendapatkan semua item
export const getItems = (req, res) => {
  const allItems = Item.getAll();
  res.json(allItems);
};

// Mendapatkan item berdasarkan ID
export const getItemById = (req, res) => {
  const itemId = parseInt(req.params.id); // Mengambil ID dari parameter URL
  const item = Item.getById(itemId);

  if (item) {
    res.json(item); // Jika item ditemukan, kirimkan sebagai respons JSON
  } else {
    res.status(404).send('Item not found'); // Jika tidak ditemukan, kirim status 404
  }
};

// Membuat item baru
export const createItem = (req, res) => {
  const newItem = Item.create(req.body); // Membuat item baru dengan data dari body permintaan
  res.status(201).json(newItem); // Kirim item baru sebagai respons JSON dengan status 201 (Created)
};

// Memperbarui item
export const updateItem = (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = Item.update(itemId, req.body); // Memperbarui item dengan data dari body permintaan

  if (updatedItem) {
    res.json(updatedItem); // Jika berhasil diperbarui, kirimkan item yang sudah diperbarui
  } else {
    res.status(404).send('Item not found');
  }
};

// Menghapus item
export const deleteItem = (req, res) => {
  const itemId = parseInt(req.params.id);
  const deletedItem = Item.delete(itemId);

  if (deletedItem) {
    res.json(deletedItem); // Jika berhasil dihapus, kirimkan item yang dihapus
  } else {
    res.status(404).send('Item not found');
  }
};

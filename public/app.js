const API_URL = 'http://localhost:5000/api/items';

document.addEventListener('DOMContentLoaded', () => {
  fetchItems();
  document.getElementById('save-item').addEventListener('click', () => {
    const itemId = document.getElementById('item-id').value;
    const itemName = document.getElementById('item-name').value;
    const itemDescription = document.getElementById('item-description').value;

    if (itemId) {
      updateItem(itemId, { name: itemName, description: itemDescription });
    } else {
      createItem({ name: itemName, description: itemDescription });
    }
  });
});

function fetchItems() {
  fetch(API_URL)
    .then(response => response.json())
    .then(items => {
      const itemList = document.getElementById('item-list');
      itemList.innerHTML = '';
      items.forEach(item => {
        itemList.innerHTML += `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>
              <button class="btn btn-warning btn-sm" onclick="editItem(${item.id})">Edit</button>
              <button class="btn btn-danger btn-sm" onclick="deleteItem(${item.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    });
}

function createItem(item) {
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .then(() => {
      fetchItems();
      clearForm();
      $('#itemModal').modal('hide');
    });
}

function updateItem(id, item) {
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .then(() => {
      fetchItems();
      clearForm();
      $('#itemModal').modal('hide');
    });
}

function deleteItem(id) {
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(() => fetchItems());
}

function editItem(id) {
  fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .then(item => {
      document.getElementById('item-id').value = item.id;
      document.getElementById('item-name').value = item.name;
      document.getElementById('item-description').value = item.description;
      $('#itemModal').modal('show');
    });
}

function clearForm() {
  document.getElementById('item-form').reset();
  document.getElementById('item-id').value = '';
}

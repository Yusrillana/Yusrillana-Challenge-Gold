// Ambil referensi ke elemen-elemen penting
const expenseForm = document.querySelector('.add-expense');
const incomeForm = document.querySelector('.add-money-in');
const tableBody = document.tableBody('.current-finances table tbody');

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2,
        '0'); // Bulan dimulai dari 0   

    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Isi input tanggal dengan tanggal hari ini saat halaman dimuat
document.getElementById('expense-date').value = getCurrentDate();
document.getElementById('income-date').value = getCurrentDate()

// Fungsi untuk menambahkan baris baru ke tabel
function addRowToTable(amount, date, paymentMethod, type, notes, addType) {
    const newRow = tableBody.insertRow();

    // Hitung nomor baris baru (No)
    const existingRows = tableBody.querySelectorAll('tr');
    const newRowNumber = existingRows.length + 1;

    const cells = [
        newRowNumber, 
        amount,
        date,
        paymentMethod,
        type,
        notes,
        addType,
        ''
    ];

    cells.forEach(cellData => {
        const newCell = newRow.insertCell();
        newCell.textContent = cellData;
    });

}
expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const amount = expenseForm.querySelector('input[type="number"]').value;
    const notes = expenseForm.querySelector('input[type="text"]').value;
    const paymentMethod = expenseForm.querySelector('input[name="payment-method-expense"]:checked').value;
    const expenseType = expenseForm.querySelector('input[name="expense-type"]:checked').value;

    addRowToTable(amount, paymentMethod, expenseType, notes, 'Expenses');
});

// Event listener untuk form "Add Money In"
incomeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const amount = incomeForm.querySelector('input[type="number"]').value;
    const notes = incomeForm.querySelector('input[type="text"]').value;
    const paymentMethod = incomeForm.querySelector('input[name="payment-method-income"]:checked').value;


    addRowToTable(amount, paymentMethod, '-', notes, 'Income');

});



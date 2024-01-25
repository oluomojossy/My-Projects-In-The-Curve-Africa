// References to DOM elements
const invoiceDate = document.getElementById('invoiceDate');
const totalAmount = document.getElementById('totalAmount');
const addItemButton = document.getElementById('addItem');
const itemsContainer = document.querySelector('.items');
const printInvoiceButton = document.getElementById('printInvoice');


// Initialize the invoice date
const currentDate = new Date();
invoiceDate.textContent = currentDate.toDateString();

// Initialize the item count
let itemCount = 0;

// Function to add a new item to the invoice
function addItem() {
    itemCount++;
    const item = document.createElement('div');
    item.innerHTML = `
        <input type="text" class="item-description" placeholder="Item description">
        <input type="number" class="item-amount" placeholder="Amount">
        <button class="remove-item">Remove</button>
    `;
    itemsContainer.appendChild(item);

    // Add an event listener to the remove button
    const removeButton = item.querySelector('.remove-item');
    removeButton.addEventListener('click', () => {
        itemsContainer.removeChild(item);
        updateTotal();
    });

    updateTotal();
}

// Function to calculate and update the total amount
function updateTotal() {
    let total = 0;
    const itemAmounts = document.querySelectorAll('.item-amount');
    itemAmounts.forEach((amountInput) => {
        const amount = parseFloat(amountInput.value) || 0;
        total += amount;
    });
    totalAmount.textContent = total.toFixed(2);
}

// Add a click event listener to the "Add Item" button
addItemButton.addEventListener('click', addItem);

// Initial call to add an empty item
addItem();



// Function to print the invoice
function printInvoice() {
    // Create a copy of the invoice to print
    const printWindow = window.open('', '', 'width=600,height=600');
    const printDocument = `
        <html>
            <head>
                <title>Print Invoice</title>
                <link rel="stylesheet" type="text/css" href="style.css">
            </head>
            <body>
                <div class="invoice">
                    <div class="header">
                        <h1>Invoice</h1>
                        <p>Date: <span>${invoiceDate.textContent}</span></p>
                    </div>
                    <div class="items">
                        ${itemsContainer.innerHTML}
                    </div>
                    <div class="total">
                        <p>Total: $<span>${totalAmount.textContent}</span></p>
                    </div>
                </div>
            </body>
        </html>
    `;
    printWindow.document.open();
    printWindow.document.write(printDocument);
    printWindow.document.close();

    // Print the window
    printWindow.print();
    printWindow.close();
}

// Add a click event listener to the "Print Invoice" button
printInvoiceButton.addEventListener('click', printInvoice);

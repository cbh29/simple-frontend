const addBtn = document.getElementById('addBtn');
const addBtn1 = document.getElementById('addBtn1');
const container = document.getElementById('list-items');
const container1 = document.getElementById('list-items1');
const totalItems = document.querySelector('.total-items');
const totalItems1 = document.querySelector('.total-items1');
const rightBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');

addBtn.addEventListener('click', function() {
    const nameInput = document.getElementById('fruits').value;
    const qtyInput = document.getElementById('qty').value;

    const newDiv = createFruitDiv(nameInput, qtyInput);
    container.appendChild(newDiv);

    // Clear input values
    document.getElementById('fruits').value = '';
    document.getElementById('qty').value = '';

    // Update the total number of items in basketA
    const basketAItems = container.querySelectorAll('.fruit-items').length;
    totalItems.textContent = basketAItems.toString();

    // Add event listeners to the new div
    addDivEventListeners(newDiv);
});

addBtn1.addEventListener('click', function() {
    const nameInput = document.getElementById('fruits1').value;
    const qtyInput = document.getElementById('qty1').value;

    const newDiv = createFruitDiv(nameInput, qtyInput);
    container1.appendChild(newDiv);

    // Clear input values
    document.getElementById('fruits1').value = '';
    document.getElementById('qty1').value = '';

    // Update the total number of items in basketB
    const basketBItems = container1.querySelectorAll('.fruit-items').length;
    totalItems1.textContent = basketBItems.toString();

    // Add event listeners to the new div
    addDivEventListeners(newDiv);
});

function createFruitDiv(name, qty) {
    const newDiv = document.createElement('div');
    const newP1 = document.createElement('p');
    const newP2 = document.createElement('p');
    const newBtn = document.createElement('button');

    newP1.textContent = name;
    newP2.textContent = `Qty: ${qty}`;
    newBtn.textContent = 'x';
    newDiv.classList.add('fruit-items');
    newP1.classList.add('fruit-name');
    newP2.classList.add('fruit-qty');
    newBtn.classList.add('del');
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newBtn);

    return newDiv;
}

function addDivEventListeners(div) {
    div.addEventListener('click', function() {
        if (!div.classList.contains('selected')) {
            div.classList.add('selected');
            div.style.border = '1px solid #000';
        } else {
            div.classList.remove('selected');
            div.style.border = '';
        }
    });

    const deleteBtn = div.querySelector('.del');
    deleteBtn.addEventListener('click', function() {
        const parentContainer = div.parentNode;
        parentContainer.removeChild(div);

        if (parentContainer === container) {
            // Update the total number of items in basketA
            const basketAItems = container.querySelectorAll('.fruit-items').length;
            totalItems.textContent = basketAItems.toString();
        } else if (parentContainer === container1) {
            // Update the total number of items in basketB
            const basketBItems = container1.querySelectorAll('.fruit-items').length;
            totalItems1.textContent = basketBItems.toString();
        }
    });
}

// Move selected div from Basket A to Basket B
rightBtn.addEventListener('click', function() {
    const selectedDiv = container.querySelector('.selected');

    container1.appendChild(selectedDiv);
    selectedDiv.classList.remove('selected');
    selectedDiv.style.border = '';

    // Update total items
    const basketAItems = container.querySelectorAll('.fruit-items').length;
    totalItems.textContent = basketAItems.toString();

    const basketBItems = container1.querySelectorAll('.fruit-items').length;
    totalItems1.textContent = basketBItems.toString();
});

// Move selected div from Basket B to Basket A
leftBtn.addEventListener('click', function() {
    const selectedDiv = container1.querySelector('.selected');

    container.appendChild(selectedDiv);

    selectedDiv.classList.remove('selected');
    selectedDiv.style.border = '';

    // Update total items
    const basketAItems = container.querySelectorAll('.fruit-items').length;
    totalItems.textContent = basketAItems.toString();

    const basketBItems = container1.querySelectorAll('.fruit-items').length;
    totalItems1.textContent = basketBItems.toString();
});

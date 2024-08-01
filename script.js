document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    if (item && quantity) {
        const orderList = document.getElementById('order-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${item} - Quantity: ${quantity}`;
        orderList.appendChild(listItem);

        document.getElementById('item').value = '';
        document.getElementById('quantity').value = '';
    }
});

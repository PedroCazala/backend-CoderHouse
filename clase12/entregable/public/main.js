const socket = io.connect();

function addProduct(e) {
    const product = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        img: document.getElementById('img').value
    };
    document.getElementById('title').value = ''
    document.getElementById('price').value = ''
    document.getElementById('img').value = ''
    socket.emit('newProduct', product);
    return false;
}
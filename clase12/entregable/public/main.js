const socket = io.connect();
// const moment = require('moment')

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
function addMessage(e) {
    const message = {
        username: document.getElementById('username').value,
        texto: document.getElementById('texto').value,
        date: moment().format('DD-MM-YYYY HH:mm:ss'),
        laal:'lala'
    };
    console.log(message)
    document.getElementById('username').value = ''
    document.getElementById('texto').value = ''
    
    socket.emit('newMessage', message);
    return false;
}


function render(products) {
    if(products[0]){
        const crearTabla =
                    `
                    <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Imagen</th>
                            </tr>
                        </thead>
                        <tbody id="productsTable">
                        </tbody>
                    </table>
                    `
        document.getElementById("table").innerHTML = crearTabla;
        const html = products
            .map((product, index) => {
                return `
                    <tr>
                        <th scope="row">${product.id}</th>
                        <td>${product.title}</td>
                        <td>$${product.price}</td>
                        <td><img src="${product.img}" class="card-img-top" alt="${product.title}" style="max-width:100px;"></td>
                    </tr>
                `;
            })
            .join(" ");
        document.getElementById("productsTable").innerHTML = html;
    }

}
socket.on("products", function (products) {
    render(products);
});

function render(messages) {
    if(messages[0]){
        
        const html = messages
            .map((message, index) => {
                return `
                    <div>${message.username}</div>
                `;
            })
            .join(" ");
        document.getElementById("messageContainer").innerHTML = html;
    }

}
socket.on("messages", function (messages) {
    render(messages);
});
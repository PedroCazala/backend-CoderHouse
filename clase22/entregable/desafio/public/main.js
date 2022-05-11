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
    //si uso moment se actualiza la pagina, por que puede ser?
    let now = new Date()
    const newMessage = {
        mail: document.getElementById('mail').value,
        text: document.getElementById('texto').value,
        date:now
    };
    // alert(`'añadir mensaje' ${newMessage.mail} enviado a la hora ${newMessage.laal}0 ${newMessage.date} }`)
    // console.log(newMessage)
    document.getElementById('mail').value = ''
    document.getElementById('texto').value = ''
    
    socket.emit('newMessage', newMessage);
    return false;
}


function renderProducts(products) {
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
        document.getElementById("productsContainer").innerHTML = crearTabla;
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

function  renderMessages (messages) {
    // const tableMessage = document.getElementById("messagesTable")
    // while(!tableMessage){
    //     alert('entro al if')
    //     const  crearTabla =
    //     `
    //         <table class="table table-dark">
    //             <tbody id="messagesTable">
    //             </tbody>
    //         </table>
    //     `
    //     document.getElementById("messageContainer").innerHTML = crearTabla;
    //     tableMessage = document.getElementById("messagesTable")
    // }
    const  crearTabla =
        `
            <table class="table table-dark">
                <tbody id="messagesTable">
                </tbody>
            </table>
        `
        document.getElementById("messagesContainer").innerHTML = 
        `
            <table class="table">
                <tbody id="messagesTable">
                </tbody>
            </table>
        `;
    const html =messages
    .map((message, index) => {
        return `
                <tr>
                    <th scope="row"> ${message.id} </th>
                    <td class="mail"> ${message.mail} </td>
                    <td class="date"> ${message.date} </td>
                    <td class="message"> ${message.text} </td>
                </tr>
            `;
    })
    .join(" ");
    document.getElementById("messagesTable").innerHTML = html;
    
}
socket.on("products", function (products) {
    renderProducts(products);
});
socket.on("chat", function (messages) {
// console.log('mensaje recibido');
renderMessages(messages);
});
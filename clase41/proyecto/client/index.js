fetch('http://localhost:3000/messages')
    .then(res => res.json())
    .then(res=>console.log(res))

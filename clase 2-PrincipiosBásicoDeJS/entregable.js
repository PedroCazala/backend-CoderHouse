class Usuario{
    constructor(nombre, apellido,libros, mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=[libros];
        this.mascotas=mascotas;
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(animal){
        this.mascotas.push(animal)
    }
    
    countMascotas(){
        return this.mascotas.length
    }
    addBook(bookName,autorName){
        this.libros.push(
            {
                title:bookName,
                autor:autorName
            }
        )
    }

    getBookNames(){
        return(this.libros.map(
            libro=>{
                return libro.title
            }
            ))
    }
}

const usuario = new Usuario('Marcos','Gomes',{title:'100 años de soledad',autor:'Gabriel Garcia Marquez'},['perro','gato']);

console.log(`Nombre completo ${usuario.getFullName()}`);
console.log(`Cantidad de mascotas: ${usuario.countMascotas()}`)
usuario.addMascota('loro');
console.log(`Cantidad de mascotas: ${usuario.countMascotas()}`)
console.log(`Nombre de los libros del usuario: ${usuario.getBookNames()}`)
usuario.addBook('Rayuela','Cortazar')
usuario.addBook('La casa de los espiritus','Isabel Allende')
console.log(`Nombre de los libros del usuario: ${usuario.getBookNames()}`)

console.log(usuario)
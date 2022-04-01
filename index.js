/* German Koning - Comision 31640 */ 
let puntero = 0
let vart = prompt("ingrese su token")
let clave = "123"
if (vart == clave) {
    alert("Bienvenido")
} else {
    alert("Acceso denegado")
}




while (vart == clave) {
    let id = 0
    console.log("iniciando")
    let var1 = prompt("Ingrese su nombre")
    let var2 = prompt("Ingrese su apellido")
    let var3 = prompt("ingrese su email")
    let var4 = prompt("ingrese su direccion")

    var persona = {
        nombre: var1,
        apellido: var2,
        email: var3,
        direccion: var4
    };

    localStorage.setItem(id, JSON.stringify(persona));
    id = id++
    



    alert("Usuario generado con los siguientes datos " + JSON.stringify(persona))
   
    break


}
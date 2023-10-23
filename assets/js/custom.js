    /*busque informacion hasta que comprendi bien lo que se hace,
    termine haciendolo como me salia mas comodo*/
    
    //aqui llamo al formulario
const formulario = document.querySelector("#form_1");
// console.log(formulario) con esta linea de codigo confirmo que si esta funcinando

// crear un evento
    formulario.addEventListener("submit", compFormulario)


// ahora con las funciones
function compFormulario(e){
    //esto de aqui vv es solamente para que la consola me muestre el resultado
    e.preventDefault();
    //esto lo use para verificar que lo de arriba funciona
    console.log("validando...")
    //VV esta variante solo es estetica VV
    dats="los datos son :"

    //desde aqui empece a capturar los datos usando el ID, 
    //con el query selector se puede seleccionar ssimilar que en css, ta weno :D
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const mail = document.querySelector("#mail").value;
    

    // VV tratare de hacer que tome la edad como un numero VV
    const edad = document.querySelector("#edad").value;

    //preferi encapsular los datos para ahorrar un poco de codigo uwu, al final me gusto el resultado
    user ={
        nombre:nombre,
        apellido:apellido,
        mail : mail,
        edad : edad
    }
    console.log(dats,user)
    //tratare de hacer que me muestre los datos en un H3 de mi html
    const respuesta =document.querySelector("#respuesta");
    respuesta.textContent= ("hola "+ user.nombre+"," + " tu edad es "+ user.edad)
    
}



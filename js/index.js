const  guerreros = []; // Arrive

const cargarTabla = ()=>{
    //1. Seleccionar el Tbody para usarlo
    const tbody = document.querySelector("#tabla_body")
    tbody.innerHTML = "";
    //2. recorrer el arrive de guerreros
    for(let i=0 ; i< guerreros.length; ++i){
        let g = guerreros[i];
        let fila = document.createElement("tr"); //3. por cada objeto generar una fila en la table (tr)

        //4. por cada atributo del guerrero, generar una celda (td)

        let celda_nombre = document.createElement("td");
            celda_nombre.innerText = g.nombre;

        let celda_raza = document.createElement("td");
            celda_raza.innerText = g.raza;

        let celda_rango = document.createElement("td");
            celda_rango.innerText = g.rango;

        let celda_nivel = document.createElement("td");
            celda_nivel.innerText = g.nivel;
        //5. Agregar cada celda a fila nueva
        fila.appendChild(celda_nombre);
        fila.appendChild(celda_raza);
        fila.appendChild(celda_rango);
        fila.appendChild(celda_nivel);

    
        //6. Agregar fila al cuerpo de tabla

        tbody.appendChild(fila);

    }
      


};

// Agregar un listener para el eventoo click
document.querySelector("#btn_ingresar_guerrero").addEventListener("click", ()=>{
    // Sacar valor de formulario
    let nombre_txt  =document.querySelector("#nombre_txt").value;
    let select_raza = document.querySelector("#select_raza").value;
    let select_rango =  document.querySelector("#select_rango").value;
    let nivel_guerrero = document.querySelector("#nivel_guerrero").value;
    
    // Crear Objeto para que guarde todo
    let guerrero = {};
    guerrero.nombre = nombre_txt;
    guerrero.raza = select_raza;
    guerrero.rango = select_rango;
    guerrero.nivel = nivel_guerrero;
    guerreros.push(guerrero) // Push para introducir el objeto guerrero a la tabla
    cargarTabla();

});


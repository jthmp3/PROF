/*PROFESORES-B
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F
- M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne el porcentaje de profesores de un sexo y una categoría dada.
Función: porcProfesSexoEnCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número), sexo (una
letra).
Retorno: el porcentaje de profesores de un sexo dado en la categoría indicada.
Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior. */


let profesoresCategoria = (profesores, categorias) => {
    let salida = [];
    profesores.forEach((profesor) => {
        if (categorias.includes(profesor.categoria)) salida.push(profesor);
    });
    return salida;
};

let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
    let profesoresEnCategoria = profesoresCategoria(profesores, [categoria]);
    let cantidadSexo = profesoresEnCategoria.filter((profesor) => profesor.sexo === sexo).length;
    return (cantidadSexo / profesoresEnCategoria.length) * 100;
};

let profesores = [
    { categoria: 1, nombre: 'Ana', sexo: 'F' },
    { categoria: 2, nombre: 'Luis', sexo: 'M' },
    { categoria: 1, nombre: 'María', sexo: 'F' },
    { categoria: 3, nombre: 'Carlos', sexo: 'M' },
    { categoria: 5, nombre: 'Elena', sexo: 'F' },
    { categoria: 4, nombre: 'Juan', sexo: 'M' },
    { categoria: 2, nombre: 'Lucía', sexo: 'F' },
    { categoria: 1, nombre: 'Pedro', sexo: 'M' }
];

let salida = document.getElementById("salida");

salida.innerHTML = `Porcentaje de profesoras en la categoría 1:<br>`;
salida.innerHTML += `${porcProfesSexoEnCategoria(profesores, 1, 'F').toFixed(2)}%<br>`;



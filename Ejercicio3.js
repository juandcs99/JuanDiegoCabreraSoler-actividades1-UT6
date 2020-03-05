'use strict';

function verAsignaturas(asignaturas="ninguna",...numAsignaturas)
{
    console.log("El número de asignaturas son " + asignaturas + numAsignaturas.join("-"))
}
verAsignaturas()
verAsignaturas(5)
verAsignaturas(6)
verAsignaturas(7)
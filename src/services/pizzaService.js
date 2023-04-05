import Pizza from '../Models/pizza'
import sql from 'mssql';
import config from '../Models/db';



export const getAll = async () => {
    const conn = await sql.connect(config);
    const results = conn.request().query('SELECT * FROM Pizzas');
    return results;
}

export const getById = async (id) => {
    const conn = await sql.connect(config);
    const results2 = await conn.request()
    .query("SELECT * FROM Pizzas")
    .input(whereCondition, Pizza.id);
    return results2;
}

export const Create = async () => {
    const conn = await sql.connect(config);
    const pizza = new Pizza();
    pizza.nombre = 'Gonzi'
    pizza.descripcion = 'Muy feo'
    pizza.importe = 1800;
    pizza.libregluten = false;
    const results3 = await conn.request ()
    .input ("pNombre", pizza.nombre)
    .input ("pDescripcion", pizza.descripcion)
    .input ("pImporte",pizza.importe)
    .input("pLibreGluten",pizza.libregluten)
    .query('INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)');
    return results3;
}

export const Update = async () => {
    const conn = await sql.connect(config);
    const pizza = new Pizza();
    pizza.nombre = 'Gonzi'
    pizza.descripcion = 'Muy feo'
    pizza.importe = 1800;
    pizza.libregluten = false;
    const results3 = await conn.request ()
    .input ("pNombre", pizza.nombre)
    .input ("pDescripcion", pizza.descripcion)
    .input ("pImporte",pizza.importe)
    .input("pLibreGluten",pizza.libregluten)
    //falta

}





export function deleteById(id) {


}


const HacerAsado = async (puntoDeLaCarne, CantSanguches) => {
const pan = ComprarPan() //Esto se hace asincronico
await hacerFuego()
const carne = PonerCarne()
//Esperar al pan
await pan;
await CortarPan()

await carne;
CortarCarne()

Servir()
}

HacerAsado();
import Pizza from '../Models/pizza.js'
import sql from 'mssql';
import config from '../Models/db.js';



export const getAll = async () => {
    const conn = await sql.connect(config);
    const results = conn.request().query('SELECT * FROM Pizzas');
    return results;
}

export const getById = async (Id) => {
    const conn = await sql.connect(config);
    const results2 = await conn.request()
    .input("pId",sql.Int,Id).query("SELECT * FROM Pizzas WHERE Id = @pId") //AGREGAR EL WHERE ACA
    return results2.recordsets;
}

export const Create = async (pizza) => {
    const conn = await sql.connect(config);
    const results3 = await conn.request ()
    .input ("pNombre",sql.VarChar, pizza.nombre)
    .input ("pDescripcion",sql.VarChar, pizza.descripcion)
    .input ("pImporte",sql.Int,pizza.importe)
    .input("pLibreGluten",sql.Bit,pizza.libreGluten)
    .query('INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)');
    return results3;
}

export const Update = async (Id, pizza) => {
    const conn = await sql.connect(config);
    console.log(Id);
    console.log(pizza);
    const results4 = await conn.request ()
    .input ("pId",sql.Int, Id)
    .input ("pNombre",sql.VarChar, pizza.nombre)
    .input ("pDescripcion",sql.VarChar, pizza.descripcion)
    .input ("pImporte",sql.Int, pizza.importe)
    .input("pLibreGluten",sql.Bit, pizza.libreGluten)
    .query('UPDATE Pizzas SET Nombre = @pNombre, LibreGluten =  @pLibreGluten, Importe =  @pImporte, Descripcion = @pDescripcion WHERE Id = @pId')
    console.log(results4);
    return results4.rowsAffected;
}

export const deleteById = async (Id) => {
    const conn = await sql.connect(config);
    const results5 = await conn.request()
    .input("pId",sql.Int,Id).query('Delete from Pizzas where Id = @pId')
    return results5.rowsAffected;
}


/*
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

*/
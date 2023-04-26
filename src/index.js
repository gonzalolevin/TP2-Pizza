import { getAll, getById, Create, Update, deleteById } from "./services/pizzaService.js";
import express from "express";
import Pizza from "./Models/pizza.js";

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', async (req,res)  =>{ //post = insert - put = update
    const todaspizzas = await getAll();
    return res.status(200).send(todaspizzas);
})


app.get('/api/:id', async (req,res) =>{ //post = insert - put = update
    const idElegido = req.params.id;
    const pizzaelegida = await getById(idElegido);
    if (idElegido<1) { //no anda
        return res.status(400);
    }
    if (idElegido == null) {
        return res.status(404);
    }
    return res.status(200).send(pizzaelegida);
})

app.post('/', async (req,res) =>{
    const PizzaN = new Pizza();
    PizzaN.nombre = req.body.Nombre;
    PizzaN.descripcion = req.body.Descripcion;
    PizzaN.importe = req.body.Importe;
    PizzaN.libreGluten = req.body.LibreGluten;
    console.log(PizzaN.LibreGluten);
    const Crear = await Create(PizzaN);
    return res.status(201).send(Crear);
})


app.put('/api/:id', async (req, res) =>{
    const IdModificado = req.params.id;
    if (IdModificado != req.body.Id) {
       return res.status(400).send();
    }
    const PizzaN = new Pizza();
    PizzaN.nombre = req.body.Nombre;
    PizzaN.descripcion =req.body.Descripcion;
    PizzaN.importe = req.body.Importe;
    PizzaN.libreGluten = req.body.LibreGluten;

    const PizzaModificadas = await Update(IdModificado, PizzaN);
    if (PizzaModificadas == 0) {
       return res.status(404).send();
    }
    return res.status(200).send(PizzaModificadas);
})

app.delete('/api/:id', async (req, res) =>{

    const idElegido = req.params.id;
    const rowsAffected = await deleteById(idElegido);
    
    if (idElegido<1) {
        return res.status(400).send();
    }
    if (rowsAffected[0] == 0) {
        return res.status(404).send();
    }

    return res.status(200).send();
    
})





app.listen(port, () => {
console.log(`Example app listening on port ${port}`) 
})
import { getAll2 } from "./services/pizzaService";
import Pizza from "./Models/pizza";
import getById, { getAll } from "./services/pizzaService";


function test ()
{
   const pizza = new Pizza();
   pizza.id = 1;
   pizza.libregluten = false;
   pizza.descripcion = "pizza rica y sabrosa"

    pizza.getByIdArrow();
}
await getAll();
import { Application } from "./deps.ts";
import { productsRouter, router,cartsRouter} from "./src/routes/index.ts";

const app = new Application();

app.use(router.routes());
app.use(productsRouter.routes());
app.use(cartsRouter.routes());

app.listen({ port: 8080 });
console.log(`Server on http://localhost:8080/`);
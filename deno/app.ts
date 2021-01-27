import { Application } from "https://deno.land/x/oak/mod.ts";
import todosRoutes from "./routes/todos.ts";

const app = new Application();

// A diferencia de express, Oak no llama a next y sigue la ejecucion sino que con cada middleware retorna un response
// por lo que si hay q esperar opraciones asincronas todos esos middleware deben ser declarados con async await en el next()
app.use(async (ctx, next) => {
  console.log("A middleware!");
  await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 3000 });

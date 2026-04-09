import { Hono } from "hono";

const POKEAPI_BASE_URL = Bun.env.POKEAPI_BASE_URL || "";

async function getPokemonStats(pokemon: string) {
  console.log(`${POKEAPI_BASE_URL}/api/v2/${pokemon}`);
  const response = await fetch(`${POKEAPI_BASE_URL}/api/v2/pokemon/${pokemon}`);
  return response.json();
}

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Bun!");
});

app.get("/pokemon/:name", async (c) => {
  const { name } = c.req.param();
  const stats = await getPokemonStats(name);
  return c.json(stats);
});

app.onError((err, c) => {
  // For any other unexpected errors, log and return a generic 500 response
  console.error(err);
  return c.text("Internal Server Error", 500);
});

export default {
  port: 3000,
  fetch: app.fetch,
};

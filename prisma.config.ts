import { defineConfig } from "prisma/config";
import dotenv from "dotenv";

dotenv.config(); // carrega o arquivo .env

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL!, // usa a variável carregada
  },
});

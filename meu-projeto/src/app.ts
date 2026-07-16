import cors from "cors";
import "dotenv/config";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler.js";
import { orgaoTransitoIndividualRoutes } from "./routes/orgaoTransitoIndividualRoutes.js";

export const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL ?? "http://localhost:3000" }));
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    nome: "New Tesc API",
    status: "online",
    endpoints: {
      health: "/health",
      orgaosTransitoIndividual: "/api/transito-individual/orgaos",
    },
  });
});

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/transito-individual", orgaoTransitoIndividualRoutes);
app.use(errorHandler);

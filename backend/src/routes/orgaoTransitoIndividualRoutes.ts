import { Router } from "express";
import { orgaoTransitoIndividualController } from "../controllers/orgaoTransitoIndividualController.js";

export const orgaoTransitoIndividualRoutes = Router();

orgaoTransitoIndividualRoutes.get("/orgaos/brasao", orgaoTransitoIndividualController.buscarBrasao);
orgaoTransitoIndividualRoutes.get("/orgaos", orgaoTransitoIndividualController.listar);
orgaoTransitoIndividualRoutes.get("/orgaos/:id", orgaoTransitoIndividualController.buscarPorId);
orgaoTransitoIndividualRoutes.post("/orgaos", orgaoTransitoIndividualController.criar);
orgaoTransitoIndividualRoutes.put("/orgaos/:id", orgaoTransitoIndividualController.atualizar);
orgaoTransitoIndividualRoutes.delete("/orgaos/:id", orgaoTransitoIndividualController.excluir);

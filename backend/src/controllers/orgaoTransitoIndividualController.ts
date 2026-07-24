import type { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { orgaoTransitoIndividualService } from "../services/orgaoTransitoIndividualService.js";

const idSchema = z.coerce.number().int().positive();
const cnpjSchema = z.string().trim().refine((value) => value.replace(/\D/g, "").length === 14, {
  message: "O CNPJ deve conter 14 dígitos.",
});
const criarOrgaoSchema = z.object({
  codigo: z.string().trim().min(1).max(50),
  razao_social: z.string().trim().min(2).max(180),
  municipio_uf: z.string().trim().min(4).max(160),
  endereco: z.string().trim().min(2).max(255),
  cnpj: cnpjSchema,
  numero: z.string().trim().min(1).max(30),
});
const atualizarOrgaoSchema = criarOrgaoSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  "Informe ao menos um campo para atualizar.",
);

class OrgaoTransitoIndividualController {
  async listar(_request: Request, response: Response, next: NextFunction) {
    try {
      response.json(await orgaoTransitoIndividualService.listar());
    } catch (error) {
      next(error);
    }
  }

  async buscarPorId(request: Request, response: Response, next: NextFunction) {
    try {
      const id = idSchema.parse(request.params.id);
      response.json(await orgaoTransitoIndividualService.buscarPorId(id));
    } catch (error) {
      next(error);
    }
  }

  async buscarBrasao(request: Request, response: Response, next: NextFunction) {
    try {
      const municipioUf = z.string().trim().min(4).parse(request.query.municipio_uf);
      const imagemBrasaoMunicipio = await orgaoTransitoIndividualService.buscarBrasao(municipioUf);
      response.json({ municipio_uf: municipioUf, imagem_brasao_municipio: imagemBrasaoMunicipio });
    } catch (error) {
      next(error);
    }
  }

  async criar(request: Request, response: Response, next: NextFunction) {
    try {
      const data = criarOrgaoSchema.parse(request.body);
      const orgao = await orgaoTransitoIndividualService.criar(data); 
      response.status(201).json(orgao);
    } catch (error) {
      next(error);
    }
  }

  async atualizar(request: Request, response: Response, next: NextFunction) {
    try {
      const id = idSchema.parse(request.params.id);
      const data = atualizarOrgaoSchema.parse(request.body);
      response.json(await orgaoTransitoIndividualService.atualizar(id, data));
    } catch (error) {
      next(error);
    }
  }

  async excluir(request: Request, response: Response, next: NextFunction) {
    try {
      const id = idSchema.parse(request.params.id);
      await orgaoTransitoIndividualService.excluir(id);
      response.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export const orgaoTransitoIndividualController = new OrgaoTransitoIndividualController();

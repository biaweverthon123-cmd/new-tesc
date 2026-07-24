import { Prisma } from "@prisma/client";
import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError.js";

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof ZodError) {
    response.status(422).json({
      message: "Dados inválidos.",
      errors: error.flatten().fieldErrors,
    });
    return;
  }

  if (error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      response.status(409).json({ message: "Registro duplicado." });
      return;
    }
    if (error.code === "P2025") {
      response.status(404).json({ message: "Registro não encontrado." });
      return;
    }
  }

  console.error(error);
  response.status(500).json({ message: "Erro interno do servidor." });
};

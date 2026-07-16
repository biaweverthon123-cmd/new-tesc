import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma.js";

class OrgaoTransitoIndividualRepository {
  listar() {
    return prisma.orgaoTransitoIndividual.findMany({ orderBy: { criadoEm: "desc" } });
  }

  buscarPorId(id: number) {
    return prisma.orgaoTransitoIndividual.findUnique({ where: { id } });
  }

  buscarPorCodigo(codigo: string) {
    return prisma.orgaoTransitoIndividual.findUnique({ where: { codigo } });
  }

  buscarPorCnpj(cnpj: string) {
    return prisma.orgaoTransitoIndividual.findUnique({ where: { cnpj } });
  }

  criar(data: Prisma.OrgaoTransitoIndividualCreateInput) {
    return prisma.orgaoTransitoIndividual.create({ data });
  }

  atualizar(id: number, data: Prisma.OrgaoTransitoIndividualUpdateInput) {
    return prisma.orgaoTransitoIndividual.update({ where: { id }, data });
  }

  excluir(id: number) {
    return prisma.orgaoTransitoIndividual.delete({ where: { id } });
  }
}

export const orgaoTransitoIndividualRepository = new OrgaoTransitoIndividualRepository();

import type { OrgaoTransitoIndividual } from "@prisma/client";
import { AppError } from "../errors/AppError.js";
import { orgaoTransitoIndividualRepository } from "../repositories/orgaoTransitoIndividualRepository.js";
import { googleBrasaoService } from "./googleBrasaoService.js";

export type CriarOrgaoInput = {
  codigo: string;
  razao_social: string;
  municipio_uf: string;
  endereco: string;
  cnpj: string;
  numero: string;
};

export type AtualizarOrgaoInput = Partial<CriarOrgaoInput>;

const limparCnpj = (cnpj: string) => cnpj.replace(/\D/g, "");

const serializarOrgao = (orgao: OrgaoTransitoIndividual) => ({
  id: orgao.id,
  codigo: orgao.codigo,
  razao_social: orgao.razaoSocial,
  municipio_uf: orgao.municipioUf,
  endereco: orgao.endereco,
  cnpj: orgao.cnpj,
  numero: orgao.numero,
  imagem_brasao_municipio: orgao.imagemBrasaoMunicipio,
  criado_em: orgao.criadoEm,
  atualizado_em: orgao.atualizadoEm,
});

class OrgaoTransitoIndividualService {
  async listar() {
    const orgaos = await orgaoTransitoIndividualRepository.listar();
    return orgaos.map(serializarOrgao);
  }

  async buscarPorId(id: number) {
    const orgao = await orgaoTransitoIndividualRepository.buscarPorId(id);
    if (!orgao) {
      throw new AppError("Órgão não encontrado.", 404);
    }
    return serializarOrgao(orgao);
  }

  buscarBrasao(municipioUf: string) {
    return googleBrasaoService.buscarPorMunicipio(municipioUf);
  }

  async criar(data: CriarOrgaoInput) {
    const cnpj = limparCnpj(data.cnpj);
    const [codigoExistente, cnpjExistente] = await Promise.all([
      orgaoTransitoIndividualRepository.buscarPorCodigo(data.codigo),
      orgaoTransitoIndividualRepository.buscarPorCnpj(cnpj),
    ]);

    if (codigoExistente) {
      throw new AppError("Já existe um órgão com este código.", 409);
    }
    if (cnpjExistente) {
      throw new AppError("Já existe um órgão com este CNPJ.", 409);
    }

    const imagemBrasaoMunicipio = googleBrasaoService.estaConfigurado()
      ? await this.buscarBrasao(data.municipio_uf)
      : null;
    const orgao = await orgaoTransitoIndividualRepository.criar({
      codigo: data.codigo,
      razaoSocial: data.razao_social,
      municipioUf: data.municipio_uf,
      endereco: data.endereco,
      cnpj,
      numero: data.numero,
      imagemBrasaoMunicipio,
    });
    return serializarOrgao(orgao);
  }

  async atualizar(id: number, data: AtualizarOrgaoInput) {
    const atual = await this.buscarPorId(id);
    const cnpj = data.cnpj ? limparCnpj(data.cnpj) : undefined;

    if (data.codigo && data.codigo !== atual.codigo) {
      const existente = await orgaoTransitoIndividualRepository.buscarPorCodigo(data.codigo);
      if (existente) throw new AppError("Já existe um órgão com este código.", 409);
    }
    if (cnpj && cnpj !== atual.cnpj) {
      const existente = await orgaoTransitoIndividualRepository.buscarPorCnpj(cnpj);
      if (existente) throw new AppError("Já existe um órgão com este CNPJ.", 409);
    }

    const imagemBrasaoMunicipio = data.municipio_uf
      ? googleBrasaoService.estaConfigurado()
        ? await this.buscarBrasao(data.municipio_uf)
        : null
      : undefined;

    const orgao = await orgaoTransitoIndividualRepository.atualizar(id, {
      ...(data.codigo !== undefined && { codigo: data.codigo }),
      ...(data.razao_social !== undefined && { razaoSocial: data.razao_social }),
      ...(data.municipio_uf !== undefined && { municipioUf: data.municipio_uf }),
      ...(data.endereco !== undefined && { endereco: data.endereco }),
      ...(cnpj !== undefined && { cnpj }),
      ...(data.numero !== undefined && { numero: data.numero }),
      ...(imagemBrasaoMunicipio !== undefined && { imagemBrasaoMunicipio }),
    });
    return serializarOrgao(orgao);
  }

  async excluir(id: number) {
    await this.buscarPorId(id);
    await orgaoTransitoIndividualRepository.excluir(id);
  }
}

export const orgaoTransitoIndividualService = new OrgaoTransitoIndividualService();

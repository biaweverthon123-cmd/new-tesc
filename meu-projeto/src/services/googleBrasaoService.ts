import { AppError } from "../errors/AppError.js";

type GoogleImageSearchResponse = {
  items?: Array<{
    link?: string;
  }>;
  error?: {
    message?: string;
  };
};

class GoogleBrasaoService {
  estaConfigurado() {
    return Boolean(process.env.GOOGLE_CSE_API_KEY && process.env.GOOGLE_CSE_CX);
  }

  async buscarPorMunicipio(municipioUf: string) {
    const apiKey = process.env.GOOGLE_CSE_API_KEY;
    const cx = process.env.GOOGLE_CSE_CX;

    if (!apiKey || !cx) {
      throw new AppError(
        "Configure GOOGLE_CSE_API_KEY e GOOGLE_CSE_CX para buscar o brasão municipal.",
        503,
      );
    }

    const params = new URLSearchParams({
      key: apiKey,
      cx,
      q: `brasão oficial prefeitura ${municipioUf}`,
      searchType: "image",
      num: "1",
      safe: "active",
      imgType: "clipart",
    });

    let response: Response;
    try {
      response = await fetch(`https://www.googleapis.com/customsearch/v1?${params}`, {
        signal: AbortSignal.timeout(10_000),
      });
    } catch {
      throw new AppError("O Google não respondeu à busca do brasão municipal.", 502);
    }

    const data = (await response.json()) as GoogleImageSearchResponse;
    if (!response.ok) {
      throw new AppError(data.error?.message ?? "Falha ao pesquisar o brasão no Google.", 502);
    }

    const imagem = data.items?.[0]?.link;
    if (!imagem) {
      throw new AppError(`Nenhum brasão foi encontrado para ${municipioUf}.`, 404);
    }

    return imagem;
  }
}

export const googleBrasaoService = new GoogleBrasaoService();

import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Camera,
  ClipboardCheck,
  FileText,
  ImagePlus,
  MapPinned,
  Radar,
  Road,
  Save,
  ShieldAlert,
  Signpost,
  UserRoundCheck,
} from "lucide-react";

const sections = [
  {
    title: "Resposta tecnica",
    icon: ClipboardCheck,
    fields: [
      { label: "Codigo da resposta", placeholder: "RESP-0001" },
      { label: "Data", type: "date" },
      { label: "Nome do responsavel tecnico" },
      { label: "Qualificacao" },
      { label: "Numero CREA" },
    ],
  },
  {
    title: "Orgao",
    icon: Building2,
    fields: [
      { label: "Codigo do orgao" },
      { label: "Nome / razao social" },
      { label: "Municipio - UF", placeholder: "Cidade - UF" },
      { label: "Endereco" },
      { label: "Numero do CNPJ" },
      { label: "Sigla da cidade" },
    ],
    uploads: ["Foto do orgao"],
  },
  {
    title: "Equipamento",
    icon: Radar,
    fields: [
      { label: "Codigo do equipamento" },
      { label: "Nome do equipamento" },
      { label: "Tipo" },
      { label: "PAP ou OCR metrologia" },
      { label: "Demais definicoes", wide: true, textarea: true },
    ],
    uploads: ["Imagem do equipamento"],
  },
  {
    title: "Local",
    icon: MapPinned,
    fields: [
      { label: "Endereco" },
      { label: "Numero" },
      { label: "Complemento" },
      { label: "Sentido do fluxo fiscalizado" },
      { label: "Definicao do sentido" },
      { label: "Coordenada geografica" },
      { label: "Latitude" },
      { label: "Longitude" },
    ],
  },
  {
    title: "Classificacao da via",
    icon: Road,
    fields: [
      { label: "Tipo de via" },
      { label: "Geometria da via" },
      { label: "Qtde. de faixas fiscalizadas" },
      { label: "Via" },
      { label: "Tipo de pista" },
      { label: "Outros", wide: true },
      { label: "Volume medio diario de veiculos" },
    ],
  },
  {
    title: "Risco",
    icon: ShieldAlert,
    fields: [
      { label: "Potencial de risco no local", textarea: true, wide: true },
      { label: "Outro potencial de risco", textarea: true, wide: true },
      { label: "Historico de medidas de engenharia", textarea: true, wide: true },
      { label: "Outras medidas de engenharia", textarea: true, wide: true },
      { label: "Outras medidas necessarias", textarea: true, wide: true },
    ],
  },
  {
    title: "Sinalizacao vertical",
    icon: Signpost,
    fields: [
      { label: "Placa de sinalizacao" },
      { label: "Velocidade maior que 80 km/h - quantidade" },
      { label: "Velocidade maior que 80 km/h - distancia" },
      { label: "Velocidade menor que 80 km/h - quantidade" },
      { label: "Velocidade menor que 80 km/h - distancia" },
    ],
  },
];

const imageSlots = [
  "Sinalizacao horizontal",
  "Imagem",
  "Vista terrestre 1",
  "Vista terrestre 2",
  "Mapa",
  "Vista aerea",
  "Croqui",
  "Mapa de calor",
];

type Field = {
  label: string;
  placeholder?: string;
  type?: string;
  wide?: boolean;
  textarea?: boolean;
};

function FieldControl({ field }: { field: Field }) {
  const inputClass =
    "mt-2 w-full rounded-lg border border-black/10 bg-white px-3 py-3 text-sm outline-none transition placeholder:text-black/32 focus:border-[#0d9488] focus:ring-4 focus:ring-[#99f6e4]/35";

  return (
    <label className={field.wide ? "md:col-span-2 xl:col-span-3" : ""}>
      <span className="text-sm font-semibold text-black/72">{field.label}</span>
      {field.textarea ? (
        <textarea
          className={`${inputClass} min-h-28 resize-y leading-6`}
          placeholder={field.placeholder ?? "Descreva as informacoes"}
        />
      ) : (
        <input
          className={inputClass}
          placeholder={field.placeholder ?? "Digite as informacoes"}
          type={field.type ?? "text"}
        />
      )}
    </label>
  );
}

function UploadBox({ label }: { label: string }) {
  return (
    <label className="group flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-black/18 bg-[#f8fbfb] px-4 py-5 text-center transition hover:border-[#0d9488] hover:bg-[#ecfdf5]">
      <ImagePlus size={26} className="text-black/45 transition group-hover:text-[#0d9488]" />
      <span className="mt-3 text-sm font-bold text-black/72">{label}</span>
      <span className="mt-1 text-xs text-black/45">Selecionar arquivo</span>
      <input className="sr-only" type="file" accept="image/*" />
    </label>
  );
}

export default function EstudoTecnicoRadarPage() {
  return (
    <main className="min-h-screen bg-[#f3f7f6] text-[#070b12]">
      <header className="border-b border-black/8 bg-white/92 px-4 py-4 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="grid size-10 place-items-center rounded-lg border border-black/10 bg-white text-black/70 transition hover:border-[#0d9488] hover:text-[#0d9488]"
              aria-label="Voltar para dashboard"
            >
              <ArrowLeft size={19} />
            </Link>
            <div>
              <p className="text-sm font-semibold text-[#0f766e]">Modulo principal</p>
              <h1 className="text-2xl font-bold sm:text-3xl">Transito</h1>
            </div>
          </div>

          <button className="flex h-11 items-center gap-2 rounded-lg bg-[#0f172a] px-5 text-sm font-bold text-white transition hover:bg-[#111827] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45">
            <Save size={18} />
            Salvar estudo
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
        <section className="mb-6 grid gap-4 lg:grid-cols-[1fr_340px]">
          <div className="rounded-lg border border-black/8 bg-[#0f172a] p-6 text-white shadow-[0_16px_44px_rgba(15,23,42,0.13)] md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="max-w-3xl">
                <div className="mb-4 grid size-12 place-items-center rounded-lg bg-[#2dd4bf] text-[#0f172a]">
                  <FileText size={25} />
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">Cadastro de estudo tecnico para fiscalizacao</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Preencha os dados do responsavel, orgao, equipamento, local,
                  classificacao da via, riscos, sinalizacao e imagens tecnicas.
                </p>
              </div>
              <div className="rounded-lg border border-white/12 bg-white/8 px-4 py-3">
                <p className="text-xs text-white/54">Funcionalidade</p>
                <p className="mt-1 text-sm font-bold text-[#99f6e4]">Estudo tecnico radar</p>
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-black/8 bg-white p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
                <UserRoundCheck size={20} />
              </div>
              <div>
                <h3 className="font-bold">Responsavel</h3>
                <p className="text-xs text-black/50">Dados tecnicos e CREA</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-black/62">
              <p>Use os campos para montar o documento base do estudo tecnico.</p>
              <p>Os anexos aceitam imagens para foto, equipamento, vistas, mapa, croqui e mapa de calor.</p>
            </div>
          </aside>
        </section>

        <form className="space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.title} className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-lg font-bold">{section.title}</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {section.fields.map((field) => (
                    <FieldControl key={field.label} field={field} />
                  ))}
                </div>

                {"uploads" in section && section.uploads ? (
                  <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {section.uploads.map((upload) => (
                      <UploadBox key={upload} label={upload} />
                    ))}
                  </div>
                ) : null}
              </section>
            );
          })}

          <section className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
                <Camera size={20} />
              </div>
              <h2 className="text-lg font-bold">Sinalizacao horizontal e imagens</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {imageSlots.map((slot) => (
                <UploadBox key={slot} label={slot} />
              ))}
            </div>
          </section>

          <div className="flex flex-col-reverse gap-3 border-t border-black/8 pt-5 sm:flex-row sm:justify-end">
            <Link
              href="/dashboard"
              className="flex h-11 items-center justify-center rounded-lg border border-black/10 bg-white px-5 text-sm font-bold text-black/70 transition hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              Cancelar
            </Link>
            <button className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-5 text-sm font-bold text-white transition hover:bg-[#111827] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45">
              <Save size={18} />
              Salvar estudo tecnico
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

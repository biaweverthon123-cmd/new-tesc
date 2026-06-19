import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarClock,
  FileCheck,
  FileSearch,
  FileText,
  Gavel,
  Plus,
  Save,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const indicators = [
  { label: "Processos ativos", value: "9", detail: "3 com prazo nesta semana" },
  { label: "Contratos vigentes", value: "6", detail: "2 aguardando renovacao" },
  { label: "Pareceres emitidos", value: "14", detail: "No mes atual" },
];

const cards = [
  {
    title: "Contratos",
    description: "Registre contratos, aditivos, partes envolvidas, vigencia e renovacoes.",
    icon: BookOpen,
  },
  {
    title: "Processos",
    description: "Acompanhe numero, comarca, fase, status, prazos e responsaveis.",
    icon: FileSearch,
  },
  {
    title: "Compliance",
    description: "Controle riscos, exigencias internas, evidencias e pendencias legais.",
    icon: ShieldCheck,
  },
  {
    title: "Pareceres",
    description: "Documente analises, revisoes, recomendacoes e decisao juridica.",
    icon: FileCheck,
  },
];

const recentItems = [
  ["JUR-0009", "Contrato de fornecimento", "Renovacao", "24/05/2026"],
  ["JUR-0008", "Processo administrativo", "Em analise", "27/05/2026"],
  ["JUR-0007", "Parecer de compra", "Concluido", "20/05/2026"],
];

const deadlines = [
  { label: "Manifestacao administrativa", date: "27/05/2026", status: "Pendente" },
  { label: "Renovacao contratual", date: "31/05/2026", status: "Em revisao" },
  { label: "Auditoria documental", date: "05/06/2026", status: "Agendada" },
];

const formSections = [
  {
    title: "Identificacao",
    icon: FileText,
    fields: [
      { label: "Codigo juridico", placeholder: "JUR-0001" },
      { label: "Tipo de registro", placeholder: "Contrato, processo ou parecer" },
      { label: "Numero do processo / contrato" },
      { label: "Area solicitante" },
      { label: "Empresa / fornecedor" },
      { label: "Status", placeholder: "Em analise" },
    ],
  },
  {
    title: "Prazos e responsaveis",
    icon: CalendarClock,
    fields: [
      { label: "Data de abertura", type: "date" },
      { label: "Prazo final", type: "date" },
      { label: "Responsavel juridico" },
      { label: "Responsavel interno" },
      { label: "Valor envolvido" },
      { label: "Nivel de risco", placeholder: "Baixo, medio ou alto" },
    ],
  },
  {
    title: "Analise juridica",
    icon: Gavel,
    fields: [
      { label: "Objeto", textarea: true, wide: true },
      { label: "Fundamentacao / observacoes", textarea: true, wide: true },
      { label: "Recomendacao", textarea: true, wide: true },
    ],
  },
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

export default function JuridicoPage() {
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
              <h1 className="text-2xl font-bold sm:text-3xl">Juridico</h1>
            </div>
          </div>

          <button className="flex h-11 items-center gap-2 rounded-lg bg-[#0f172a] px-5 text-sm font-bold text-white transition hover:bg-[#111827] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45">
            <Plus size={18} />
            Novo registro
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
        <section className="mb-6 grid gap-4 lg:grid-cols-[1fr_360px]">
          <div className="rounded-lg border border-black/8 bg-[#0f172a] p-6 text-white shadow-[0_16px_44px_rgba(15,23,42,0.13)] md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="max-w-3xl">
                <div className="mb-4 grid size-12 place-items-center rounded-lg bg-[#2dd4bf] text-[#0f172a]">
                  <Scale size={25} />
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">Gestao juridica integrada</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Centralize contratos, processos, pareceres, prazos e riscos legais em um fluxo conectado ao New Tesc.
                </p>
              </div>
              <div className="rounded-lg border border-white/12 bg-white/8 px-4 py-3">
                <p className="text-xs text-white/54">Funcionalidade</p>
                <p className="mt-1 text-sm font-bold text-[#99f6e4]">Modulo juridico</p>
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-black/8 bg-white p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
                <UserCheck size={20} />
              </div>
              <div>
                <h3 className="font-bold">Controle legal</h3>
                <p className="text-xs text-black/50">Visao rapida de prazos e documentos.</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-black/62">
              <p>Use o cadastro para abrir registros juridicos e manter o historico de analises.</p>
              <p>Os indicadores ajudam a priorizar prazos, contratos e pendencias de compliance.</p>
            </div>
          </aside>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-3">
          {indicators.map((item) => (
            <article key={item.label} className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase text-black/50">{item.label}</p>
              <p className="mt-3 text-3xl font-bold text-[#0f172a]">{item.value}</p>
              <p className="mt-2 text-xs text-black/50">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-sm font-semibold text-[#0f172a]">{card.title}</h2>
                </div>
                <p className="text-sm leading-6 text-black/60">{card.description}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-7 grid gap-4 xl:grid-cols-[1fr_360px]">
          <div className="rounded-lg border border-black/8 bg-white p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold">Registros recentes</h3>
              <button className="rounded-lg border border-black/8 px-3 py-2 text-sm font-semibold hover:border-[#0d9488]">
                Ver todos
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-black/8 text-left text-black/48">
                    <th className="py-3 font-semibold">Codigo</th>
                    <th className="py-3 font-semibold">Registro</th>
                    <th className="py-3 font-semibold">Status</th>
                    <th className="py-3 font-semibold">Prazo</th>
                  </tr>
                </thead>
                <tbody>
                  {recentItems.map((row) => (
                    <tr key={row[0]} className="border-b border-black/6 last:border-0">
                      {row.map((cell, index) => (
                        <td
                          key={cell}
                          className={`py-4 ${index === 0 ? "font-bold text-[#0577aa]" : index === 2 ? "font-semibold text-[#0d9488]" : "text-black/64"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="rounded-lg border border-black/8 bg-white p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-[#e4f6ff] text-[#070b12]">
                <CalendarClock size={20} />
              </div>
              <h3 className="text-lg font-bold">Prazos</h3>
            </div>
            <div className="space-y-3">
              {deadlines.map((item) => (
                <div key={item.label} className="rounded-lg border border-black/8 bg-[#f8fbfb] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-[#0f172a]">{item.label}</p>
                    <span className="rounded-full bg-[#ccfbf1] px-2.5 py-1 text-xs font-bold text-[#0f766e]">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-black/52">{item.date}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <form className="mt-7 space-y-5">
          {formSections.map((section) => {
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
              </section>
            );
          })}

          <section className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
                <BriefcaseBusiness size={20} />
              </div>
              <h2 className="text-lg font-bold">Documentos e validacoes</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {["Minuta / contrato", "Documentos de apoio", "Evidencias de compliance"].map((label) => (
                <label key={label} className="group flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-black/18 bg-[#f8fbfb] px-4 py-5 text-center transition hover:border-[#0d9488] hover:bg-[#ecfdf5]">
                  <BadgeCheck size={26} className="text-black/45 transition group-hover:text-[#0d9488]" />
                  <span className="mt-3 text-sm font-bold text-black/72">{label}</span>
                  <span className="mt-1 text-xs text-black/45">Selecionar arquivo</span>
                  <input className="sr-only" type="file" />
                </label>
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
              Salvar registro juridico
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

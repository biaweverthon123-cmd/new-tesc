import Link from "next/link";
import {
  Bell,
  Boxes,
  Building2,
  ClipboardPenLine,
  FilePenLine,
  LayoutDashboard,
  PackagePlus,
  Radar,
  Search,
  Settings,
  ShieldCheck,
  Tags,
} from "lucide-react";

const menuItems = [
  { label: "Pagina Inicial", icon: LayoutDashboard, active: true, href: "/dashboard" },
  { label: "Cotacao de Preco", icon: Tags, active: false, href: "#" },
  { label: "Transito", icon: Radar, active: false, href: "/dashboard/transito" },
  { label: "Banco de Órgão Documento", icon: Boxes, active: false, href: "/dashboard/banco-preco" },
  { label: "Fornecedores", icon: Building2, active: false, href: "#" },
  { label: "Juridico", icon: ShieldCheck, active: false, href: "/dashboard/juridico" },
  { label: "Configuracoes", icon: Settings, active: false, href: "#" },
];

const moduleActions = [
  {
    title: "Transito",
    description: "Modulo para estudo tecnico de radar, orgao, equipamento, via, riscos e sinalizacao.",
    icon: Radar,
    status: "Tecnico",
    href: "/dashboard/transito",
  },
  {
    title: "Transito Individual",
    description: "Modo individual para preencher o estudo tecnico do Transito com campos especificos.",
    icon: Radar,
    status: "Individual",
    href: "/dashboard/transito/individual",
  },
  {
    title: "Banco de Órgão Documento",
    description: "Consulte referencias e cadastre produtos, unidades, categorias e dados para compra.",
    icon: PackagePlus,
    status: "Órgão Documento",
    href: "/dashboard/banco-preco",
  },
  {
    title: "Cotacao",
    description: "Monte uma nova solicitacao e compare propostas recebidas.",
    icon: ClipboardPenLine,
    status: "Operacao",
    href: "#",
  },
  {
    title: "Altera Cotacao",
    description: "Revise prazos, quantidades e fornecedores participantes.",
    icon: FilePenLine,
    status: "Ajuste",
    href: "#",
  },
  {
    title: "Cadastro Fornecedor",
    description: "Gerencie contatos, CNPJ, condicoes comerciais e historico.",
    icon: Building2,
    status: "Cadastro",
    href: "#",
  },
  {
    title: "Juridico",
    description: "Gerencie contratos, processos e conformidade legal.",
    icon: ShieldCheck,
    status: "Legal",
    href: "/dashboard/juridico",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f4faff] text-[#070b12]">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-black/8 bg-[#070b12] px-5 py-6 text-white lg:flex lg:flex-col">
          <div className="mb-9 flex items-center gap-3 px-2">
            <div className="grid size-11 place-items-center rounded-lg bg-[#2dd4bf] font-black text-[#070b12]">
              NT
            </div>
            <div>
              <p className="text-lg font-bold">NewTesc</p>
              <p className="text-xs text-white/52">Painel administrativo</p>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-semibold transition ${
                    item.active
                      ? "bg-[#2dd4bf] text-[#070b12]"
                      : "text-white/68 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-lg border border-white/10 bg-white/6 p-4">
            <p className="text-sm font-semibold">Modulo ativo</p>
            <p className="mt-1 text-xs leading-5 text-white/58">
              Transito, Banco de Órgão Documento e Juridico disponiveis para cadastro e acompanhamento.
            </p>
          </div>

        </aside>

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-10 border-b border-black/8 bg-[#f7fbff]/90 px-4 py-4 backdrop-blur md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-[#070b12] font-black text-[#2dd4bf] lg:hidden">
                  NT
                </div>
                <div>
                  <p className="text-sm text-black/52">Bem-vindo</p>
                  <h1 className="text-xl font-bold sm:text-2xl">Pagina Inicial</h1>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden h-10 w-72 items-center gap-2 rounded-lg border border-black/8 bg-white px-3 md:flex">
                  <Search size={17} className="text-black/40" />
                  <input
                    className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                    placeholder="Buscar modulo ou cadastro"
                  />
                </div>
                <button className="grid size-10 place-items-center rounded-lg border border-black/8 bg-white text-black/70 transition hover:border-[#45bff7] hover:text-black">
                  <Bell size={18} />
                </button>
              </div>
            </div>
          </header>

          <div className="px-4 py-6 md:px-8 md:py-8">
            <section className="mb-7 rounded-lg border border-black/8 bg-[#070b12] p-6 text-white shadow-[0_16px_44px_rgba(7,11,18,0.12)] md:p-8">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <p className="mb-3 inline-flex rounded-full bg-[#2dd4bf] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#070b12]">
                    Modulo Transito
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">Estudo Tecnico de Radar</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/68">
                    Sistema para registro de estudos tecnicos de fiscalizacao de transito com dados de responsavel, orgao, equipamento, via, riscos e sinalizacao.
                  </p>
                </div>
                <Link href="/dashboard/transito" className="h-11 rounded-lg bg-[#2dd4bf] px-5 text-sm font-bold text-[#070b12] transition hover:bg-[#99f6e4]">
                  Novo estudo
                </Link>
              </div>
            </section>

            <section className="mb-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-semibold text-black/50 uppercase">Estudos tecnicos</p>
                <p className="mt-3 text-3xl font-bold text-[#0f172a]">12</p>
                <p className="mt-2 text-xs text-black/50">Registrados neste mes</p>
              </div>
              <div className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-semibold text-black/50 uppercase">Responsaveis CREA</p>
                <p className="mt-3 text-3xl font-bold text-[#0f172a]">8</p>
                <p className="mt-2 text-xs text-black/50">Tecnicos cadastrados</p>
              </div>
              <div className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <p className="text-xs font-semibold text-black/50 uppercase">Orgaos</p>
                <p className="mt-3 text-3xl font-bold text-[#0f172a]">5</p>
                <p className="mt-2 text-xs text-black/50">Municipios atuantes</p>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {moduleActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group flex min-h-52 flex-col rounded-lg border border-black/8 bg-white p-5 text-left shadow-[0_12px_34px_rgba(7,11,18,0.06)] transition hover:-translate-y-0.5 hover:border-[#0d9488] hover:shadow-[0_18px_42px_rgba(7,11,18,0.1)]"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="grid size-12 place-items-center rounded-lg bg-[#e4f6ff] text-[#070b12] transition group-hover:bg-[#99f6e4] group-hover:text-[#0f766e]">
                        <Icon size={24} />
                      </div>
                      <span className="rounded-full border border-black/8 px-3 py-1 text-xs font-semibold text-black/55">
                        {action.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{action.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/58">
                      {action.description}
                    </p>
                    <span className="mt-auto pt-6 text-sm font-bold text-[#0577aa]">
                      Acessar
                    </span>
                  </Link>
                );
              })}
            </section>

            <section className="mt-7 grid gap-4 xl:grid-cols-[1fr_360px]">
              <div className="rounded-lg border border-black/8 bg-white p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold">Estudos tecnicos recentes</h3>
                  <button className="rounded-lg border border-black/8 px-3 py-2 text-sm font-semibold hover:border-[#0d9488]">
                    Ver todos
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-black/8 text-left text-black/48">
                        <th className="py-3 font-semibold">Codigo</th>
                        <th className="py-3 font-semibold">Responsavel</th>
                        <th className="py-3 font-semibold">Municipio</th>
                        <th className="py-3 font-semibold">Status</th>
                        <th className="py-3 font-semibold">Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["RESP-0012", "Eng. Carlos Silva", "Sao Paulo - SP", "Concluido", "18/05/2026"],
                        ["RESP-0011", "Eng. Ana Costa", "Campinas - SP", "Em andamento", "19/05/2026"],
                        ["RESP-0010", "Eng. Bruno Santos", "Sorocaba - SP", "Revisor", "17/05/2026"],
                      ].map((row) => (
                        <tr key={row[0]} className="border-b border-black/6 last:border-0">
                          {row.map((cell, index) => (
                            <td
                              key={cell}
                              className={`py-4 ${index === 0 ? "font-bold text-[#0577aa]" : index === 3 ? "text-[#0d9488] font-semibold" : "text-black/64"}`}
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

              <div className="rounded-lg border border-black/8 bg-white p-5">
                <h3 className="text-lg font-bold">Informacoes</h3>
                <div className="mt-5 space-y-4">
                  {[
                    ["Estudos neste mes", "12"],
                    ["Processos juridicos", "9"],
                    ["Contratos ativos", "6"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-lg bg-[#f3f7f6] px-4 py-3"
                    >
                      <span className="text-sm text-black/60">{label}</span>
                      <strong className="text-xl text-[#0f766e]">{value}</strong>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border border-[#0d9488]/20 bg-[#ecfdf5] p-4">
                  <p className="text-xs font-semibold text-[#0f766e] uppercase">Dica</p>
                  <p className="mt-2 text-xs leading-5 text-[#0f766e]/80">
                    Use o modo individual para registros rapidos ou o modulo completo para estudos detalhados.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

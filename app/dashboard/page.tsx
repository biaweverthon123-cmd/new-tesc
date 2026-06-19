import Link from "next/link";
import {
  Bell,
  Boxes,
  Building2,
  ClipboardPenLine,
  FilePenLine,
  LayoutDashboard,
  LogOut,
  PackagePlus,
  Radar,
  Search,
  Settings,
  Tags,
  UserRound,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Cotacao de Preco", icon: Tags, active: false },
  { label: "Transito", icon: Radar, active: false },
  { label: "Produtos", icon: Boxes, active: false },
  { label: "Fornecedores", icon: Building2, active: false },
  { label: "Configuracoes", icon: Settings, active: false },
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
    title: "Cadastro Produto",
    description: "Inclua itens, unidades, categorias e dados para compra.",
    icon: PackagePlus,
    status: "Cadastro",
    href: "#",
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
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f4faff] text-[#070b12]">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-black/8 bg-[#070b12] px-5 py-6 text-white lg:flex lg:flex-col">
          <div className="mb-9 flex items-center gap-3 px-2">
            <div className="grid size-11 place-items-center rounded-lg bg-[#9bdcff] font-black text-[#070b12]">
              NT
            </div>
            <div>
              <p className="text-lg font-bold">New Tesc</p>
              <p className="text-xs text-white/52">Painel administrativo</p>
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-semibold transition ${
                    item.active
                      ? "bg-[#9bdcff] text-[#070b12]"
                      : "text-white/68 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto rounded-lg border border-white/10 bg-white/6 p-4">
            <p className="text-sm font-semibold">Modulo ativo</p>
            <p className="mt-1 text-xs leading-5 text-white/58">
              Cotacao de Preco em desenvolvimento frontend.
            </p>
          </div>

          <Link
            href="/"
            className="mt-4 flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-white/68 transition hover:bg-white/8 hover:text-white"
          >
            <LogOut size={18} />
            Sair
          </Link>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-10 border-b border-black/8 bg-[#f7fbff]/90 px-4 py-4 backdrop-blur md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-[#070b12] font-black text-[#9bdcff] lg:hidden">
                  NT
                </div>
                <div>
                  <p className="text-sm text-black/52">Bem-vindo</p>
                  <h1 className="text-xl font-bold sm:text-2xl">Painel New Tesc</h1>
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
                <button className="flex h-10 items-center gap-2 rounded-lg border border-black/8 bg-white px-3 text-sm font-semibold">
                  <UserRound size={18} />
                  <span className="hidden sm:inline">Admin</span>
                </button>
              </div>
            </div>
          </header>

          <div className="px-4 py-6 md:px-8 md:py-8">
            <section className="mb-7 rounded-lg border border-black/8 bg-[#070b12] p-6 text-white shadow-[0_16px_44px_rgba(7,11,18,0.12)] md:p-8">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <p className="mb-3 inline-flex rounded-full bg-[#9bdcff] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#070b12]">
                    Primeiro modulo
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">Cotacao de Preco</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/68">
                    Centralize cadastros e rotinas de cotacao para preparar o
                    fluxo de compras antes da integracao com backend.
                  </p>
                </div>
                <button className="h-11 rounded-lg bg-[#9bdcff] px-5 text-sm font-bold text-[#070b12] transition hover:bg-[#bdeaff]">
                  Nova cotacao
                </button>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {moduleActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group flex min-h-52 flex-col rounded-lg border border-black/8 bg-white p-5 text-left shadow-[0_12px_34px_rgba(7,11,18,0.06)] transition hover:-translate-y-0.5 hover:border-[#45bff7] hover:shadow-[0_18px_42px_rgba(7,11,18,0.1)]"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="grid size-12 place-items-center rounded-lg bg-[#e4f6ff] text-[#070b12] transition group-hover:bg-[#9bdcff]">
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
                  <h3 className="text-lg font-bold">Cotacoes recentes</h3>
                  <button className="rounded-lg border border-black/8 px-3 py-2 text-sm font-semibold hover:border-[#45bff7]">
                    Ver todas
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-black/8 text-left text-black/48">
                        <th className="py-3 font-semibold">Codigo</th>
                        <th className="py-3 font-semibold">Produto</th>
                        <th className="py-3 font-semibold">Fornecedor</th>
                        <th className="py-3 font-semibold">Status</th>
                        <th className="py-3 font-semibold">Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["COT-0012", "Insumo industrial", "Fornecedor Alfa", "Aberta", "R$ 4.820,00"],
                        ["COT-0011", "Componente tecnico", "Metal Sul", "Em analise", "R$ 2.190,00"],
                        ["COT-0010", "Embalagem padrao", "Pack Norte", "Concluida", "R$ 780,00"],
                      ].map((row) => (
                        <tr key={row[0]} className="border-b border-black/6 last:border-0">
                          {row.map((cell, index) => (
                            <td
                              key={cell}
                              className={`py-4 ${index === 0 ? "font-bold" : "text-black/64"}`}
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
                <h3 className="text-lg font-bold">Resumo</h3>
                <div className="mt-5 space-y-4">
                  {[
                    ["Produtos cadastrados", "128"],
                    ["Fornecedores ativos", "34"],
                    ["Cotacoes abertas", "07"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-lg bg-[#f4faff] px-4 py-3"
                    >
                      <span className="text-sm text-black/60">{label}</span>
                      <strong className="text-xl">{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

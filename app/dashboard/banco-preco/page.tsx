"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Boxes,
  Building2,
  FileText,
  PackagePlus,
  Plus,
  Save,
  Search,
  Tags,
  Trash2,
} from "lucide-react";

const bancoPrecoMenu = [
  { label: "Cadastra o Produto", icon: PackagePlus },
  { label: "Consultar Órgão Documento", icon: Search },
  { label: "Categorias", icon: Tags },
  { label: "Fornecedores", icon: Building2 },
  { label: "N.Fiscal", icon: FileText },
  { label: "Relatórios", icon: FileText },
];

const sections = [
  {
    title: "Identificação do produto",
    icon: PackagePlus,
    fields: [
      { label: "Código do produto", placeholder: "PROD-0001" },
      { label: "Nome do produto" },
      { label: "Unidade", placeholder: "Unidade, caixa, metro" },
      { label: "Órgão Documento Medio Edital" },
      { label: "Órgão Documento Medio Inex" },
      { label: "Descrição", textarea: true, wide: true },
      { label: "Especificação", textarea: true, wide: true },
    ],
  },
  {
    title: "Órgão Documento",
    icon: Tags,
    fields: [
      { label: "Empresa/Órgão" },
      { label: "Documento" },
      { label: "Fonte de Pesquisa" },
      { label: "Data" },
    ],
  },
];

type Field = {
  label: string;
  placeholder?: string;
  type?: string;
  step?: string;
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
          placeholder={field.placeholder ?? "Descreva as informações"}
        />
      ) : (
        <input
          className={inputClass}
          placeholder={field.placeholder ?? "Digite as informações"}
          type={field.type ?? "text"}
          step={field.step}
        />
      )}
    </label>
  );
}

function PriceComparisons() {
  const [comparisons, setComparisons] = useState([1]);
  const comparisonFields = [
    { label: "Empresa/Órgão" },
    { label: "Documento" },
    { label: "Fonte de Pesquisa" },
    { label: "Data" },
  ];

  function addComparison() {
    setComparisons((current) => [...current, Math.max(...current) + 1]);
  }

  function removeComparison(indexToRemove: number) {
    setComparisons((current) => current.filter((_, index) => index !== indexToRemove));
  }

  return (
    <section className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
            <Tags size={20} />
          </div>
          <h2 className="text-lg font-bold">Órgão Documento</h2>
        </div>
        <button
          type="button"
          onClick={addComparison}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-4 text-sm font-bold text-white transition hover:bg-[#111827]"
        >
          <Plus size={17} />
          Adicionar seção
        </button>
      </div>

      <div className="space-y-4">
        {comparisons.map((comparison, index) => (
          <div key={comparison} className="rounded-lg border border-black/10 bg-[#f8fbfb] p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-sm font-bold text-[#0f172a]">Comparação {index + 1}</h3>
              {comparisons.length > 1 ? (
                <button
                  type="button"
                  onClick={() => removeComparison(index)}
                  className="grid size-9 place-items-center rounded-lg border border-black/10 bg-white text-black/60 transition hover:border-red-300 hover:text-red-600"
                  aria-label={`Remover comparação ${index + 1}`}
                >
                  <Trash2 size={16} />
                </button>
              ) : null}
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {comparisonFields.map((field) => (
                <FieldControl key={`${field.label}-${comparison}`} field={field} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductListSection() {
  return (
    <section className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
          <Boxes size={20} />
        </div>
        <h2 className="text-lg font-bold">Listra de Produto</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-black/8 text-left text-black/48">
              <th className="py-3 font-semibold">Código</th>
              <th className="py-3 font-semibold">Produto</th>
              <th className="py-3 font-semibold">Unidade</th>
              <th className="py-3 font-semibold">Órgão Documento Medio Edital</th>
              <th className="py-3 font-semibold">Órgão Documento Medio Inex</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black/6 last:border-0">
              <td className="py-4 pr-4">
                <input
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/32 focus:border-[#0d9488] focus:ring-4 focus:ring-[#99f6e4]/35"
                  placeholder="PROD-0001"
                  type="text"
                />
              </td>
              <td className="py-4 pr-4">
                <input
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/32 focus:border-[#0d9488] focus:ring-4 focus:ring-[#99f6e4]/35"
                  placeholder="Digite as informações"
                  type="text"
                />
              </td>
              <td className="py-4 pr-4">
                <input
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/32 focus:border-[#0d9488] focus:ring-4 focus:ring-[#99f6e4]/35"
                  placeholder="Digite as informações"
                  type="text"
                />
              </td>
              <td className="py-4 pr-4">
                <input
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/32 focus:border-[#0d9488] focus:ring-4 focus:ring-[#99f6e4]/35"
                  placeholder="Digite as informações"
                  type="text"
                />
              </td>
              <td className="py-4">
                <input
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none transition placeholder:text-black/32 focus:border-[#0d9488] focus:ring-4 focus:ring-[#99f6e4]/35"
                  placeholder="Digite as informações"
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function BancoPrecoPage() {
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
              <p className="text-sm font-semibold text-[#0f766e]">Módulo principal</p>
              <h1 className="text-2xl font-bold sm:text-3xl">Banco de Órgão Documento</h1>
            </div>
          </div>

          <button className="flex h-11 items-center gap-2 rounded-lg bg-[#0f172a] px-5 text-sm font-bold text-white transition hover:bg-[#111827] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45">
            <Save size={18} />
            Salvar produto
          </button>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-77px)]">
        <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-[#07111f] px-5 py-6 text-white lg:block">
          <div className="mb-6 px-2">
            <p className="text-xs font-bold uppercase text-[#2dd4bf]">Menu Banco de Órgão Documento</p>
            <h2 className="mt-2 text-lg font-bold">Operações</h2>
          </div>

          <nav className="space-y-2">
            {bancoPrecoMenu.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold text-white/72 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} className="shrink-0 text-[#2dd4bf]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
          <section className="mb-6 grid gap-4 lg:grid-cols-[1fr_340px]">
            <div className="rounded-lg border border-black/8 bg-[#0f172a] p-6 text-white shadow-[0_16px_44px_rgba(15,23,42,0.13)] md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="max-w-3xl">
                  <div className="mb-4 grid size-12 place-items-center rounded-lg bg-[#2dd4bf] text-[#0f172a]">
                    <Boxes size={25} />
                  </div>
                  <h2 className="text-2xl font-bold md:text-3xl">Cadastra o Produto</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                    Registre produtos, órgãos documentos de referência, fornecedores e especificações para consultas de compra.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3 rounded-lg border border-white/14 bg-white/8 p-3">
                    <button
                      type="button"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#2dd4bf] px-5 text-sm font-bold text-[#0f172a] shadow-[0_10px_24px_rgba(45,212,191,0.26)] transition hover:bg-[#99f6e4] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45"
                    >
                      <PackagePlus size={18} />
                      Cadastra o Produto
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#2dd4bf] px-5 text-sm font-bold text-[#0f172a] shadow-[0_10px_24px_rgba(45,212,191,0.26)] transition hover:bg-[#99f6e4] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45"
                    >
                      <Search size={18} />
                      Consultar Órgão Documento
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#2dd4bf] px-5 text-sm font-bold text-[#0f172a] shadow-[0_10px_24px_rgba(45,212,191,0.26)] transition hover:bg-[#99f6e4] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45"
                    >
                      <FileText size={18} />
                      N.Fiscal
                    </button>
                    <button
                      type="button"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#2dd4bf] px-5 text-sm font-bold text-[#0f172a] shadow-[0_10px_24px_rgba(45,212,191,0.26)] transition hover:bg-[#99f6e4] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45"
                    >
                      <FileText size={18} />
                      Relatório de Órgão Documento
                    </button>
                  </div>
                </div>
                <div className="rounded-lg border border-white/12 bg-white/8 px-4 py-3">
                  <p className="text-xs text-white/54">Funcionalidade</p>
                  <p className="mt-1 text-sm font-bold text-[#99f6e4]">Banco de Órgão Documento</p>
                </div>
              </div>
            </div>

            <aside className="rounded-lg border border-black/8 bg-white p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-[#ccfbf1] text-[#0f766e]">
                  <Tags size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Referência de Órgão Documento</h3>
                  <p className="text-xs text-black/50">Produto, fornecedor e cotação.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-black/62">
                <p>Use os campos para manter uma base de produtos e valores pesquisados.</p>
                <p>As informações ajudam a comparar órgãos documentos e organizar futuras cotações.</p>
              </div>
            </aside>
          </section>

          <form className="space-y-5">
            {sections.map((section) => {
              const Icon = section.icon;

              if (section.title === "Órgão Documento") {
                return (
                  <div key={section.title} className="space-y-5">
                    <PriceComparisons />
                    <ProductListSection />
                  </div>
                );
              }

              return (
                <section
                  key={section.title}
                  className="rounded-lg border border-black/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:p-6"
                >
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

            <div className="flex flex-col-reverse gap-3 border-t border-black/8 pt-5 sm:flex-row sm:justify-end">
              <Link
                href="/dashboard"
                className="flex h-11 items-center justify-center rounded-lg border border-black/10 bg-white px-5 text-sm font-bold text-black/70 transition hover:border-[#0d9488] hover:text-[#0d9488]"
              >
                Cancelar
              </Link>
              <button className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-5 text-sm font-bold text-white transition hover:bg-[#111827] focus:outline-none focus:ring-4 focus:ring-[#99f6e4]/45">
                <Save size={18} />
                Salvar produto
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

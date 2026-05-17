import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#070b12]">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden overflow-hidden bg-[#070b12] text-white lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(155,220,255,0.42),transparent_34%),linear-gradient(135deg,rgba(69,191,247,0.22),transparent_48%)]" />
          <div className="relative flex h-full flex-col justify-between px-14 py-12">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-lg bg-[#9bdcff] font-black text-[#070b12]">
                NT
              </div>
              <div>
                <p className="text-lg font-bold tracking-wide">New Tesc</p>
                <p className="text-sm text-white/62">Gestao de compras</p>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="mb-5 inline-flex rounded-full border border-white/14 px-4 py-2 text-sm text-[#cdefff]">
                Plataforma administrativa
              </p>
              <h1 className="text-5xl font-bold leading-[1.04]">
                Controle cotacoes, produtos e fornecedores em uma interface clara.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
                Um painel direto para equipes que precisam comparar precos,
                organizar cadastros e acompanhar etapas de compra.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {["Cotacoes", "Produtos", "Fornecedores"].map((item) => (
                <div key={item} className="border-t border-white/15 pt-4">
                  <p className="text-sm text-white/50">Modulo</p>
                  <p className="mt-1 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="grid size-11 place-items-center rounded-lg bg-[#070b12] font-black text-[#9bdcff]">
                NT
              </div>
              <div>
                <p className="text-lg font-bold">New Tesc</p>
                <p className="text-sm text-black/55">Gestao de compras</p>
              </div>
            </div>

            <div className="rounded-lg border border-black/8 bg-white p-7 shadow-[0_24px_80px_rgba(7,11,18,0.08)] sm:p-9">
              <div className="mb-8">
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[#e4f6ff] text-[#070b12]">
                  <ShieldCheck size={24} strokeWidth={2.2} />
                </div>
                <h2 className="text-3xl font-bold">Entrar no sistema</h2>
                <p className="mt-2 text-sm leading-6 text-black/58">
                  Acesse o painel administrativo da New Tesc.
                </p>
              </div>

              <form className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">E-mail</span>
                  <span className="flex h-12 items-center gap-3 rounded-lg border border-black/10 bg-[#fbfdff] px-4 focus-within:border-[#45bff7] focus-within:ring-4 focus-within:ring-[#9bdcff]/25">
                    <Mail size={18} className="text-black/45" />
                    <input
                      className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none"
                      placeholder="usuario@newtesc.com"
                      type="email"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Senha</span>
                  <span className="flex h-12 items-center gap-3 rounded-lg border border-black/10 bg-[#fbfdff] px-4 focus-within:border-[#45bff7] focus-within:ring-4 focus-within:ring-[#9bdcff]/25">
                    <LockKeyhole size={18} className="text-black/45" />
                    <input
                      className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none"
                      placeholder="Digite sua senha"
                      type="password"
                    />
                  </span>
                </label>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-black/66">
                    <input className="size-4 accent-[#070b12]" type="checkbox" />
                    Lembrar acesso
                  </label>
                  <a className="font-semibold text-[#0577aa]" href="#">
                    Esqueci a senha
                  </a>
                </div>

                <Link
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#070b12] px-4 text-sm font-bold text-white transition hover:bg-black focus:outline-none focus:ring-4 focus:ring-[#9bdcff]/45"
                  href="/dashboard"
                >
                  Entrar
                  <ArrowRight size={18} />
                </Link>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

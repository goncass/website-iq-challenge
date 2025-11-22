"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Brain, Mail, Lock, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      if (data.user) {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message || "Email ou senha incorretos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center px-4 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00E5FF] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7B68EE] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center mb-8 group">
          <Brain className="w-10 h-10 text-[#00E5FF] mr-3 group-hover:scale-110 transition-transform" />
          <h1 className="text-3xl font-bold text-white">
            IQ <span className="text-[#00E5FF]">Challenge</span>
          </h1>
        </Link>

        {/* Card */}
        <div className="bg-[#1F1F3A] border border-[rgba(192,192,192,0.2)] rounded-2xl p-8 shadow-[0_0_50px_rgba(0,229,255,0.1)]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo de Volta</h2>
            <p className="text-[#C0C0C0]">Entre para acessar seus resultados</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C0C0C0]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#1A1A2E] border border-[rgba(192,192,192,0.2)] rounded-xl pl-12 pr-4 py-3 text-white placeholder-[#C0C0C0]/50 focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-white">
                  Senha
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-[#00E5FF] hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C0C0C0]" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#1A1A2E] border border-[rgba(192,192,192,0.2)] rounded-xl pl-12 pr-4 py-3 text-white placeholder-[#C0C0C0]/50 focus:outline-none focus:border-[#00E5FF] focus:ring-2 focus:ring-[#00E5FF]/20 transition-all"
                  placeholder="Sua senha"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#1A1A2E] font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Entrando...</span>
              ) : (
                <>
                  <span>Entrar</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-[rgba(192,192,192,0.2)]"></div>
            <span className="text-sm text-[#C0C0C0]">ou</span>
            <div className="flex-1 h-px bg-[rgba(192,192,192,0.2)]"></div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-[#C0C0C0] text-sm">
              Não tem uma conta?{" "}
              <Link
                href="/auth/register"
                className="text-[#00E5FF] font-semibold hover:underline"
              >
                Criar Conta Grátis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

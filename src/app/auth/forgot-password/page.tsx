"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Brain, Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (resetError) throw resetError;

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Erro ao enviar email. Tente novamente.");
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
            <h2 className="text-2xl font-bold text-white mb-2">Recuperar Senha</h2>
            <p className="text-[#C0C0C0]">
              {success
                ? "Verifique seu email para redefinir sua senha"
                : "Digite seu email para receber instruções"}
            </p>
          </div>

          {/* Success Message */}
          {success ? (
            <div className="space-y-6">
              <div className="p-6 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-xl">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email Enviado!</h3>
                    <p className="text-[#C0C0C0] text-sm leading-relaxed">
                      Enviamos um link de recuperação para <strong className="text-white">{email}</strong>.
                      Verifique sua caixa de entrada e spam.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/auth/login">
                <button className="w-full bg-[#1A1A2E] border border-[rgba(192,192,192,0.2)] text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:border-[#00E5FF] flex items-center justify-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Voltar ao Login</span>
                </button>
              </Link>
            </div>
          ) : (
            <>
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleResetPassword} className="space-y-5">
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#1A1A2E] font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? "Enviando..." : "Enviar Link de Recuperação"}
                </button>
              </form>

              {/* Back to Login */}
              <div className="mt-6 text-center">
                <Link
                  href="/auth/login"
                  className="text-[#C0C0C0] text-sm hover:text-[#00E5FF] transition-colors inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar ao Login</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

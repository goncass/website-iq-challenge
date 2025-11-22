"use client";

import { Brain, Zap, Award, TrendingUp, Lock, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A2E]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00E5FF] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7B68EE] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-12">
            <Brain className="w-12 h-12 text-[#00E5FF] mr-3" />
            <h1 className="text-4xl font-bold text-white">
              IQ <span className="text-[#00E5FF]">Challenge</span>
            </h1>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Descubra Seu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7B68EE]">
                Verdadeiro Potencial
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-[#C0C0C0] mb-12 leading-relaxed">
              Teste profissional de QI com análise completa e personalizada.
              Descubra suas habilidades cognitivas em minutos.
            </p>

            {/* CTA Button */}
            <Link href="/auth/register">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#1A1A2E] text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Começar o Teste
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00B8D4] to-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </Link>

            <p className="mt-6 text-sm text-[#C0C0C0]">
              ✨ Primeiro teste gratuito • 📊 Resultados em 20 minutos • 🔒 100% confidencial
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-[#1A1A2E] to-[#1F1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
            Por Que Fazer o <span className="text-[#00E5FF]">IQ Challenge</span>?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-[#1F1F3A] border border-[rgba(192,192,192,0.2)] rounded-2xl p-8 transition-all duration-300 hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00E5FF] to-[#00B8D4] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-[#1A1A2E]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Teste Científico</h4>
              <p className="text-[#C0C0C0] leading-relaxed">
                Baseado em metodologias validadas cientificamente, incluindo Matrizes de Raven e padrões reconhecidos internacionalmente.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-[#1F1F3A] border border-[rgba(192,192,192,0.2)] rounded-2xl p-8 transition-all duration-300 hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7B68EE] to-[#9370DB] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Análise Completa</h4>
              <p className="text-[#C0C0C0] leading-relaxed">
                Receba um relatório detalhado com seu QI, classificação, pontos fortes, fracos e comparação com a população.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-[#1F1F3A] border border-[rgba(192,192,192,0.2)] rounded-2xl p-8 transition-all duration-300 hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B9D] to-[#FF8FAB] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Resultados Rápidos</h4>
              <p className="text-[#C0C0C0] leading-relaxed">
                Complete o teste em 20-30 minutos e receba seus resultados imediatamente após o pagamento de apenas €2.95.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#1F1F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                O Que Você Vai <span className="text-[#00E5FF]">Descobrir</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00E5FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Seu QI Exato</h4>
                    <p className="text-[#C0C0C0]">Pontuação precisa baseada em escala internacional (70-145)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7B68EE]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#7B68EE]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Comparação Populacional</h4>
                    <p className="text-[#C0C0C0]">Veja como você se compara com a população geral</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6B9D]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#FF6B9D]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Pontos Fortes e Fracos</h4>
                    <p className="text-[#C0C0C0]">Análise detalhada das suas habilidades cognitivas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFA500]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-[#FFA500]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Relatório Personalizado</h4>
                    <p className="text-[#C0C0C0]">Análise única gerada especificamente para você</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1F1F3A] to-[#2A2A4A] border border-[#00E5FF]/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,229,255,0.2)]">
                <div className="text-center mb-6">
                  <div className="inline-block bg-[#00E5FF]/10 px-6 py-2 rounded-full mb-4">
                    <span className="text-[#00E5FF] font-bold">EXEMPLO DE RESULTADO</span>
                  </div>
                  <div className="text-6xl font-bold text-white mb-2">128</div>
                  <div className="text-[#C0C0C0] text-lg">Seu QI Estimado</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#1A1A2E] rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Classificação</span>
                      <span className="text-[#00E5FF]">Superior</span>
                    </div>
                    <div className="w-full bg-[#2A2A4A] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#00E5FF] to-[#7B68EE] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>

                  <div className="bg-[#1A1A2E] rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Percentil</span>
                      <span className="text-[#00E5FF]">Top 3%</span>
                    </div>
                    <p className="text-sm text-[#C0C0C0]">Você está acima de 97% da população</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-[#C0C0C0] italic">
                    * Exemplo ilustrativo. Seus resultados serão únicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#1F1F3A] to-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto Para Descobrir Seu QI?
          </h3>
          <p className="text-xl text-[#C0C0C0] mb-10">
            Junte-se a milhares de pessoas que já descobriram seu potencial cognitivo
          </p>
          
          <Link href="/auth/register">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-[#1A1A2E] text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,229,255,0.6)]">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Iniciar Teste Gratuito
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </Link>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-[#C0C0C0]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00E5FF] rounded-full"></div>
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00E5FF] rounded-full"></div>
              <span>Resultados em 20 min</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00E5FF] rounded-full"></div>
              <span>100% seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] border-t border-[rgba(192,192,192,0.1)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-[#00E5FF]" />
              <span className="text-white font-bold text-xl">IQ Challenge</span>
            </div>
            
            <div className="flex gap-8 text-[#C0C0C0] text-sm">
              <Link href="/privacy" className="hover:text-[#00E5FF] transition-colors">
                Privacidade
              </Link>
              <Link href="/terms" className="hover:text-[#00E5FF] transition-colors">
                Termos
              </Link>
              <Link href="/contact" className="hover:text-[#00E5FF] transition-colors">
                Contato
              </Link>
            </div>
            
            <div className="text-[#C0C0C0] text-sm">
              © 2024 IQ Challenge. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

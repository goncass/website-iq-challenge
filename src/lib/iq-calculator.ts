/**
 * Converte pontuação bruta em QI
 * Baseado em distribuição normal com média 100 e desvio padrão 15
 */
export function calculateIQ(rawScore: number, maxScore: number): number {
  // Normaliza a pontuação para 0-1
  const normalizedScore = rawScore / maxScore;
  
  // Converte para QI (média 100, desvio padrão 15)
  // Usando transformação z-score
  const zScore = (normalizedScore - 0.5) / 0.15;
  const iq = Math.round(100 + (zScore * 15));
  
  // Limita entre 70 e 145
  return Math.max(70, Math.min(145, iq));
}

/**
 * Classifica o QI em categorias
 */
export function classifyIQ(iq: number): string {
  if (iq >= 130) return 'Muito Superior';
  if (iq >= 116) return 'Superior';
  if (iq >= 85) return 'Normal';
  if (iq >= 70) return 'Abaixo da Média';
  return 'Muito Abaixo da Média';
}

/**
 * Calcula o percentil baseado no QI
 */
export function calculatePercentile(iq: number): number {
  // Aproximação usando distribuição normal
  const z = (iq - 100) / 15;
  
  // Função de distribuição cumulativa aproximada
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const probability = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  
  const percentile = z > 0 ? (1 - probability) * 100 : probability * 100;
  return Math.round(percentile);
}

/**
 * Gera análise personalizada baseada no QI
 */
export function generateAnalysis(iq: number, score: number, maxScore: number): string {
  const classification = classifyIQ(iq);
  const percentile = calculatePercentile(iq);
  const percentage = Math.round((score / maxScore) * 100);
  
  const analyses: Record<string, string> = {
    'Muito Superior': `Parabéns! Seu QI de ${iq} coloca você no topo ${100 - percentile}% da população. Você demonstrou capacidades cognitivas excepcionais, com habilidades notáveis em raciocínio lógico, reconhecimento de padrões e resolução de problemas complexos. Pessoas com este nível de QI frequentemente se destacam em áreas que exigem pensamento abstrato e análise profunda.`,
    
    'Superior': `Excelente resultado! Com um QI de ${iq}, você está acima de ${percentile}% da população. Suas habilidades cognitivas são significativamente acima da média, demonstrando forte capacidade de raciocínio lógico e resolução de problemas. Você possui grande potencial para atividades que exigem pensamento analítico e criativo.`,
    
    'Normal': `Seu QI de ${iq} está dentro da faixa normal, onde se encontra a maioria da população. Você demonstrou boas habilidades de raciocínio e resolução de problemas. Este resultado indica capacidades cognitivas sólidas e equilibradas, adequadas para a maioria das atividades profissionais e acadêmicas.`,
    
    'Abaixo da Média': `Seu QI de ${iq} está ligeiramente abaixo da média. Isso não define seu potencial completo - a inteligência é multifacetada e pode ser desenvolvida através de prática e aprendizado contínuo. Considere focar em áreas específicas de interesse para desenvolver suas habilidades.`,
    
    'Muito Abaixo da Média': `Seu resultado indica um QI de ${iq}. Lembre-se que testes de QI medem apenas certos aspectos da inteligência. Existem múltiplas formas de inteligência, e este teste captura apenas algumas delas. Considere buscar orientação profissional para uma avaliação mais completa.`
  };
  
  return analyses[classification] || analyses['Normal'];
}

/**
 * Identifica pontos fortes e fracos baseado nas respostas
 */
export function analyzeStrengthsWeaknesses(
  answers: Record<string, number>,
  questions: Array<{ id: string; type: string; points: number }>
): { strengths: string[]; weaknesses: string[] } {
  const typeScores: Record<string, { correct: number; total: number }> = {};
  
  // Agrupa por tipo de questão
  questions.forEach((q) => {
    if (!typeScores[q.type]) {
      typeScores[q.type] = { correct: 0, total: 0 };
    }
    typeScores[q.type].total += q.points;
    typeScores[q.type].correct += answers[q.id] || 0;
  });
  
  // Calcula percentuais
  const typePerformance = Object.entries(typeScores).map(([type, scores]) => ({
    type,
    percentage: (scores.correct / scores.total) * 100
  }));
  
  // Ordena por performance
  typePerformance.sort((a, b) => b.percentage - a.percentage);
  
  const typeNames: Record<string, string> = {
    matrix: 'Raciocínio Visual e Padrões',
    numeric: 'Raciocínio Numérico',
    analogy: 'Pensamento Analógico',
    rotation: 'Visualização Espacial',
    pattern: 'Reconhecimento de Padrões'
  };
  
  const strengths = typePerformance
    .slice(0, 2)
    .map(t => typeNames[t.type] || t.type);
    
  const weaknesses = typePerformance
    .slice(-2)
    .map(t => typeNames[t.type] || t.type);
  
  return { strengths, weaknesses };
}

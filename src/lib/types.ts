export interface User {
  id: string;
  email: string;
  stripe_customer_id?: string;
  created_at: string;
}

export interface Test {
  id: string;
  user_id: string;
  answers: Record<string, number>;
  score: number;
  iq_score: number;
  created_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  stripe_payment_id: string;
  amount: number;
  type: 'test_result' | 'certificate';
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface Question {
  id: string;
  type: 'matrix' | 'numeric' | 'analogy' | 'rotation' | 'pattern';
  question: string;
  options: string[];
  correct_answer: number;
  points: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  image_url?: string;
}

export interface TestResult {
  score: number;
  iq_score: number;
  classification: string;
  strengths: string[];
  weaknesses: string[];
  analysis: string;
  percentile: number;
}

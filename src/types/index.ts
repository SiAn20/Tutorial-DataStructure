export type locale = "en" | "es";

export type Category =
  | "data-structure"
  | "sorting"
  | "graph"
  | "dynamic-programming"
  | "string";

export type Difficulty = "easy" | "hard";

export type Language = "javascript" | "python" | "c++";

export interface Step {
  elements: StepElement[];
  codeLine: number;
  explanation: {
    es: string;
    en: string;
  };
  variables?: Record<string, string | number>;
  action?: "highlight" | "push" | "pop" | "compare" | "swap" | "found" | "idle";
}

export interface StepElement {
  id: string;
  value: string | number;
  state?: "default" | "active" | "sorted" | "comparing" | "found" | "removed";
  x?: number;
  y?: number;
  connections?: string[];
}

export interface CodeSnippets {
  javascript: string[];
  python: string[];
  cpp: string[];
}

export interface Operation {
  id: string;
  label: string;
  description: {
    es: string;
    en: string;
  };
  generateSteps: (currentElements: StepElement[], value?: number) => Step[];
}

export interface Exercise {
  id: string;
  title: {
    es: string;
    en: string;
  };
  difficulty: Difficulty;
  description: {
    es: string;
    en: string;
  };
  examples: Array<{
    input: string;
    output: string;
    explanation?: { es: string; en: string };
  }>;
  starterCode: {
    javascript: string;
    python: string;
    cpp: string;
  };
  solution: {
    javascript: string;
    python: string;
    cpp: string;
  };
  testCases: Array<{
    input: unknown;
    expected: unknown;
  }>;
  hints: {
    es: string[];
    en: string[];
  };
  tags: string[];
}

export interface DataStructure {
  id: string;
  slug: string;
  category: Category;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  visualizerType: "array" | "nodes" | "bars" | "grid" | "tree";
  initialElements: StepElement[];
  operations: Operation[];
  code: CodeSnippets;
  complexity: {
    time: Record<string, string>; // { push: 'O(1)', pop: 'O(1)' }
    space: string; // 'O(n)'
  };
  exercises: Exercise[];
}

export type SkillItem = {
  name: string;
  note: string;
};

export type SkillGroup = {
  category: string;
  blurb: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    blurb: "Languages I use to build and solve problems.",
    items: [
      { name: "Python", note: "Scripting, web backends and machine-learning workflows" },
      { name: "Java", note: "Object-oriented programming and backend services" },
      { name: "C", note: "Core programming, memory and data-structure fundamentals" },
      { name: "SQL", note: "Relational schema design and queries" },
    ],
  },
  {
    category: "Web & Backend Development",
    blurb: "Turning ideas into working, usable applications.",
    items: [
      { name: "HTML", note: "Semantic, accessible page structure" },
      { name: "CSS", note: "Responsive layouts and clean visual styling" },
      { name: "Flask", note: "Lightweight Python web apps and REST endpoints" },
    ],
  },
  {
    category: "AI & Machine Learning",
    blurb: "Where I'm building depth and doing applied work.",
    items: [
      { name: "ML fundamentals", note: "Supervised learning, features, evaluation" },
      { name: "Model development & evaluation", note: "Training, testing and honest reporting of results" },
      { name: "Streamlit applications", note: "Fast, interactive interfaces for ML and data" },
    ],
  },
  {
    category: "Tools",
    blurb: "The everyday toolkit around the code.",
    items: [
      { name: "Git", note: "Version control and branching workflows" },
      { name: "GitHub", note: "Repositories, collaboration and documentation" },
      { name: "VS Code", note: "Primary development environment" },
    ],
  },
];

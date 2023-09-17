export type Project = {
  title: string;
  description: string;
  github?: string;
  link?: string;
  stack: Stack[];
  image: string; 
};

export type SkillGroup = {
  category: string;
  children: string[]
}

export type Stack =
  | "react"
  | "vue"
  | "Angular"
  | "python"
  | "node"
  | "php"
  | "laravel"
  | "nest"
  | "mongo"
  | "postgresql"
  | "next"
  | "tailwind"
  | "mui";

export const projects: Project[] = [
  {
    title: "ChatDB",
    description:
      "Time is money! Say hello to your personal AI data analyst. Think ChatGPT, but for your database.",
    github: "https://chatdb.ai/",
    link: "https://chatdb.ai/",
    stack: ["next", 'tailwind'],
    image: '/assets/projects/1.png'
  },
  {
    title: "Wordbase",
    description:
      "Time is money! Say hello to your personal AI data analyst. Think ChatGPT, but for your database.",
    github: "https://chatdb.ai/",
    link: "https://chatdb.ai/",
    stack: ["next", 'tailwind'],
    image: '/assets/projects/2.png'
  },
  {
    title: "ProHeadShot",
    description:
      "Time is money! Say hello to your personal AI data analyst. Think ChatGPT, but for your database.",
    github: "https://chatdb.ai/",
    link: "https://chatdb.ai/",
    stack: ["next", 'tailwind'],
    image: '/assets/projects/3.png'
  },
  {
    title: "ProHeadShot",
    description:
      "Time is money! Say hello to your personal AI data analyst. Think ChatGPT, but for your database.",
    github: "https://chatdb.ai/",
    link: "https://chatdb.ai/",
    stack: ["next", 'tailwind'],
    image: '/assets/projects/4.png'
  },
];

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    children: ['JavaScript', 'TypeScript', 'Python']
  },
  {
    category: 'Frontend',
    children: ['React', 'Next.js', 'Svelkit', 'Astro', 'Redux', 'React Router', 'React Query', 'Remix', 'Gatsby', 'Zustand']
  },
  {
    category: 'UI Libraries',
    children: ['TailwindCSS', 'Material UI', 'Ant Design', 'Charkra UI', 'React Bootstrap']
  },
  {
    category: 'Backend',
    children: ['Express.js', 'Nest.js', 'Django', 'Laravel', 'Flask']
  },
  {
    category: 'Database',
    children: ['PostgreSQL', 'MongoDB', 'SQL', 'AWS RDS', 'Firebase', 'Supabase']
  },
  {
    category: 'Cloud Services',
    children: ['AWS', 'GCP']
  }
]
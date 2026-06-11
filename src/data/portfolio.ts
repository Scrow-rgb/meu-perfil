import {
  ArrowUpRight,
  Bot,
  Braces,
  Cloud,
  Code2,
  Coffee,
  Database,
  GitBranch,
  Mail,
  MessageCircle,
  Server,
  Terminal,
} from "lucide-react";

import type {
  ContactLink,
  Metric,
  NavItem,
  Project,
  TechStackItem,
  TimelineItem,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Metrics", href: "#metrics" },
];

export const metrics: Metric[] = [
  { value: "15+", label: "Projetos Desenvolvidos" },
  { value: "12+", label: "Tecnologias Dominadas" },
  { value: "04", label: "Anos de Experiência" },
];

export const techStackItems: TechStackItem[] = [
  { label: "React / Next.js", icon: Terminal },
  { label: "TypeScript", icon: Code2 },
  { label: "TailwindCSS", icon: Braces },
  { label: "Java / Spring", icon: Coffee },
  { label: "Python", icon: Braces },
  { label: "Node.js", icon: Server },
  { label: "PostgreSQL", icon: Database },
  { label: "Docker", icon: Bot },
  { label: "AWS", icon: Cloud },
  { label: "Git / GitHub", icon: GitBranch },
];

export const projects: Project[] = [
  {
    title: "Sistema de Chat em Tempo Real",
    description:
      "Plataforma de comunicação segura com baixa latência e criptografia ponta-a-ponta.",
    tags: ["WebSocket", "Node.js", "React"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCES0W3NBfhxpT7JiqM1En0ikfyoxeBRQGY5OtQaETMBzqQ0mMZVrZr7LkQaor5_Lqu3isyJGl6H7mvCyT8fzRMZy1-G_ZBAGhloPKcrgtzSnFdIbZ8DwuKb1N6MFA9HMMYTwIMeakjQzh-Va2NVbmTPwu6xvRlh3ECFygUaRh5fkOmfNbhACmYcW5YeUqz8cAPJwBwyCWfPyO77lnorphJ5Z9VOFjcbUPnmt6cm1dACUWlRfSVud1Rh64Sq9IddRIzYmHj4oNBzXQH",
    imageAlt:
      "Interface futurista de chat em tema escuro com acentos roxos neon.",
    href: "#",
  },
  {
    title: "Dashboard Administrativo",
    description:
      "Interface analítica robusta para gestão de métricas complexas e monitoramento de sistemas.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzOdsWfJuACq0nL5qy9vYRGwdKLqC_u1KUoDHso963vTvSKEDQYtOtGXtSA26b2WD6ZyTM8WIPTOe1BuqKqQoDCLiWKi62gFaFWRVDaAOWDVSgeAPzMKP-FuSVzPBnfPazlT297pRxxY2JKDB41ZsPAndj5t86J6LGurBBH7zQw7LXMaV68sUePZ1IigEu1XVqSaiTP23KSK-YkwbzUFtb04XqPi_2iJED_FHA6pXTrvjKZTNBsA8ghcAvvTAvmxVnJ2pQKvScoGTH",
    imageAlt:
      "Dashboard administrativo escuro com gráficos roxos e azuis em tempo real.",
    href: "#",
  },
  {
    title: "Automação para Discord",
    description:
      "Bot corporativo escalável para gestão de comunidades, automação de tarefas e integração de fluxos de trabalho.",
    tags: ["Python", "Discord API"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqdIn2Y_T7Q5CbZHcxpOfbkP4SYf40P11atVM2MSU5QlnuxUDHKkD2ad1K-kzDM1jl0nXm_UCcGKmQPWDPmp9CBqswzNA4lJVhKKqnUTuQSgXxOMrZG7CqH8DWZOw1EkekEs58w7iG4vZrb285xZVShs2LA6RPk1WZV651_szFfI9foc078G-MStP0Ag_eWHa-OlPL_K1fzLNgLxNjwyPH87FgGUJTc3XbaaLOHsYEQf5-TpAA0KgU3xTPABlWjK1L-wtKEwxndSXK",
    imageAlt:
      "Visualização abstrata de automação para Discord com nós digitais roxos.",
    href: "#",
    isFeatured: true,
  },
];

export const timelineItems: TimelineItem[] = [
  {
    role: "Senior Full Stack Developer",
    meta: "Tech Solutions Inc • 2022 — Atual",
    description:
      "Liderança técnica de equipes, arquitetura de sistemas escaláveis em nuvem e otimização de processos críticos.",
    align: "left",
  },
  {
    role: "Backend Engineer",
    meta: "Global Code Lab • 2020 — 2022",
    description:
      "Desenvolvimento de APIs RESTful de alta performance utilizando Java e Spring Boot para o setor financeiro.",
    align: "right",
  },
  {
    role: "Engenharia de Software",
    meta: "Universidade Tecnológica • Graduação",
    description:
      "Foco em algoritmos, estrutura de dados e engenharia reversa de softwares complexos.",
    align: "left",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:contato@caio.dev", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com", icon: ArrowUpRight },
  { label: "GitHub", href: "https://github.com", icon: GitBranch },
];

export const footerLinks: ContactLink[] = [
  { label: "GitHub", href: "https://github.com", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com", icon: ArrowUpRight },
  { label: "Twitter", href: "#", icon: ArrowUpRight },
  { label: "Email", href: "mailto:contato@caio.dev", icon: MessageCircle },
];

export const heroImage = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-_GTDlmgBD3RhhyMJY-Gi6EyFIm2tmCJX9yosXsiEpGcNI8XNEweKd9kVOeaJWpKPmOXKPjXlwofeUI84EI1yQtYHAGn-T4cX_loP1Xuum1eefjxNl0Lum0u4LzVbi_stDqWu8k7b8srpVNz6BqbKtRAGFoB0k6Uk7jS-bm4Fsf9lO9XBws6ckgIlqbQjVvF6-_Obg_0cs4UQja5PshP3BJx3-0LsVQ_DmyP-ZCxJxQt-P51mf4wV_ACf6Qh2mf3kFzmaGTSVPUfQ",
  alt: "Caio, desenvolvedor de software profissional.",
};

export const aboutImage = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFxofc8T4aMYRdKUcaHAEfOwez9hg1Wnx4inkalsocdc0E7Zq3i0UX6lIiynDIbbLstA03MjRDo-LOd1RQRcxvJ4--gNExKLSVFtrQIBa_XTdA9WTdfxxvuXyxxVN4vynD0c06-1bWBftd1h5HPvGyfxXxRYg-jmYJDsT7h0CNU84_jaKjhimcSyB_6WvvORngiPiihQNZrDTPWJNovPHCRkox9fVw74gGrdYqiTIarjrKxS8pD_HIkxsgg5AvWAuizgGIKBRYhYh8",
  alt: "Workspace minimalista de desenvolvedor com iluminação roxa.",
};

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
  { label: "Projetos", href: "#projects" },
  { label: "Sobre", href: "#about" },
  { label: "Trajetória", href: "#timeline" },
  { label: "Perfil", href: "#metrics" },
];

export const metrics: Metric[] = [
  { value: "Freela", label: "Projetos sob demanda" },
  { value: "Redes", label: "Atuação técnica atual" },
  { value: "Eng. Comp.", label: "Formação em andamento" },
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
    title: "Victoria's Restaurante",
    description:
      "Landing page premium para restaurante em Contagem, com cardápio, galeria, avaliações e chamada direta para WhatsApp.",
    tags: ["Next.js", "React 19", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Cortes premium de churrasco brasileiro grelhados na brasa.",
    href: "https://restaurante-319t.vercel.app/",
  },
  {
    title: "Dada Quebradeira",
    description:
      "Site desenvolvido como freelancer para apresentar a marca, fortalecer a presença digital e facilitar o contato com o público.",
    tags: ["Freelance", "Site institucional", "Responsivo"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzOdsWfJuACq0nL5qy9vYRGwdKLqC_u1KUoDHso963vTvSKEDQYtOtGXtSA26b2WD6ZyTM8WIPTOe1BuqKqQoDCLiWKi62gFaFWRVDaAOWDVSgeAPzMKP-FuSVzPBnfPazlT297pRxxY2JKDB41ZsPAndj5t86J6LGurBBH7zQw7LXMaV68sUePZ1IigEu1XVqSaiTP23KSK-YkwbzUFtb04XqPi_2iJED_FHA6pXTrvjKZTNBsA8ghcAvvTAvmxVnJ2pQKvScoGTH",
    imageAlt:
      "Interface de site institucional com identidade visual marcante.",
    href: "https://www.dadaquebradeira.com.br/",
  },
  {
    title: "Automação para Discord",
    description:
      "Bot para Discord criado para automatizar tarefas, organizar comunidades e integrar fluxos simples de trabalho.",
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
    role: "Técnico de Redes",
    meta: "Atuação atual",
    description:
      "Trabalho com suporte, infraestrutura e redes, experiência que fortalece minha base prática em sistemas, conectividade e resolução de problemas.",
    align: "left",
  },
  {
    role: "Freelancer em Programação",
    meta: "Projetos sob demanda",
    description:
      "Desenvolvo sites, landing pages e automações para clientes, transformando necessidades reais em soluções simples, responsivas e funcionais.",
    align: "right",
  },
  {
    role: "Engenharia de Computação",
    meta: "Graduação em andamento",
    description:
      "Curso Engenharia de Computação, aprofundando fundamentos de programação, arquitetura de computadores, redes e desenvolvimento de software.",
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
  alt: "Caio, estudante de Engenharia de Computação e freelancer em programação.",
};

export const aboutImage = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFxofc8T4aMYRdKUcaHAEfOwez9hg1Wnx4inkalsocdc0E7Zq3i0UX6lIiynDIbbLstA03MjRDo-LOd1RQRcxvJ4--gNExKLSVFtrQIBa_XTdA9WTdfxxvuXyxxVN4vynD0c06-1bWBftd1h5HPvGyfxXxRYg-jmYJDsT7h0CNU84_jaKjhimcSyB_6WvvORngiPiihQNZrDTPWJNovPHCRkox9fVw74gGrdYqiTIarjrKxS8pD_HIkxsgg5AvWAuizgGIKBRYhYh8",
  alt: "Workspace minimalista de desenvolvedor com iluminação roxa.",
};

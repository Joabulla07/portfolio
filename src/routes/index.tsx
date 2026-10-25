import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download, Github, Mail, Phone } from "lucide-react";
import examImg from "@/assets/exam_generator.jpg";
import leagueImg from "@/assets/league-of-coaching.png";
import mascoteroImg from "@/assets/mascotero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joanna Bulla — Backend Developer Portfolio" },
      { name: "description", content: "Joanna Bulla, backend developer. Selected projects, resume and contact." },
      { property: "og:title", content: "Joanna Bulla — Backend Developer Portfolio" },
      { property: "og:description", content: "Selected projects, resume and contact of backend developer Joanna Bulla." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const gh = (f: string) => `https://github.com/Joabulla07/Proyecto2020-Python/blob/gh-pages/${f}?raw=true`;

type Project = { title: string; img: string; href: string; internal?: boolean; tag: string; wip?: boolean };
const projects: Project[] = [
  { title: "Exam Generator", img: examImg, href: "/exam-generator", internal: true, tag: "Python · PySide6" },
  { title: "League of Coaching", img: leagueImg, href: "https://league-of-coaching.netlify.app", tag: "Web app" },
  { title: "Gestión de Turnos Online", img: gh("gestion.jpg"), href: "https://gestionarreactapptp2.netlify.app/", tag: "Web app" },
  { title: "Web Page Delivery", img: mascoteroImg, href: "https://delivery-mascotero.netlify.app/", tag: "Web app" },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const inner = (
    <>
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
        <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-muted-foreground">0{i + 1} / {p.tag}</p>
          <h3 className="mt-1 text-xl font-medium">
            {p.title}
            {p.wip && <span className="ml-2 whitespace-nowrap rounded-full border border-accent px-2 py-0.5 align-middle font-mono text-[10px] text-accent">en proceso</span>}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:rotate-45 group-hover:text-primary" />
      </div>
    </>
  );
  const cls = "group block rounded-2xl border border-border bg-card p-3 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow";
  return p.internal ? (
    <Link to="/exam-generator" className={cls}>{inner}</Link>
  ) : (
    <a href={p.href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#about" className="font-mono text-sm">joanna<span className="text-primary">.dev</span></a>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </nav>
      </header>

      <section id="about" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-glow" />
        <div className="absolute inset-0 grid-lines" />
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p className="animate-rise font-mono text-sm text-primary">{"<hello world />"}</p>
          <h1 className="animate-rise mt-6 text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl" style={{ animationDelay: "0.1s" }}>
            I am Joanna,<br />
            <span className="text-outline">a backend</span> <span className="text-primary">developer.</span>
          </h1>
          <p className="animate-rise mt-8 max-w-lg text-lg text-muted-foreground" style={{ animationDelay: "0.2s" }}>
            I build reliable APIs, automation tools and the systems that keep things running behind the scenes.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
            <a href="/docs/CVJoannaBulla.pdf" download className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:scale-105">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition hover:border-primary hover:text-primary">
              See my work
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Selected projects</h2>
          <p className="hidden font-mono text-sm text-muted-foreground md:block">({projects.length})</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-glow">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="font-mono text-sm text-primary">contact</p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">Let's work together.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { icon: Github, label: "GitHub", value: "Joabulla07", href: "https://github.com/Joabulla07" },
              { icon: Mail, label: "Email", value: "joannabbado4748@gmail.com", href: "mailto:joannabbado4748@gmail.com" },
              { icon: Phone, label: "Phone", value: "+54 9 362 422 7225", href: "tel:+5493624227225" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/50">
                <Icon className="h-6 w-6 text-primary" />
                <p className="mt-6 font-mono text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 break-all font-medium group-hover:text-primary">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Created by Joanna Bulla
      </footer>
    </div>
  );
}

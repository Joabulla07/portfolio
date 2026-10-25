import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Github } from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/exam-generator")({
  head: () => ({
    meta: [
      { title: "Exam Date Generator App — Joanna Bulla" },
      { name: "description", content: "Desktop app that generates university exam schedules as Excel files, built with Python and PySide6." },
      { property: "og:title", content: "Exam Date Generator App — Joanna Bulla" },
      { property: "og:description", content: "Generates exam schedules per year, respecting shifts, holidays and correlatives." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExamGenerator,
});

function Block({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p className="font-mono text-xs text-primary">{n}</p>
      <h3 className="mt-2 text-xl font-medium">{title}</h3>
      <div className="mt-3 space-y-2 text-muted-foreground [&_li]:ml-4 [&_li]:list-disc">{children}</div>
    </div>
  );
}

function ExamGenerator() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="bg-glow">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-12">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> back
          </Link>
          <p className="mt-16 font-mono text-sm text-primary">Python · PySide6 · Windows</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">Exam Date Generator</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A university in Resistencia, Chaco needed a system to create examination schedules for its students. This app fulfils all of their requirements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/Joabulla07/Exam-Generator-App" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:scale-105">
              <Github className="h-4 w-4" /> Code on GitHub
            </a>
            <a href="/docs/kinesiologia.xlsx" download="sample_file.xlsx" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition hover:border-primary hover:text-primary">
              <Download className="h-4 w-4" /> Sample Excel
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-4xl gap-4 px-6 py-16 md:grid-cols-2">
        <Block n="01" title="Examination periods">
          <p>Two periods: First Call and Second Call. No exams on holidays or weekends.</p>
        </Block>
        <Block n="02" title="Data entry">
          <ul><li>Start and end dates for the First Call.</li><li>Start and end dates for the Second Call.</li></ul>
        </Block>
        <Block n="03" title="Time slots">
          <ul><li>Morning shift: 8:00 AM – 11:00 AM.</li><li>Afternoon shift: 1:00 PM – 5:00 PM.</li></ul>
        </Block>
        <Block n="04" title="File format">
          <p>Generated files are Excel or CSV, one document per year.</p>
        </Block>
        <div className="md:col-span-2">
          <Block n="05" title="Scheduling constraints">
            <ul>
              <li>A day cannot have two exams of the same year (program has 5 years).</li>
              <li>First and second-year exams only take place in the morning.</li>
              <li>Other years take place in the afternoon, except Técnicas Kinésicas 3 and 4.</li>
              <li>Correlative subjects must be at least 5 days apart (e.g. Técnica 1 on 10/12, Técnica 2 on 15/12).</li>
            </ul>
          </Block>
        </div>
      </div>
    </div>
  );
}

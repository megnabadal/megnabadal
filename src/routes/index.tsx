import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Code2,
  Database,
  Wrench,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const projects = [
  {
    title: "F1 Telemetry Dashboard",
    description:
      "Python-based concept dashboard to analyze Formula 1 telemetry data and car performance parameters. Designed program logic, data handling, and a console-based UI for visualizing live race statistics.",
    tags: ["Python", "Data Structures", "VS Code"],
  },
  {
    title: "Sentiment Analyzer",
    description:
      "Dual-engine sentiment analysis web app with a terminal-style UI. Real-time text classification with a clean, developer-inspired interface.",
    tags: ["Flask", "TextBlob", "VADER", "Python"],
  },
  {
    title: "MoodTunes",
    description:
      "Mood-based music recommender that suggests songs based on the user's current emotional state. Currently live.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const skills = [
  { icon: Code2, title: "Languages", items: ["Python", "Java", "JavaScript", "C", "SQL"] },
  { icon: Database, title: "Databases & Backend", items: ["MongoDB", "Node.js", "DBMS"] },
  { icon: Globe, title: "Web", items: ["HTML", "CSS"] },
  { icon: Wrench, title: "Tools", items: ["VS Code", "Git", "Figma", "Canva", "MS Office"] },
];

const certifications = [
  "Python Programming — MyCaptain",
  "Artificial Intelligence — MyCaptain",
];

const workshops = [
  { name: "Web Development Bootcamp", org: "Coursera", note: "Hands-on training in HTML, CSS and responsive design." },
  { name: "IoT Workshop (Forgex)", org: "Amrita Vishwa Vidyapeetham", note: "Practical hardware project building using ESP32." },
  { name: "Cybersecurity Awareness & Interview Prep", org: "bi0s Kochi", note: "Insights on entering cybersecurity roles." },
  { name: "Cybersecurity Resilience & Risk Management in the AI Era", org: "bi0s Kochi", note: "Emerging AI-driven cybersecurity challenges." },
];

const awards = [
  "Overt Orator of the Year — 2023 & 2024",
  "1st Place — Interschool Elocution Competition — 2022",
];

function Portfolio() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
          <p className="font-mono text-sm text-primary mb-6">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Megna Badal.</h1>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-muted-foreground tracking-tight">
            I build for the <span className="text-gradient">future of motion</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A motivated undergraduate pursuing a Bachelor of Computer Applications, with a
            strong interest in <span className="text-foreground">control systems, robotics,
            and automotive technology</span>. Aspiring Systems & Controls Engineer in the
            motorsport and automotive industry.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              View my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-all"
            >
              Contact me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Coimbatore, Tamil Nadu</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      {/* ABOUT / EDUCATION */}
      <Section id="about" number="01" title="About Me">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Megna — an undergraduate student at <span className="text-foreground">Amrita Vishwa Vidyapeetham</span>, fascinated by
              the intersection of code, control systems and motorsport engineering.
            </p>
            <p>
              My north star is becoming a <span className="text-foreground">Systems & Controls Engineer</span> in the motorsport and
              automotive industry. I sharpen my technical, analytical and problem-solving skills through academic
              projects, internships, and hands-on training in everything from F1 telemetry to IoT hardware.
            </p>
            <p>Beyond engineering, I'm an active public speaker and MUN participant.</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-mono text-sm text-primary flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Education</h3>
            <EducationItem
              title="Bachelor of Computer Applications (Hons)"
              place="Amrita Vishwa Vidyapeetham, Cochin"
              years="— 2028 (Pursuing)"
            />
            <EducationItem
              title="Higher Secondary School"
              place="National Model Senior Secondary School, Coimbatore"
              years="2019 – 2024"
            />
            <EducationItem
              title="Secondary School"
              place="National Model Senior Secondary School, Coimbatore"
              years="2019 – 2024"
            />
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" number="02" title="Where I've Worked">
        <div className="rounded-lg border border-border bg-card p-8 shadow-card hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-primary/10 p-3 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                UI/UX Design Intern <span className="text-primary">@ SkillCrafts Technology</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mt-1">July 2025 – August 2025</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <Bullet>Developed UI/UX design concepts, wireframes and prototypes to enhance product usability.</Bullet>
                <Bullet>Led a homepage redesign project — improving visual hierarchy and interface consistency.</Bullet>
                <Bullet>Collaborated with the development team to translate design mockups into functional components.</Bullet>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" number="03" title="Things I've Built">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-lg border border-border bg-card p-6 shadow-card hover:border-primary/60 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Code2 className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" number="04" title="Technical Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="font-mono">› {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTS / WORKSHOPS / AWARDS */}
      <Section id="more" number="05" title="Beyond the Code">
        <div className="grid md:grid-cols-3 gap-6">
          <Panel title="Certifications" icon={Award}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {certifications.map((c) => <li key={c}>• {c}</li>)}
            </ul>
          </Panel>
          <Panel title="Workshops & Training" icon={Wrench}>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {workshops.map((w) => (
                <li key={w.name}>
                  <p className="text-foreground font-medium">{w.name}</p>
                  <p className="text-xs">{w.org} — {w.note}</p>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="Awards & Languages" icon={Award}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {awards.map((a) => <li key={a}>• {a}</li>)}
            </ul>
            <div className="mt-5 pt-5 border-t border-border">
              <p className="font-mono text-xs text-primary mb-2">LANGUAGES</p>
              <p className="text-sm text-muted-foreground">English · Hindi · Malayalam · Tamil</p>
            </div>
            <div className="mt-5">
              <p className="font-mono text-xs text-primary mb-2">SOFT SKILLS</p>
              <p className="text-sm text-muted-foreground">
                Communication · Teamwork · Problem-Solving · Time Management · Adaptability
              </p>
            </div>
          </Panel>
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-mono text-sm text-primary">06. What's Next?</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Let's build something.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Whether you have an opportunity, a question, or just want to chat about motorsport,
            engineering or design — my inbox is open. I'll do my best to get back to you.
          </p>
          <a
            href="mailto:megnabadal15@gmail.com"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            <Mail className="h-4 w-4" /> Say Hello
          </a>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:megnabadal15@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> megnabadal15@gmail.com
            </a>
            <a href="tel:+919791609718" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> +91 9791609718
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        Designed & built by Megna Badal · © 2026
      </footer>
    </div>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="font-mono text-primary text-lg mr-3">{number}.</span>
            {title}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        {children}
      </div>
    </section>
  );
}

function EducationItem({ title, place, years }: { title: string; place: string; years: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-4">
      <p className="font-medium text-foreground text-sm">{title}</p>
      <p className="text-xs text-muted-foreground mt-1">{place}</p>
      <p className="font-mono text-xs text-primary mt-1">{years}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm">
      <span className="text-primary mt-1">▸</span>
      <span>{children}</span>
    </li>
  );
}

function Panel({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

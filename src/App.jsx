import { useState } from 'react';

const skillCategories = [
  {
    label: 'PROGRAMMING (PYTHON)',
    items: ['PYTHON', 'ADVANCED PYTHON (ASYNCIO, TYPING)', 'DATA PIPELINES']
  },
  {
    label: 'BACKEND (FASTAPI)',
    items: ['FASTAPI', 'REST / WEBSOCKETS', 'AUTH & RBAC']
  },
  {
    label: 'DATABASES (MYSQL, MONGODB)',
    items: ['MYSQL', 'MONGODB', 'SCHEMA DESIGN']
  },
  {
    label: 'VECTOR DATABASES (FAISS, PINECONE)',
    items: ['FAISS', 'PINECONE', 'HYBRID SEARCH']
  },
  {
    label: 'MACHINE LEARNING',
    items: ['FEATURE ENGINEERING', 'MODEL EVALUATION', 'MLOPS BASICS']
  },
  {
    label: 'DEEP LEARNING',
    items: ['PYTORCH', 'TENSORFLOW', 'MODEL OPTIMIZATION']
  },
  {
    label: 'NLP',
    items: ['TRANSFORMERS', 'TEXT CLASSIFICATION', 'ENTITY & INTENT MODELS']
  },
  {
    label: 'LLMS',
    items: ['RAG SYSTEMS', 'AGENT ORCHESTRATION', 'PROMPT & EVALS']
  }
];

const projects = [
  {
    title: 'ENTERPRISE RAG CHATBOT',
    description:
      'Secure document QA for policy and knowledge bases with adaptive ranking.',
    tags: ['RAG', 'FASTAPI', 'LLM OPS'],
    metrics: ['92% ANSWER ACCURACY', '650MS P95 LATENCY', '1.3M DOC CHUNKS'],
    impact: 'CUT RESOLUTION TIME BY 41%.',
    flow: [
      'DOCUMENT INGESTION',
      'CHUNKING + EMBEDDINGS',
      'FAISS / PINECONE SEARCH',
      'RERANKING',
      'LLM RESPONSE',
      'AUDIT LOGGING'
    ]
  },
  {
    title: 'DEFECT DETECTION CV SYSTEM',
    description:
      'Real-time defect detection with alerts, QA dashboards, and edge deployment.',
    tags: ['YOLO', 'OPENCV', 'EDGE'],
    metrics: ['97% PRECISION', '35 FPS INFERENCE', '120MS END-TO-END'],
    impact: 'REDUCED REWORK BY EARLY DEFECT FLAGGING.',
    flow: ['CAMERA STREAM', 'PREPROCESSING', 'YOLO INFERENCE', 'DEFECT SCORING', 'ALERTS + DASHBOARD']
  },
  {
    title: 'AGENTIC AUTOMATION SUITE',
    description:
      'Multi-agent system orchestrating tools, workflows, and approvals.',
    tags: ['AGENTS', 'TOOLS', 'WORKFLOWS'],
    metrics: ['40% OPS TIME SAVED', '24/7 COVERAGE', 'AUDITABLE ACTIONS'],
    impact: 'AUTOMATED REPEATABLE TASKS WITH HUMAN-IN-LOOP.',
    flow: ['TASK ROUTING', 'TOOL CALLS', 'POLICY CHECKS', 'HUMAN APPROVAL', 'EXECUTION', 'REPORTING']
  },
  {
    title: 'AI REVENUE ENGINE',
    description:
      'Pricing system combining ML demand prediction with LLM explanations.',
    tags: ['FASTAPI', 'PANDAS', 'ML', 'LLM'],
    metrics: ['12% REVENUE LIFT', 'REAL-TIME DEMAND PREDICTION', 'EXPLAINABLE PRICING'],
    impact: 'IMPROVED PRICE ACCEPTANCE WITH TRACEABLE JUSTIFICATIONS.',
    flow: [
      'USER/API REQUEST',
      'FASTAPI BACKEND',
      'DATA PROCESSING (PANDAS)',
      'ML MODEL (DEMAND PREDICTION)',
      'PRICING ENGINE',
      'LLM LAYER',
      'RESPONSE (PRICE + REASON)'
    ]
  }
];

const stats = [
  'PRODUCTION AI SYSTEMS',
  'P95 LATENCY < 700MS',
  'MEASURABLE IMPACT'
];

const caseStudy = {
  title: 'CASE STUDY — ENTERPRISE RAG CHATBOT',
  problem: 'Support teams lost time searching policies and wikis, causing inconsistent answers.',
  approach:
    'Built secure RAG with hybrid search, reranking, citations, RBAC, and audit logging.',
  results: ['92% ANSWER ACCURACY', 'P95 LATENCY 650MS', '41% FASTER RESOLUTION']
};

const buildingNow = [
  'AGENT WORKFLOWS FOR OPERATIONS',
  'VOICE AI FOR SUPPORT TRIAGE',
  'LLM PIPELINES WITH EVALS'
];

export default function App() {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus('Message sent successfully!');
    setFormValues({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 4000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-deep text-white">
      <div className="starfield" aria-hidden="true">
        <div className="stars layer-1" />
        <div className="stars layer-2" />
        <div className="stars layer-3" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 backdrop-blur-xl bg-black border border-white/10 rounded-2xl mt-4 shadow-[0_0_30px_rgba(92,200,255,0.15)] sm:px-6">
          <div className="font-display text-lg tracking-widest">S.KUMAR</div>
          <div className="hidden gap-8 text-sm uppercase tracking-[0.2em] text-white/70 md:flex">
            <a href="#skills" className="hover:text-neonBlue transition">SKILLS</a>
            <a href="#projects" className="hover:text-neonBlue transition">PROJECTS</a>
            <a href="#experience" className="hover:text-neonBlue transition">EXPERIENCE</a>
            <a href="#contact" className="hover:text-neonBlue transition">CONTACT</a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-neonBlue/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] hover:shadow-glowBlue transition"
          >
            HIRE ME →
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 bg-black px-5 pb-20 pt-36 sm:px-6 md:flex-row md:items-center md:gap-12 md:pb-24 md:pt-40">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-neonOrange/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-neonOrange">
              AVAILABLE FOR FULL-TIME + FREELANCE
            </div>
            <h2 className="text-xl font-semibold uppercase tracking-[0.25em] text-neonOrange">
              SUNIL KUMAR
            </h2>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              AI / ML ENGINEER
            </h1>

            <p className="max-w-xl text-lg text-white/70">
              I build production AI systems—RAG copilots, agent automation, and LLM pipelines—measured for accuracy,
              latency, and business impact.
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">RAG SYSTEMS</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">AGENT WORKFLOWS</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">LLM AUTOMATION</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 shadow-[0_0_24px_rgba(255,122,24,0.08)]"
                >
                  {stat}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="rounded-full bg-neonOrange px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-glowOrange transition hover:-translate-y-1"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neonBlue/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:shadow-glowBlue"
              >
                GET IN TOUCH
              </a>
              <a
                href="/SUNIL_KUMAR_RESUME.pdf"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/90 hover:border-neonOrange/70 hover:text-white transition"
                download
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-neonOrange/40 via-neonPurple/30 to-neonBlue/40 blur-2xl" />
              <div className="absolute -inset-3 rounded-full border border-neonBlue/40 animate-floaty" />
              <img
                src="/sunil-photo.jpeg"
                alt="SUNIL KUMAR"
                className="relative h-64 w-64 rounded-full object-cover object-top border-4 border-neonOrange shadow-[0_0_30px_rgba(255,85,0,0.5)] animate-floaty md:h-72 md:w-72"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                SUNIL KUMAR
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl bg-[#0A0A0A] px-5 pb-20 sm:px-6 md:pb-24">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl uppercase tracking-[0.2em]">SKILLS</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">CORE STACK</span>
          </div>
          <div className="mt-8 space-y-10 sm:mt-10">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                  {category.label}
                </div>
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((skill) => (
                    <div
                      key={skill}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-neonBlue/60 hover:shadow-[0_0_30px_rgba(92,200,255,0.2)]"
                    >
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80 group-hover:text-white">
                        {skill}
                      </div>
                      <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-neonBlue to-neonOrange opacity-60 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl bg-black px-5 pb-20 sm:px-6 md:pb-24">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl uppercase tracking-[0.2em]">RECENT PROJECTS</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">IMPACT BUILT</span>
          </div>
          <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 border-l-2 border-l-transparent bg-white/5 p-6 backdrop-blur-xl transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:border-neonOrange/60 hover:border-l-neonOrange hover:shadow-[0_0_35px_rgba(255,85,0,0.2)] hover:shadow-[-10px_0_30px_rgba(255,85,0,0.35)]"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-neonBlue/20 blur-2xl group-hover:bg-neonOrange/30 transition" />
                <h3 className="font-display text-xl uppercase tracking-[0.2em]">{project.title}</h3>
                <p className="mt-4 text-sm text-white/70">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neonBlue/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neonBlue/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neonOrange/80">
                  IMPACT: {project.impact}
                </div>
                {project.flow && (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                      ARCHITECTURE FLOW
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {project.flow.map((step, index) => (
                        <div key={step} className="flex items-center gap-2">
                          <div className="rounded-full border border-white/10 bg-[#111] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                            {step}
                          </div>
                          {index < project.flow.length - 1 && (
                            <span className="text-neonOrange text-xs leading-none">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="case-study" className="mx-auto max-w-6xl bg-[#0A0A0A] px-5 pb-20 sm:px-6 md:pb-24">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl uppercase tracking-[0.2em]">CASE STUDY</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">ONE DEEP DIVE</span>
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-neonOrange">{caseStudy.title}</div>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">PROBLEM</div>
                <p className="mt-3 text-sm text-white/70">{caseStudy.problem}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">APPROACH</div>
                <p className="mt-3 text-sm text-white/70">{caseStudy.approach}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">RESULTS</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseStudy.results.map((result) => (
                    <div
                      key={result}
                      className="rounded-full border border-neonBlue/30 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80"
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="building" className="mx-auto max-w-6xl bg-black px-5 pb-20 sm:px-6 md:pb-24">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl uppercase tracking-[0.2em]">CURRENTLY BUILDING</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">IN PROGRESS</span>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {buildingNow.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-neonBlue/10 p-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 shadow-[0_0_20px_rgba(92,200,255,0.12)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl bg-[#0A0A0A] px-5 pb-20 sm:px-6 md:pb-24">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl uppercase tracking-[0.2em]">WORK HISTORY</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">CAREER</span>
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold uppercase tracking-[0.2em]">AI/ML ENGINEER</div>
                <div className="text-sm uppercase tracking-[0.25em] text-white/60">ELYRIA SOFTWARE PRIVATE LIMITED, MOHALI</div>
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-neonOrange">2025 – PRESENT</div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>BUILT AND DEPLOYED RAG SYSTEMS WITH EVALS, CITATIONS, AND ACCESS CONTROL.</li>
              <li>OPTIMIZED RETRIEVAL + INFERENCE LATENCY FOR PRODUCTION TRAFFIC.</li>
              <li>DELIVERED AGENTIC AUTOMATION WORKFLOWS WITH AUDITABLE TOOL CALLS.</li>
              <li>INTEGRATED LLM FEATURES INTO EXISTING PRODUCTS WITH RELIABLE MONITORING.</li>
            </ul>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl bg-black px-5 pb-20 sm:px-6 md:pb-24">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl uppercase tracking-[0.2em]">EDUCATION</h2>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">ACADEMICS</span>
          </div>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-lg font-semibold uppercase tracking-[0.2em]">M.TECH COMPUTER SCIENCE &amp; ENGINEERING</div>
            <div className="mt-2 text-sm uppercase tracking-[0.25em] text-white/60">CGPA: 8.25/10</div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl bg-[#0A0A0A] px-5 pb-20 sm:px-6 md:pb-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/5 to-neonBlue/10 p-8 backdrop-blur-xl sm:p-10">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl space-y-3">
                <h2 className="font-display text-2xl uppercase tracking-[0.2em] md:text-3xl">
                  LET’S BUILD REAL-WORLD AI SYSTEMS
                </h2>
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                  AVAILABLE FOR FULL-TIME ROLES AND FREELANCE PROJECTS • FAST START
                </p>
                <p className="text-sm uppercase tracking-[0.25em] text-white/80">
                  SUNIL.BELIPAR@GMAIL.COM
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <a
                  href="https://www.linkedin.com/in/sunil-tech25"
                  className="w-full rounded-full border border-white/20 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:-translate-y-1 hover:border-neonBlue/60 hover:shadow-glowBlue sm:w-40"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://github.com/sunil-tech25"
                  className="w-full rounded-full border border-white/20 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:-translate-y-1 hover:border-neonOrange/60 hover:shadow-glowOrange sm:w-40"
                >
                  GITHUB
                </a>
                <a
                  href="/SUNIL_KUMAR_RESUME.pdf"
                  className="w-full rounded-full bg-white px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,85,0,0.5)] sm:w-40"
                  download
                >
                  RESUME PDF
                </a>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-black/30 p-6 sm:grid-cols-2"
            >
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                  placeholder="Tell me about the role..."
                  required
                />
              </div>
              <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="rounded-full bg-neonOrange px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black shadow-glowOrange transition hover:-translate-y-1"
                >
                  SEND MESSAGE
                </button>
                {formStatus && (
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neonBlue/80">
                    {formStatus}
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs uppercase tracking-[0.3em] text-white/50">
        © 2026 SUNIL KUMAR
      </footer>
    </div>
  );
}

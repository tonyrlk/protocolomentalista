import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Coffee,
  Eye,
  Flame,
  Footprints,
  Gauge,
  Lock,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/observer-hero.jpg";

import mentalistCouch from "@/assets/mentalist-couch.jpg";
import mentalistGaze from "@/assets/mentalist-gaze.jpg";
import mentalistRoom from "@/assets/mentalist-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protocolo Mentalista — Observe Mais. Reaja Menos." },
      {
        name: "description",
        content:
          "Sistema gamificado de observação, autocontrole e leitura comportamental. 100 missões práticas de 10 a 15 minutos por dia. Acesso vitalício.",
      },
      { property: "og:title", content: "Protocolo Mentalista — Observe Mais. Reaja Menos." },
      {
        property: "og:description",
        content:
          "Treine atenção calibrada, micro-tells e dedução em tempo real com missões diárias de 10 minutos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

/* ── primitives ─────────────────────────────────────────────── */

function Reveal({
  children,
  variant = "reveal",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "reveal" | "reveal-left" | "reveal-right" | "reveal-zoom";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${variant} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/8 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
      <span className="relative grid size-1.5 place-items-center">
        <span className="absolute size-1.5 rounded-full bg-primary ping-ring" />
        <span className="size-1.5 rounded-full bg-primary" />
      </span>
      {children}
    </span>
  );
}


function Cta({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#oferta"
      className={`group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 font-mono text-xs tracking-[0.18em] text-primary-foreground uppercase shadow-[0_0_40px_-10px_var(--primary)] glow-pulse transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:brightness-110 ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/60 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <Tag>{eyebrow}</Tag>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight text-balance shimmer-text sm:text-5xl">
            {title}
          </h2>
          {sub ? (
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-pretty">{sub}</p>
          ) : null}
        </Reveal>
        <Reveal variant="reveal-zoom" delay={120}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/* ── page ───────────────────────────────────────────────────── */

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <VslSection />
      <PainSection />
      <MethodSection />
      <SystemSection />
      <StepsSection />
      <ReadPeople />
      <Benefits />
      <Testimonials />
      <Offer />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}

function VslSection() {
  return (
    <section id="vsl" className="relative overflow-hidden border-t border-border/60 px-5 py-20">
      <div className="pointer-events-none absolute inset-0 grid-noir opacity-25" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Tag>Briefing em vídeo // assista antes de decidir</Tag>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            Em poucos minutos você entende{" "}
            <span className="text-primary italic">como o protocolo funciona.</span>
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground text-pretty">
            Dê o play e veja a lógica por trás da observação treinada: linha de base,
            micro-tells e dedução em cadeia — aplicados em situações reais do dia a dia.
          </p>
          <ul className="mt-7 space-y-2.5">
            {[
              "Por que você percebe as coisas tarde demais",
              "Os 4 pilares do arquétipo mentalista",
              "Como as missões diárias de 10 min funcionam",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Check className="size-4 shrink-0 text-signal" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Cta>
              <Play className="size-4" /> Quero o acesso vitalício
            </Cta>
            <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              Ative o som ▶
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[380px]">
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-primary/12 blur-3xl" />
          <div className="lift relative overflow-hidden rounded-sm border border-primary/30 bg-card shadow-[0_40px_140px_-50px_var(--primary)]">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5 font-mono text-[10px] tracking-[0.16em] uppercase">
              <span className="inline-flex items-center gap-2 text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-ember" /> Transmissão // VSL
              </span>
              <span className="text-muted-foreground">Observe</span>
            </div>
            <div className="aspect-9/16 w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/3SI8wMXSlyQ?rel=0&modestbranding=1&playsinline=1"
                title="Protocolo Mentalista — apresentação em vídeo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function useCountdown(minutes: number) {
  const [left, setLeft] = useState(minutes * 60);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return { mm, ss };
}

function TopBar() {
  const { mm, ss } = useCountdown(48);
  return (
    <div className="sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-gradient-to-r from-ember via-primary to-ember px-4 py-2 text-center text-primary-foreground">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase">
          <Flame className="size-3.5" /> Lançamento
        </span>
        <span className="text-sm font-semibold">
          Acesso vitalício + 100 missões · <span className="underline">80% OFF</span>
        </span>
        <span className="rounded-sm bg-primary-foreground px-2 py-0.5 font-mono text-xs tracking-widest text-primary">
          {mm}:{ss}
        </span>

      </div>
      <header className="border-b border-border/60 bg-background shadow-[0_1px_0_0_oklch(0.79_0.135_84/0.12)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-sm border border-primary/40 text-primary">
              <Eye className="size-4" />
            </span>
            <span className="font-display text-lg tracking-wide">
              The Observer{" "}
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                // protocolo
              </span>
            </span>
          </div>
          <nav className="hidden items-center gap-7 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase lg:flex">
            <a href="#metodo" className="relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full">Método Jane</a>
            <a href="#sistema" className="relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full">Sistema</a>
            <a href="#leia-pessoas" className="relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full">Leia Pessoas</a>
            <a href="#oferta" className="relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full">Oferta</a>
          </nav>
          <Cta className="px-4 py-2.5 text-[10px]">Ativar protocolo</Cta>
        </div>
      </header>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-24">
      <div className="pointer-events-none absolute inset-0 grid-noir opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal variant="reveal-left">
          <Tag>O efeito Patrick Jane // O mentalista</Tag>
          <h1 className="mt-7 font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Observe como um{" "}
            <span className="text-primary italic">mentalista.</span>
            <span className="mt-3 block text-2xl text-muted-foreground sm:text-4xl">
              Reaja menos. Entenda tudo.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Você não precisa de dons paranormais. O que existe por trás da leitura de
            pessoas é <strong className="text-foreground">atenção calibrada</strong>,{" "}
            <strong className="text-foreground">leitura de microexpressões</strong> e{" "}
            <strong className="text-foreground">dedução em tempo real</strong>.
          </p>

          <figure className="lift mt-8 flex gap-4 rounded-sm border border-primary/25 bg-card/60 p-5">
            <Coffee className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <blockquote className="font-display text-base italic sm:text-lg">
                “As pessoas revelam seus segredos o tempo todo. O corpo e os olhos delas
                falam antes da boca.”
              </blockquote>
              <figcaption className="mt-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                — Princípio da observação mentalista
              </figcaption>
            </div>
          </figure>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Cta>
              <Play className="size-4" /> Ativar meu protocolo
            </Cta>
            <a
              href="#sistema"
              className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase underline-offset-4 transition hover:text-primary hover:underline"
            >
              Ver como funciona
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
            {["Treino 100% prático", "10 a 15 min/dia", "Acesso vitalício"].map((i) => (
              <li key={i} className="inline-flex items-center gap-2">
                <Check className="size-3.5 text-signal" /> {i}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="reveal-right" delay={150} className="relative">
          <div className="lift float-slow overflow-hidden rounded-sm border border-primary/25 bg-card shadow-[0_30px_120px_-40px_var(--primary)]">
            <div className="relative overflow-hidden">
              <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px scan-line bg-primary/70" />
              <img
                src={mentalistCouch}
                alt="Mentalista de terno observando com um sorriso discreto, xícara de chá na mão"
                width={1024}
                height={1280}
                className="aspect-4/5 w-full object-cover"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-sm bg-background/80 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-primary uppercase backdrop-blur">
                <Eye className="size-3.5" /> Calibração ativa: 100%
              </span>
              <span className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-sm bg-background/80 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-signal uppercase backdrop-blur">
                <span className="size-1.5 rounded-full bg-signal" /> Autocontrole total
              </span>
            </div>
            <div className="border-t border-border/60 p-5">
              <div className="flex items-end justify-between font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                <span>Status do operador</span>
                <span>Progressão</span>
              </div>
              <div className="mt-1.5 flex items-end justify-between">
                <p className="font-display text-lg">
                  <span className="text-primary">LVL 02</span> Mentalista despertando
                </p>
                <p className="font-mono text-xs text-primary">325 / 500 XP</p>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-ember to-primary" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  ["Observação", "Micro-tells"],
                  ["Calma", "Sob pressão"],
                  ["Dedução", "Em cadeia"],
                ].map(([t, s]) => (
                  <div
                    key={t}
                    className="lift rounded-sm border border-border/70 bg-background/50 px-2 py-2.5 text-center"
                  >
                    <p className="font-mono text-[10px] tracking-[0.14em] text-primary uppercase">
                      {t}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PainSection() {
  const items = [
    ["“Eu devia ter percebido.”", "O sinal estava lá o tempo todo, mas passou despercebido."],
    ["“Não entendi o que aconteceu.”", "A conversa mudou de rumo e você não captou o motivo."],
    ["“Só percebi depois.”", "A reação veio tarde demais para mudar o resultado."],
    ["“Por que eu reagi assim?”", "O impulso falou mais alto que a razão."],
  ];
  return (
    <Section
      eyebrow="O padrão do piloto automático"
      title={
        <>
          Você já percebeu <span className="text-primary italic">tarde demais?</span>
        </>
      }
      sub="O problema não é falta de inteligência. É que atenção também pode ser treinada."
    >
      <div className="relative mb-8 overflow-hidden rounded-sm border border-primary/25">
        <img
          src={mentalistRoom}
          alt="Mentalista observando com calma uma sala cheia de pessoas"
          width={1536}
          height={1024}
          loading="lazy"
          className="h-64 w-full object-cover sm:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
        <p className="absolute bottom-5 left-6 max-w-md font-display text-xl italic sm:text-2xl">
          “Todo mundo está na mesma sala. Só um está realmente observando.”
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(([t, d]) => (
          <div
            key={t}
            className="lift rounded-sm border border-border/70 bg-card/50 p-6 transition hover:border-primary/40 hover:bg-card/70"
          >
            <p className="font-display text-xl">{t}</p>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

    </Section>
  );
}

const PILLARS = [
  {
    tag: "Observação primária",
    title: "Calibração da linha de base",
    desc: "Mapeie a cadência neutra de piscar, a postura e a velocidade de resposta. Qualquer desvio depois disso é sinal.",
    quote: "“Descubra o estado de repouso da pessoa. Tudo que sair da linha é informação.”",
    icon: Gauge,
  },
  {
    tag: "Presença mental",
    title: "A postura do chá (autocontrole)",
    desc: "Quando você não tem pressa em falar, o outro preenche o silêncio e entrega pistas sobre o que realmente pensa.",
    quote: "“A calma desestabiliza qualquer blefe melhor do que qualquer pergunta.”",
    icon: Coffee,
  },
  {
    tag: "Leitura facial",
    title: "A isca verbal & microexpressões",
    desc: "Capture o flash facial de meio segundo que aparece antes da máscara social assumir o controle.",
    quote: "“O rosto reage antes de você decidir o que mostrar.”",
    icon: Eye,
  },
  {
    tag: "Raciocínio estratégico",
    title: "Dedução em cadeia",
    desc: "Conecte detalhes isolados — sapatos, cadência, direção dos pés — em uma conclusão cirúrgica.",
    quote: "“Um detalhe é ruído. Três detalhes na mesma direção são conclusão.”",
    icon: Target,
  },
];

function MethodSection() {
  const [active, setActive] = useState(0);
  const P = PILLARS[active]!;
  const Icon = P.icon;
  return (
    <Section
      id="metodo"
      eyebrow="O arquétipo do mentalista"
      title={
        <>
          Como se tornar a pessoa mais{" "}
          <span className="text-primary italic">observadora de qualquer sala.</span>
        </>
      }
      sub="Sem superpoderes: apenas o treino do que 99% das pessoas negligenciam — calibração de detalhes, autocontrole e leitura comportamental."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          {PILLARS.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`flex w-full items-center gap-4 rounded-sm border p-4 text-left transition ${
                i === active
                  ? "border-primary/60 bg-primary/8"
                  : "border-border/70 bg-card/40 hover:border-primary/35"
              }`}
            >
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-sm border ${
                  i === active
                    ? "border-primary/60 bg-primary/15 text-primary"
                    : "border-border text-muted-foreground"
                }`}
              >
                <p.icon className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                  Pilar 0{i + 1} // {p.tag}
                </span>
                <span className="block truncate font-display text-lg">{p.title}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="lift rounded-sm border border-primary/25 bg-card/60 p-8">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
            <Icon className="size-4" /> {P.tag} // análise prática
          </span>
          <h3 className="mt-4 font-display text-3xl">{P.title}</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{P.desc}</p>
          <p className="mt-6 border-l-2 border-primary/60 pl-4 font-display text-lg italic">
            {P.quote}
          </p>

          <div className="mt-8 rounded-sm border border-border/70 bg-background/50 p-5">
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              Simulador de dedução // caso: a reunião
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Um diretor diz: “Adorei a ideia, fechamos semana que vem.” As três pistas
              que contam outra história:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                [Footprints, "Pistas 01 // pés", "Pés apontados para a porta, tronco virado para a mesa."],
                [Sparkles, "Pista 02 // micro-gesto", "Ajuste do colarinho no exato segundo do prazo."],
                [Timer, "Pista 03 // cadência", "Pausa de 0,8s e piscar acelerado antes de confirmar."],
              ].map(([Ic, t, d]) => {
                const I = Ic as typeof Timer;
                return (
                  <li key={t as string} className="flex gap-3">
                    <I className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      <span className="block font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
                        {t as string}
                      </span>
                      <span className="text-sm text-muted-foreground">{d as string}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SystemSection() {
  const [xp, setXp] = useState(325);
  const pct = useMemo(() => Math.min(100, Math.round((xp / 500) * 100)), [xp]);
  return (
    <Section
      id="sistema"
      eyebrow="Arquitetura do produto"
      title={
        <>
          Não é só conteúdo. <span className="text-primary italic">É um sistema.</span>
        </>
      }
      sub="Esqueça cursos longos e passivos. Você recebe uma plataforma interativa para treinar sua mente todos os dias."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="lift rounded-sm border border-primary/25 bg-card/60">
          <div className="flex items-center justify-between border-b border-border/60 px-5 py-3 font-mono text-[10px] tracking-[0.16em] uppercase">
            <span className="text-primary">Terminal // the observer</span>
            <span className="text-muted-foreground">Vitalício</span>
          </div>
          <div className="space-y-5 p-6">
            <div className="rounded-sm border border-border/70 bg-background/50 p-5">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase">
                <span className="text-primary">Missão 01 // linha de base</span>
                <span className="text-signal">+150 XP</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Observe uma pessoa em repouso por 2 minutos. Anote a cadência do piscar e
                a postura padrão.
              </p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {["Frequência respiratória mapeada", "Identificar 1 gesto de apaziguamento"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="size-3.5 text-signal" /> {t}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <div className="flex items-end justify-between font-mono text-[11px] uppercase">
                <span className="text-primary">Nível 02 · despertando</span>
                <span className="text-muted-foreground">
                  {xp} / 500 XP ({pct}%)
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-ember to-primary transition-all duration-700"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <button
                onClick={() => setXp((v) => Math.min(500, v + 50))}
                className="mt-4 w-full rounded-sm border border-primary/40 py-2.5 font-mono text-[10px] tracking-[0.18em] text-primary uppercase transition hover:bg-primary/10"
              >
                [ Simular conclusão de missão (+50 XP) ]
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            [Target, "Missões", "Ações práticas para executar no mundo real."],
            [Zap, "Desafios", "Transforme conhecimento em prática de campo."],
            [Flame, "Hábitos", "Construa consistência com streaks diários."],
            [Gauge, "Progresso", "Acompanhe a evolução em métricas reais."],
            [Sparkles, "XP & patentes", "Sua evolução deixa de ser abstrata."],
            [Eye, "Leia pessoas", "Módulo de comportamento e linguagem não-verbal."],
          ].map(([Ic, t, d]) => {
            const I = Ic as typeof Eye;
            return (
              <div
                key={t as string}
                className="lift rounded-sm border border-border/70 bg-card/40 p-5 transition hover:border-primary/40"
              >
                <I className="size-5 text-primary" />
                <p className="mt-3 font-display text-xl">{t as string}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function StepsSection() {
  const steps = [
    ["Entre", "Acesse seu protocolo e receba o diagnóstico inicial."],
    ["Execute", "Complete missões, desafios e hábitos de 10 a 15 min."],
    ["Evolua", "Ganhe XP, suba de patente e acompanhe sua progressão."],
  ];
  return (
    <Section
      eyebrow="Metodologia direta"
      title={<>Como funciona</>}
      sub="Três movimentos repetidos todos os dias. Sem teoria acumulada sem uso."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map(([t, d], i) => (
          <div key={t} className="lift relative rounded-sm border border-border/70 bg-card/40 p-7">
            <span className="font-display text-5xl text-primary/25">0{i + 1}</span>
            <p className="mt-2 font-display text-2xl">{t}</p>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const PRINCIPLES = [
  ["Linha de base (baseline)", "O padrão normal da pessoa em repouso: piscar, tom de voz e gesticulação habitual."],
  ["Microexpressões involuntárias", "Flashes faciais rápidos que ocorrem antes do controle consciente assumir o rosto."],
  ["Gestos de apaziguamento", "Toques no pescoço, clavícula ou ajustes de roupa em momentos de pressão."],
  ["Vetores de direção", "A orientação de pés e tronco mostra para onde a mente realmente quer ir."],
];

function ReadPeople() {
  const [sel, setSel] = useState(0);
  return (
    <Section
      id="leia-pessoas"
      eyebrow="Área de análise comportamental"
      title={
        <>
          Aprenda a observar o que{" "}
          <span className="text-primary italic">passa despercebido.</span>
        </>
      }
      sub="Princípios objetivos de observação e comportamento — foco em clareza interpessoal, sem fórmulas mágicas ou manipulação."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {PRINCIPLES.map(([t, d], i) => (
            <button
              key={t}
              onClick={() => setSel(i)}
              className={`w-full rounded-sm border p-5 text-left transition ${
                i === sel ? "border-primary/60 bg-primary/8" : "border-border/70 bg-card/40"
              }`}
            >
              <p className="font-display text-lg">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </button>
          ))}
        </div>
        <div className="lift overflow-hidden rounded-sm border border-primary/25 bg-card/60">
          <img
            src={mentalistGaze}
            alt="Retrato em close de um mentalista analisando expressões"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-56 w-full object-cover object-top"
          />
          <div className="p-8">
            <span className="font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
              Módulo // leia pessoas
            </span>
            <h3 className="mt-4 font-display text-3xl">{PRINCIPLES[sel]![0]}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{PRINCIPLES[sel]![1]}</p>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-signal uppercase">
              <Check className="size-4" /> Método de calibração em tempo real
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}

function Benefits() {
  const items = [
    ["Mais atenção aos detalhes", "Capture pistas visuais, mudanças de tom e postura que a maioria ignora."],
    ["Consciência dos próprios gatilhos", "Identifique o impulso antes de reagir no piloto automático."],
    ["Maior consistência", "XP e streaks diários transformam desenvolvimento em hábito."],
    ["Percepção calibrada", "Leia a linha de base em reuniões, negociações e conversas difíceis."],
    ["Mais autocontrole", "Mantenha a calma sob pressão e pense com clareza estratégica."],
    ["Evolução mensurável", "Veja sua transformação em níveis, patentes e insígnias ativas."],
  ];
  return (
    <Section
      eyebrow="Resultados práticos"
      title={<>O que muda na sua rotina?</>}
      sub="Habilidades perceptivas aplicáveis no seu trabalho e nas suas relações."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(([t, d]) => (
          <div key={t} className="lift rounded-sm border border-border/70 bg-card/40 p-6">
            <Check className="size-5 text-signal" />
            <p className="mt-3 font-display text-xl">{t}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    [
      "Nível 04",
      "A diferença entre um curso qualquer e o Protocolo é a prática diária. Abro o celular de manhã, leio a missão de 10 minutos e aplico na primeira reunião.",
      "Carlos H. Valente",
      "Negociador & diretor comercial",
    ],
    [
      "Nível 05",
      "As missões de calibração e detecção de hesitação me deram uma segurança absurda em audiências e conversas difíceis. Direto ao ponto.",
      "Dra. Fernanda L.",
      "Advogada",
    ],
    [
      "Nível 03",
      "O sistema de XP te faz querer cumprir as missões todo dia. Parei de reagir por impulso e passei a observar antes de falar.",
      "Rodrigo Silveira",
      "Líder de equipe",
    ],
  ];
  return (
    <Section
      eyebrow="Experiência de membros"
      title={<>Quem já entrou no protocolo</>}
      sub="Relatos de quem aplica as missões no cotidiano."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(([lvl, txt, name, role]) => (
          <figure key={name} className="lift rounded-sm border border-border/70 bg-card/40 p-6">
            <span className="font-mono text-[10px] tracking-[0.18em] text-primary uppercase">
              {lvl}
            </span>
            <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
              “{txt}”
            </blockquote>
            <figcaption className="mt-5 border-t border-border/60 pt-4">
              <span className="block font-display text-lg">{name}</span>
              <span className="text-xs text-muted-foreground">{role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function Offer() {
  const includes = [
    "Acesso completo ao sistema The Observer",
    "Terminal diário de missões práticas",
    "Desafios de campo e aplicação real",
    "Rastreador de hábitos e consistência",
    "Sistema de progressão, patentes e XP",
    "Módulo Leia Pessoas (linguagem não-verbal)",
    "Acesso vitalício, sem mensalidades",
  ];
  return (
    <Section
      id="oferta"
      eyebrow="Condição especial de acesso"
      title={
        <>
          Entre no <span className="text-primary italic">protocolo.</span>
        </>
      }
      sub="Ative seu terminal e comece sua evolução diária hoje mesmo."
    >
      <div className="lift mx-auto max-w-3xl overflow-hidden rounded-sm border border-primary/40 bg-card/70 shadow-[0_40px_120px_-50px_var(--primary)]">
        <div className="flex items-center justify-between border-b border-border/60 bg-primary/8 px-6 py-3 font-mono text-[10px] tracking-[0.16em] uppercase">
          <span className="text-primary">Sistema completo // acesso vitalício</span>
          <span className="text-signal">Liberação imediata</span>
        </div>
        <div className="p-8">
          <h3 className="font-display text-3xl">The Observer — Protocolo Mentalista</h3>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {includes.map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-signal" /> {i}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-sm border border-primary/30 bg-background/60 p-6 text-center">
            <p className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-ember uppercase">
              <Flame className="size-3.5" /> Oferta com 80% OFF encerra hoje
            </p>
            <p className="mt-3 text-sm text-muted-foreground line-through">
              Valor regular: R$ 97,00
            </p>
            <p className="mt-1 font-display text-5xl text-primary">R$ 19,90</p>
            <p className="mt-1 text-xs text-muted-foreground">
              pagamento único à vista no PIX ou cartão
            </p>
            <Cta className="mt-6 w-full">Ativar meu protocolo</Cta>
            <p className="mt-4 inline-flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="size-3.5" /> Pagamento seguro
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" /> Garantia de 7 dias
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="lift mx-auto mt-8 flex max-w-3xl items-start gap-5 rounded-sm border border-border/70 bg-card/40 p-6">
        <div className="grid size-16 shrink-0 place-items-center rounded-full border border-primary/50 text-center font-mono text-[10px] leading-tight text-primary">
          7 DIAS
        </div>
        <div>
          <p className="font-display text-xl">Garantia total de 7 dias</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Entre, explore o sistema e execute as primeiras missões. Se sentir que o
            método não é para você, peça o reembolso por e-mail e receba 100% do valor
            de volta. Sem burocracia.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Faq() {
  const faqs = [
    [
      "O que é o Protocolo Mentalista?",
      "Um sistema gamificado de desenvolvimento pessoal focado em observação, atenção, autocontrole e leitura comportamental. Em vez de aulas teóricas longas, você executa missões práticas diárias de 10 a 15 minutos.",
    ],
    [
      "É um curso?",
      "Não no formato tradicional. É uma plataforma de execução: missões, desafios, hábitos e progressão por XP, com conteúdo de apoio direto ao ponto.",
    ],
    [
      "Como recebo o acesso?",
      "Imediatamente após a confirmação do pagamento você recebe o acesso ao painel por e-mail.",
    ],
    ["Posso usar pelo celular?", "Sim. O terminal é totalmente responsivo e feito para uso diário no celular."],
    [
      "O que está incluído?",
      "Dashboard operacional, 100 missões práticas, desafios, rastreador de hábitos, progressão com XP e patentes e o módulo Leia Pessoas.",
    ],
    ["Existe garantia?", "Sim, 7 dias de garantia incondicional com reembolso integral."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      eyebrow="Dúvidas frequentes"
      title={<>Perguntas frequentes</>}
      sub="Respostas diretas sobre o funcionamento do Protocolo."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="lift rounded-sm border border-border/70 bg-card/40">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-display text-lg">{q}</span>
              <ChevronDown
                className={`size-4 shrink-0 text-primary transition ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i ? (
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 px-5 py-24 text-center">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="pointer-events-none absolute inset-0 grid-noir opacity-30" />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-display text-3xl leading-tight text-balance sm:text-5xl">
          Você pode continuar apenas olhando.{" "}
          <span className="text-primary italic">Ou pode começar a observar.</span>
        </h2>
        <Cta className="mt-9">Ativar meu protocolo</Cta>
        <p className="mt-5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
          R$ 19,90 à vista · acesso vitalício
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-5 py-12">
      <div className="mx-auto max-w-6xl space-y-4 text-center">
        <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
          The Observer // Protocolo Mentalista
        </p>
        <p className="text-xs text-muted-foreground">
          © 2026 The Observer. Todos os direitos reservados.
        </p>
        <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Aviso: o Protocolo Mentalista é um sistema de desenvolvimento cognitivo e
          observação comportamental. Os resultados dependem da execução prática das
          missões e hábitos no cotidiano.
        </p>
      </div>
    </footer>
  );
}

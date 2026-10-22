import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  MessageSquare,
  ClipboardCheck,
  Presentation,
  GraduationCap,
  Home,
  Languages,
  Star,
  BadgeCheck,
  Clock,
  Users,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const logo = "/favicon.png";

import heroStudent from "@/assets/hero-student.jpg";
import programExam from "@/assets/program-exam.jpg";
import programBusiness from "@/assets/program-business.jpg";
import programTeens from "@/assets/program-teens.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academy English Course — Kursus Privat Bahasa Inggris" },
      {
        name: "description",
        content:
          "Kursus privat bahasa Inggris dengan metode satu murid satu guru. Program intensif 1 bulan, 12x pertemuan — Speaking & Grammar, English for Careers, School, General, dan Spesific Purposes.",
      },
      {
        property: "og:title",
        content: "Academy English Course — Kursus Privat Bahasa Inggris",
      },
      {
        property: "og:description",
        content:
          "Satu murid satu guru. Program intensif 1 bulan, 12x pertemuan. Better English, Brighter Future.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Academy English Course — Kursus Privat Bahasa Inggris" },
      {
        name: "twitter:description",
        content: "Satu murid satu guru. Program intensif 1 bulan, 12x pertemuan. Better English, Brighter Future.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

/* ---------- util: reveal saat discroll ---------- */

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

/* ---------- data ---------- */

const featuredPrograms = [
  {
    no: "01",
    title: "Kursus Private Speaking & Grammar",
    tag: "1 Bulan",
    price: "Rp550.000",
    desc: "Program intensif untuk meningkatkan speaking, grammar, dan kepercayaan diri berbahasa Inggris. Untuk level menengah–mahir.",
    img: programExam,
    alt: "Materi grammar dan speaking dengan buku serta catatan belajar",
    materi: ["Pronunciation", "Advanced Grammar", "Speaking Intensive", "English Performance"],
    cocok: ["Mahasiswa", "Profesional", "Pelamar Beasiswa", "Remaja & Umum"],
    facts: ["12x pertemuan", "Tatap muka", "Bersertifikat", "1 guru · 1 murid"],
  },
  {
    no: "02",
    title: "English for Careers — Zero to Speak",
    tag: "Program 1 Bulan",
    price: "Rp550.000",
    desc: "Program bahasa Inggris untuk pemula yang ingin siap kerja. Sekarang terbuka untuk pendaftaran.",
    img: programBusiness,
    alt: "Simulasi wawancara kerja dan latihan presentasi",
    materi: ["70% praktek speaking (bukan teori)", "Simulasi interview kerja nyata", "Modul pembelajaran", "English Club"],
    cocok: ["Fresh Graduate", "Pencari Kerja", "Pemula"],
    facts: ["12x pertemuan", "Dibimbing sampai bisa", "Interview masuk text modul"],
  },
];

const otherPrograms = [
  {
    icon: GraduationCap,
    title: "English for School",
    tag: "TK · SD · SMP · SMA",
    desc: "Kelas privat dan online sesuai jenjang sekolah — dari fondasi TK sampai persiapan pelajaran SMP dan SMA.",
    items: ["Program TK", "Program SD", "Program SMP", "Program SMA"],
  },
  {
    icon: Languages,
    title: "English for General",
    tag: "TOEFL · IELTS · TOEIC",
    desc: "Persiapan ujian dan kemampuan bahasa umum, dari pemula sampai advanced, kelas online maupun offline.",
    items: ["TOEFL", "AcEPT", "TOEIC", "Grammar", "Speaking", "IELTS"],
  },
  {
    icon: Star,
    title: "English for Spesific Purposes",
    tag: "Sesuai Tujuan Anda",
    desc: "Program yang dirancang khusus untuk tujuan karier dan studi Anda.",
    items: ["Paket Siap Kerja", "English for Cruise Ship", "English for TOEFL ITP"],
  },
  {
    icon: Home,
    title: "Kelas Privat di Rumah",
    tag: "Mulai Rp550.000 / bulan",
    desc: "Guru datang ke rumah. Tingkat SD/MI, SMP/MTs, SMA/MA, mahasiswa — grup atau perorangan.",
    items: ["Guru datang ke rumah", "Grup atau perorangan", "Pertemuan 12x selama 1 bulan"],
  },
];

const metodePoints = [
  "Program intensif selama 1 bulan (full time)",
  "Jadwal belajar terstruktur: pagi, siang, sore & malam",
  "Fokus utama: Vocabulary, Grammar, dan Speaking",
  "Metode interaktif & praktik langsung setiap hari",
  "Instruktur berpengalaman dengan metode pengajaran terbaik",
  "Evaluasi mingguan untuk memantau progres",
];

const alurBelajar = [
  { icon: BookOpen, title: "Belajar Materi", desc: "Dibangun dari dasar yang kuat." },
  { icon: MessageSquare, title: "Praktik Harian", desc: "Diskusi, debat, dan latihan aktif." },
  { icon: ClipboardCheck, title: "Evaluasi", desc: "Progres dipantau tiap minggu." },
  { icon: Presentation, title: "Presentasi", desc: "Bicara percaya diri di depan orang." },
];

const tips = [
  "Jangan takut melakukan kesalahan",
  "Pakai alat bantu visual",
  "Belajar dari lagu berlirik bahasa Inggris",
  "Menonton film berbahasa Inggris",
  "Membaca buku berbahasa Inggris",
  "Dengarkan podcast bahasa Inggris",
  "Sering berlatih berbicara dalam bahasa Inggris",
  "Berpikir dalam bahasa Inggris",
  "Gunakan kalimat sederhana terlebih dahulu",
  "Mintalah feedback",
  "Buatlah jadwal latihan yang konsisten",
  "Perkaya kosakata",
];

const testimoni = [
  {
    quote:
      "Enam bulan di sini, skor IELTS saya naik dari 5.5 ke 7.0. Strategi ujiannya diajarkan detail sampai ke manajemen waktu.",
    name: "Rania Putri",
    role: "Alumni IELTS, beasiswa S2",
    initial: "RP",
  },
  {
    quote:
      "Dulu saya selalu diam di meeting berbahasa Inggris. Sekarang saya yang memimpin presentasi klien dari Singapura.",
    name: "Bagas Aditya",
    role: "Alumni English for Careers",
    initial: "BA",
  },
  {
    quote:
      "Anak saya dulu takut PR bahasa Inggris. Sekarang malah ngejar jadwal kelasnya. Pengajarnya sabar dan kreatif banget.",
    name: "Ibu Sari",
    role: "Orang tua siswa English for School",
    initial: "S",
  },
];

const faqs = [
  {
    q: "Apakah ada kelas online?",
    a: "Ada. Kelas tersedia secara online maupun tatap muka, untuk program private maupun kelompok — dengan instruktur dan materi yang sama.",
  },
  {
    q: "Bagaimana jadwal belajarnya?",
    a: "Belajar berlangsung Senin sampai Sabtu, pagi, siang, sore & malam. Anda bebas memilih jam belajar yang pas dengan aktivitas Anda.",
  },
  {
    q: "Program untuk level apa saja?",
    a: "Pemula sampai advanced. Di sesi pertama kami petakan level Anda supaya materinya pas — tidak terlalu mudah, tidak menakutkan.",
  },
  {
    q: "Apakah mendapat modul belajar?",
    a: "Ya, modul pembelajaran gratis disediakan untuk setiap program, termasuk interview masuk text modul untuk program siap kerja.",
  },
  {
    q: "Apakah program bersertifikat?",
    a: "Ya. Kursus Private Speaking & Grammar mengeluarkan sertifikat setelah program 1 bulan selesai.",
  },
  {
    q: "Kenapa harus kursus privat (satu murid satu guru)?",
    a: "Karena seluruh waktu pertemuan difokuskan pada Anda: praktik lebih banyak, koreksi langsung, dan kemajuan yang terasa lebih cepat.",
  },
];

const marqueeItems = [
  "Satu Murid · Satu Guru",
  "12x Pertemuan / 1 Bulan",
  "Online & Tatap Muka",
  "Pemula – Advanced",
  "Free Modul",
  "Bersertifikat",
  "Jadwal Fleksibel",
];

/* ---------- halaman ---------- */

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Programs />
        <Metode />
        <AlurBelajar />
        <Instruktur />
        <Tips />
        <Testimoni />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- header ---------- */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Logo Academy English Course" className="size-10" />
          <span className="font-display text-lg font-bold uppercase tracking-tight">
            Academy<span className="text-accent">·</span>English
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#program" className="transition-colors hover:text-accent-foreground">Program</a>
          <a href="#metode" className="transition-colors hover:text-accent-foreground">Metode</a>
          <a href="#tips" className="transition-colors hover:text-accent-foreground">Cara Belajar</a>
          <a href="#faq" className="transition-colors hover:text-accent-foreground">FAQ</a>
        </nav>
        <Link
          to="/pendaftaran"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-95"
        >
          Daftar Sekarang
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <span className="inline-block size-2 rounded-full bg-accent" />
              Kursus Privat Bahasa Inggris
            </p>
          </Reveal>
          <Reveal className="delay-100">
            <h1 className="display-hero text-[clamp(2.8rem,8vw,6.2rem)]">
              Better English,
              <br />
              <span className="text-accent">Brighter Future.</span>
            </h1>
          </Reveal>
          <Reveal className="delay-200">
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Metode <strong className="text-foreground">satu murid satu guru</strong> —
              program intensif 1 bulan, 12x pertemuan, untuk pemula sampai
              advanced. Praktik setiap hari, bukan hafalan.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/pendaftaran"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-95"
              >
                Daftar Sekarang
                <ArrowUpRight className="size-5" />
              </Link>
              <a
                href="#program"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-accent"
              >
                Lihat Program
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="delay-300">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={heroStudent}
                alt="Siswa Academy English Course berbicara percaya diri"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl">
              <p className="font-display text-2xl font-bold text-primary">1 Guru · 1 Murid</p>
              <p className="text-xs text-muted-foreground">metode kursus privat</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- marquee ---------- */

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-border bg-accent py-4 text-accent-foreground">
      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em]">
              {item}
            </span>
            <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- statistik ---------- */

function Stats() {
  const stats = [
    { value: "12x", label: "pertemuan selama 1 bulan program intensif" },
    { value: "1:1", label: "satu guru fokus penuh pada satu murid" },
    { value: "550rb", label: "biaya program 1 bulan (privat mulai 550rb)" },
    { value: "5", label: "skill dilatih: grammar, speaking, writing, listening, reading" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-8 md:p-10">
            <p className="font-display text-4xl font-bold text-primary md:text-5xl">
              {s.value}
            </p>
            <p className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- program ---------- */

function Programs() {
  return (
    <section id="program" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Program
        </p>
        <h2 className="display-hero mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">
          Semua program <span className="text-outline">dibuka.</span>
        </h2>
        <p className="mt-5 max-w-lg text-muted-foreground">
          Kelas privat dan online untuk semua jenjang — dari TK sampai persiapan
          karier dan ujian internasional.
        </p>
      </Reveal>

      {/* Program unggulan */}
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {featuredPrograms.map((p, i) => (
          <Reveal key={p.no} className={cn(i === 1 && "delay-100")}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-accent/60">
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
                  {p.price} · {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <span className="font-display text-sm text-muted-foreground">{p.no}</span>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Materi Utama
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {p.materi.map((m) => (
                      <li key={m} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={3} />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.facts.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Cocok untuk:</span>{" "}
                  {p.cocok.join(" · ")}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Program lainnya */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {otherPrograms.map((p, i) => (
          <Reveal key={p.title} className={cn(i % 2 === 1 && "delay-100")}>
            <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-colors hover:border-accent/60">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <p.icon className="size-6" />
                </span>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight transition-colors group-hover:text-accent-foreground md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- metode ---------- */

function Metode() {
  return (
    <section id="metode" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Metode
        </p>
        <h2 className="display-hero mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">
          Satu murid, <span className="text-accent">satu guru.</span>
        </h2>
        <p className="mt-5 max-w-lg text-muted-foreground">
          Kenapa memilih kursus privat? Karena seluruh perhatian pengajaran ada
          pada Anda, setiap pertemuan.
        </p>
      </Reveal>
      <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground">
        <div className="grid gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <ul className="space-y-4">
              {metodePoints.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-accent p-8 text-accent-foreground">
            <Clock className="size-8" />
            <p className="mt-4 font-display text-3xl font-bold uppercase leading-tight">
              1 Bulan
              <br />
              550.000
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em]">
              12x Pertemuan
            </p>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              Belajar Senin sampai Sabtu — pagi, siang, sore & malam. Bebas
              pilih jam belajar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- alur belajar ---------- */

function AlurBelajar() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
      <Reveal>
        <h2 className="display-hero text-[clamp(1.8rem,4vw,2.8rem)]">
          Alur belajar <span className="text-outline">Anda.</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {alurBelajar.map((a, i) => (
          <Reveal key={a.title} className={cn(i > 0 && "delay-100")}>
            <div className="h-full rounded-3xl border border-border bg-card p-7">
              <div className="flex items-center gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <a.icon className="size-6" />
                </span>
                <span className="font-display text-2xl font-bold text-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- instruktur ---------- */

function Instruktur() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border bg-card p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Instruktur
          </p>
          <h2 className="display-hero mt-4 text-[clamp(1.8rem,4vw,2.8rem)]">
            Guru yang <span className="text-accent">berkualitas.</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Semua program dibimbing tentor berpengalaman dengan standar yang
            ketat dan metode belajar yang menyenangkan.
          </p>
        </Reveal>
        <Reveal className="delay-100">
          <ul className="space-y-4">
            {[
              "Tentor mahasiswa Sastra Inggris dari perguruan tinggi terakreditasi A (BAN-PT)",
              "IPK minimal 3,6 ke atas",
              "Skor TOEFL ITP 500–570++",
              "Grammar, Speaking, Writing, Listening, dan Reading Skill",
              "Arranging weekly test & extending monthly report",
              "Conferring friendly tentors & presenting fun learning methods",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl bg-secondary px-5 py-4">
                <Users className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- cara belajar / tips ---------- */

function Tips() {
  return (
    <section id="tips" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Cara Belajar
        </p>
        <h2 className="display-hero mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">
          Bahasa Inggris <span className="text-outline">bagi pemula.</span>
        </h2>
        <p className="mt-5 max-w-lg text-muted-foreground">
          Kebiasaan kecil setiap hari yang kami biasakan bersama murid — di
          dalam dan di luar kelas.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-x-10 gap-y-4 md:grid-cols-2">
        {tips.map((t, i) => (
          <Reveal key={t} className={cn(i % 2 === 1 && "delay-100")}>
            <div className="flex items-center gap-4 border-b border-border py-4">
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-4" strokeWidth={3} />
              </span>
              <p className="leading-relaxed">{t}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- testimoni ---------- */

function Testimoni() {
  return (
    <section id="testimoni" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Testimoni
        </p>
        <h2 className="display-hero mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">
          Hasil yang <span className="text-accent">terasa.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimoni.map((t, i) => (
          <Reveal key={t.name} className={cn(i > 0 && "delay-100")}>
            <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
              <blockquote className="flex-1 leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                  {t.initial}
                </span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-tight">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- faq ---------- */

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-16 md:py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          FAQ
        </p>
        <h2 className="display-hero mt-4 text-[clamp(2.2rem,5vw,3.8rem)]">
          Pertanyaan <span className="text-outline">umum.</span>
        </h2>
      </Reveal>
      <div className="mt-12 divide-y divide-border border-y border-border">
        {faqs.map((f, i) => (
          <Reveal key={f.q}>
            <details className="group py-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-lg font-bold tracking-tight md:text-xl">
                  {f.q}
                </span>
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-open:rotate-45">
                  <span className="text-lg leading-none">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- cta ---------- */

function CtaSection() {
  return (
    <section id="daftar" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16 md:pb-24">
      <Reveal>
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.25em] opacity-80">
            Pendaftaran Dibuka
          </p>
          <h2 className="display-hero mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,6vw,4.2rem)]">
            Siap mahir <span className="text-accent">dalam 1 bulan?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed opacity-90">
            Semua program kelas privat dan online kini terbuka — pemula sampai
            advanced, jadwal fleksibel, materi praktis & aplikatif, free modul.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pendaftaran"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Daftar Sekarang
              <ArrowUpRight className="size-5" />
            </Link>
            <a
              href="#program"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground transition-colors hover:border-accent"
            >
              Pilih Program
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Info pendaftaran & jadwal konsultasi: hubungi admin Academy English
            Course · www.academyenglishcourse.com
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- footer ---------- */

const footerNav = [
  {
    heading: "Jelajah",
    links: [
      { label: "Program", href: "/#program" },
      { label: "Metode", href: "/#metode" },
      { label: "Cara Belajar", href: "/#tips" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Program",
    links: [
      { label: "Private Speaking & Grammar", href: "/#program" },
      { label: "English for Careers", href: "/#program" },
      { label: "English for School", href: "/#program" },
      { label: "English for General", href: "/#program" },
    ],
  },
  {
    heading: "Info",
    links: [
      { label: "Kelas Privat di Rumah", href: "/#program" },
      { label: "Instruktur", href: "/#metode" },
      { label: "Testimoni", href: "/#testimoni" },
      { label: "Daftar", href: "/pendaftaran" },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo Academy English Course" className="size-12" />
              <p className="font-display text-2xl font-bold uppercase tracking-tight">
                Academy<span className="text-accent">·</span>English
              </p>
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Kursus privat bahasa Inggris — satu murid satu guru, praktik
              setiap hari, hasil yang terasa.
            </p>
            <p className="mt-4 text-sm font-semibold text-primary">
              www.academyenglishcourse.com
            </p>
          </div>
          {footerNav.map((col) => (
            <div key={col.heading}>
              <p className="font-display text-sm font-bold uppercase tracking-[0.15em]">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition-colors hover:text-accent-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© 2026 Academy English Course. Semua hak dilindungi.</p>
          <p className="flex gap-5">
            <span>Syarat Penggunaan</span>
            <span>Privasi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

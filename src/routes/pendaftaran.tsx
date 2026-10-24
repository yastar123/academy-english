import { useState } from "react";
const logo = "/favicon.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import qrisImage from "@/assets/qris.jpg";

export const Route = createFileRoute("/pendaftaran")({
  head: () => ({
    meta: [
      { title: "Pendaftaran — Academy English Course" },
      {
        name: "description",
        content:
          "Formulir pendaftaran Academy English Course. Isi data, pilih kategori, jam belajar, jadwal, dan guru pembimbing — kirim langsung lewat WhatsApp.",
      },
      { property: "og:title", content: "Pendaftaran — Academy English Course" },
      {
        property: "og:description",
        content:
          "Isi formulir pendaftaran kursus privat bahasa Inggris dan kirim langsung ke admin kami.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pendaftaran" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pendaftaran — Academy English Course" },
      {
        name: "twitter:description",
        content: "Isi formulir pendaftaran kursus privat bahasa Inggris dan kirim langsung ke admin kami.",
      },
    ],
    links: [{ rel: "canonical", href: "/pendaftaran" }],
  }),
  component: PendaftaranPage,
});

/* ---------- data pilihan ---------- */

const kategoriOptions = ["TK", "SD", "SMP", "SMA/SMK", "Perguruan tinggi", "Umum/Group"];

const waktuGroups: { label: string; slots: string[] }[] = [
  { label: "Pagi", slots: ["08.00–09.00", "09.00–10.00", "10.00–11.00"] },
  { label: "Siang", slots: ["13.00–14.00", "14.00–15.00"] },
  { label: "Sore", slots: ["16.00–17.00", "17.00–18.00"] },
  { label: "Malam", slots: ["19.00–20.00", "20.00–21.00", "21.00–22.00"] },
];

const hariOptions = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

const teacherOptions = [
  "Mr. Antonius Martin S.Pd",
  "Mr. Safruddin S.Pd",
  "Mr. Abdul Qadir S.Pd",
  "Mr. Darmansyah S.Hum",
  "Mr. Yacob Ismail S.Pd",
  "Mr. Singgih Waluyo S.Pd.I",
  "Mrs. Leny Handayani M.Pd",
  "Mrs. Anggita S.Pd",
  "Mrs. Juliana S.Pd",
  "Mrs. Sri Ningsih",
  "Mrs. Tuti Susanti",
];

const pembayaranOptions = ["Transfer Bank", "QRIS"] as const;

/* ---------- tujuan pengiriman ---------- */

const ADMIN_WA = "6285926551780"; // 085926551780
const ADMIN_EMAIL = "Academyenglishcourse@gmail.com";

/* ---------- validasi ---------- */

export const formSchema = z.object({
  nama: z.string().trim().min(1, "Nama lengkap wajib diisi").max(100, "Nama maksimal 100 karakter"),
  tempatLahir: z
    .string()
    .trim()
    .min(1, "Tempat lahir wajib diisi")
    .max(100, "Tempat lahir maksimal 100 karakter"),
  tanggalLahir: z.string().min(1, "Tanggal lahir wajib diisi"),
  alamat: z.string().trim().min(1, "Alamat lengkap wajib diisi").max(500, "Alamat maksimal 500 karakter"),
  pekerjaan: z
    .string()
    .trim()
    .min(1, "Pekerjaan wajib diisi")
    .max(100, "Pekerjaan maksimal 100 karakter"),
  whatsapp: z
    .string()
    .trim()
    .regex(/^[0-9]{9,15}$/, "Nomor WhatsApp harus 9–15 digit angka"),
  kelurahan: z.string().trim().min(1, "Kelurahan wajib diisi").max(100, "Kelurahan maksimal 100 karakter"),
  kecamatan: z.string().trim().min(1, "Kecamatan wajib diisi").max(100, "Kecamatan maksimal 100 karakter"),
  kota: z.string().trim().min(1, "Kota wajib diisi").max(100, "Kota maksimal 100 karakter"),
  kategori: z.array(z.string()).min(1, "Pilih minimal satu kategori privat"),
  jamBelajar: z.array(z.string()).min(1, "Pilih minimal satu waktu jam belajar"),
  jadwal: z.array(z.string()).min(4, "Pilih minimal 4 hari (Senin sampai Sabtu)"),
  teacher: z.string().min(1, "Pilih guru pembimbing Anda"),
  pembayaran: z.enum(pembayaranOptions, { message: "Pilih metode pembayaran" }),
});

type FormData = z.infer<typeof formSchema>;

/* ---------- halaman ---------- */

function PendaftaranPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-5 pt-28 pb-20 md:pt-36">
        <Intro />
        <RegistrationForm />
      </main>
      <FooterNote />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="font-display text-lg font-bold uppercase tracking-tight"
        >
          <img src={logo} alt="Logo Academy English Course" className="size-10" />
          <span className="font-display text-lg font-bold uppercase tracking-tight">
            Academy<span className="text-accent">·</span>English
          </span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-accent"
        >
          <ArrowLeft className="size-4" />
          Beranda
        </Link>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <div className="mb-10">
      <p className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        <span className="inline-block size-2 rounded-full bg-accent" />
        Formulir Pendaftaran
      </p>
      <h1 className="display-hero text-[clamp(2.2rem,6vw,3.6rem)]">
        Daftar <span className="text-accent">sekarang.</span>
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
        Isi data di bawah, ceng pilihan yang sesuai, lalu kirim — data pendaftaran
        Anda langsung masuk ke WhatsApp admin kami.
      </p>
    </div>
  );
}

/* ---------- form ---------- */

function RegistrationForm() {
  const [nama, setNama] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kota, setKota] = useState("");
  const [kategori, setKategori] = useState<string[]>([]);
  const [jamBelajar, setJamBelajar] = useState<string[]>([]);
  const [jadwal, setJadwal] = useState<string[]>([]);
  const [teacher, setTeacher] = useState("");
  const [pembayaran, setPembayaran] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const buildWaMessage = () => {
    const lines = [
      "*PENDAFTARAN — ACADEMY ENGLISH COURSE*",
      "",
      `Nama lengkap: ${nama}`,
      `Tempat/Tgl lahir: ${tempatLahir}, ${tanggalLahir}`,
      `Alamat lengkap: ${alamat}`,
      `Pekerjaan: ${pekerjaan}`,
      `Nomor WhatsApp: ${whatsapp}`,
      `Kelurahan: ${kelurahan}`,
      `Kecamatan: ${kecamatan}`,
      `Kota: ${kota}`,
      `Kategori privat: ${kategori.join(", ")}`,
      `Waktu jam belajar: ${jamBelajar.join(", ")}`,
      `Jadwal belajar: ${jadwal.join(", ")}`,
      `Teacher pembimbing: ${teacher}`,
      `Metode pembayaran: ${pembayaran}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = formSchema.safeParse({
      nama,
      tempatLahir,
      tanggalLahir,
      alamat,
      pekerjaan,
      whatsapp,
      kelurahan,
      kecamatan,
      kota,
      kategori,
      jamBelajar,
      jadwal,
      teacher,
      pembayaran,
    });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setSubmitted(false);
      const firstError = document.querySelector<HTMLElement>("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setErrors({});
    const url = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(buildWaMessage())}`;
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return <SuccessCard waUrl={waUrl} onEdit={() => setSubmitted(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Data diri */}
      <Card title="Data Diri">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Nama lengkap" error={errors["nama"]} className="md:col-span-2">
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama lengkap sesuai identitas"
              maxLength={100}
              className={inputClass(!!errors["nama"])}
            />
          </Field>
          <Field label="Tempat lahir" error={errors["tempatLahir"]}>
            <input
              type="text"
              value={tempatLahir}
              onChange={(e) => setTempatLahir(e.target.value)}
              placeholder="Contoh: Kendari"
              maxLength={100}
              className={inputClass(!!errors["tempatLahir"])}
            />
          </Field>
          <Field label="Tanggal lahir" error={errors["tanggalLahir"]}>
            <input
              type="date"
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
              className={inputClass(!!errors["tanggalLahir"])}
            />
          </Field>
          <Field label="Alamat lengkap" error={errors["alamat"]} className="md:col-span-2">
            <textarea
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              placeholder="Nama jalan, nomor rumah, kelurahan, kecamatan, kota"
              maxLength={500}
              rows={3}
              className={cn(inputClass(!!errors["alamat"]), "resize-none")}
            />
          </Field>
          <Field label="Nomor WhatsApp" error={errors["whatsapp"]} className="md:col-span-2">
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, "").slice(0, 15))}
              placeholder="Contoh: 085926551780"
              inputMode="numeric"
              className={inputClass(!!errors["whatsapp"])}
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-3 md:col-span-2">
            <Field label="Kelurahan" error={errors["kelurahan"]}>
              <input
                type="text"
                value={kelurahan}
                onChange={(e) => setKelurahan(e.target.value)}
                placeholder="Kelurahan"
                maxLength={100}
                className={inputClass(!!errors["kelurahan"])}
              />
            </Field>
            <Field label="Kecamatan" error={errors["kecamatan"]}>
              <input
                type="text"
                value={kecamatan}
                onChange={(e) => setKecamatan(e.target.value)}
                placeholder="Kecamatan"
                maxLength={100}
                className={inputClass(!!errors["kecamatan"])}
              />
            </Field>
            <Field label="Kota" error={errors["kota"]}>
              <input
                type="text"
                value={kota}
                onChange={(e) => setKota(e.target.value)}
                placeholder="Kota"
                maxLength={100}
                className={inputClass(!!errors["kota"])}
              />
            </Field>
          </div>
          <Field label="Pekerjaan" error={errors["pekerjaan"]} className="md:col-span-2">
            <input
              type="text"
              value={pekerjaan}
              onChange={(e) => setPekerjaan(e.target.value)}
              placeholder="Contoh: Pelajar SMA, Mahasiswa, Karyawan"
              maxLength={100}
              className={inputClass(!!errors["pekerjaan"])}
            />
          </Field>
        </div>
      </Card>

      {/* Kategori privat */}
      <Card title="Kategori Privat" hint="Ceng yang sesuai — boleh lebih dari satu">
        <ChipGroup
          options={kategoriOptions}
          selected={kategori}
          onToggle={(v) => setKategori((p) => toggle(p, v))}
          error={errors["kategori"]}
          columns
        />
      </Card>

      {/* Waktu jam belajar */}
      <Card title="Waktu Jam Belajar" hint="Ceng jam yang bisa Anda ikuti">
        <div className="grid gap-5 sm:grid-cols-2">
          {waktuGroups.map((g) => (
            <div key={g.label} className="rounded-2xl border border-border bg-background p-4">
              <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-primary">
                {g.label}
              </p>
              <div className="mt-3 space-y-2">
                {g.slots.map((slot) => {
                  const value = `${g.label} ${slot}`;
                  return (
                    <CheckboxRow
                      key={value}
                      label={slot}
                      checked={jamBelajar.includes(value)}
                      onChange={() => setJamBelajar((p) => toggle(p, value))}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <FieldError message={errors["jamBelajar"]} />
      </Card>

      {/* Jadwal belajar */}
      <Card
        title="Jadwal Belajar"
        hint={`Pilih minimal 4 hari — ${jadwal.length} dari 4 dipilih`}
      >

        <ChipGroup
          options={hariOptions}
          selected={jadwal}
          onToggle={(v) => setJadwal((p) => toggle(p, v))}
          error={errors["jadwal"]}
        />
      </Card>

      {/* Teacher pembimbing */}
      <Card title="Teacher Pembimbing" hint="Ceng satu guru pilihan Anda">
        <div className="grid gap-2 sm:grid-cols-2">
          {teacherOptions.map((t) => (
            <CheckboxRow
              key={t}
              label={t}
              checked={teacher === t}
              onChange={() => setTeacher((prev) => (prev === t ? "" : t))}
            />
          ))}
        </div>
        <FieldError message={errors["teacher"]} />
      </Card>

      {/* Metode pembayaran */}
      <Card title="Metode Pembayaran" hint="Pilihan pembayaran — bisa berubah nanti">
        <ChipGroup
          options={pembayaranOptions}
          selected={pembayaran ? [pembayaran] : []}
          onToggle={(v) => setPembayaran((prev) => (prev === v ? "" : v))}
          error={errors["pembayaran"]}
        />
        {pembayaran === "Transfer Bank" && (
          <div
            aria-live="polite"
            className="rounded-2xl border border-border bg-background p-5"
          >
            <h3 className="font-display text-lg font-bold text-primary">
              Detail Transfer Bank Muamalat
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Nomor rekening</dt>
                <dd className="font-semibold">3180013152</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Atas nama</dt>
                <dd className="font-semibold">Ismi Mudzalifa</dd>
              </div>
            </dl>
          </div>
        )}
        {pembayaran === "QRIS" && (
          <div aria-live="polite" className="rounded-2xl border border-border bg-background p-5">
            <img
              src={qrisImage}
              alt="Kode QRIS GoPay Merchant Academy English Course"
              className="mx-auto mt-5 w-full max-w-sm rounded-xl border border-border"
            />
          </div>
        )}
      </Card>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-95"
      >
        Kirim Pendaftaran via WhatsApp
        <Send className="size-5" />
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Setelah tombol ditekan, WhatsApp akan terbuka dengan data Anda sudah terisi —
        tinggal tekan kirim ke admin.
      </p>
    </form>
  );
}

/* ---------- sukses ---------- */

function SuccessCard({ waUrl, onEdit }: { waUrl: string | null; onEdit: () => void }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
      <CheckCircle2 className="mx-auto size-14 text-primary" strokeWidth={1.5} />
      <h2 className="display-hero mt-6 text-3xl">Formulir siap terkirim!</h2>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
        WhatsApp telah terbuka dengan data pendaftaran Anda. Jika jendela WhatsApp
        tidak muncul, tekan tombol di bawah. Jangan lupa tekan <strong className="text-foreground">kirim</strong> di
        WhatsApp supaya admin kami menerima datanya.
      </p>
      {waUrl && (
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-95"
        >
          Buka WhatsApp Lagi
          <Send className="size-5" />
        </a>
      )}
      <div className="mt-10 space-y-2 border-t border-border pt-8 text-sm text-muted-foreground">
        <p>
          Atau hubungi langsung:{" "}
          <span className="font-semibold text-foreground">0859-2655-1780</span>
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${ADMIN_EMAIL}`}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            {ADMIN_EMAIL}
          </a>
        </p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent"
      >
        <ArrowLeft className="size-4" />
        Ubah Data Pendaftaran
      </button>
    </div>
  );
}

/* ---------- komponen kecil ---------- */

function Card({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-primary md:text-2xl">
        {title}
      </h2>
      {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-error={!!error} className={className}>
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      {children}
      <FieldError message={error} />
    </div>
  );
}

function ChipGroup({
  options,
  selected,
  onToggle,
  error,
  columns,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  error?: string | undefined;
  columns?: boolean;
}) {
  return (
    <div>
      <div
        data-error={!!error}
        className={cn(
          "flex flex-wrap gap-2",
          columns && "sm:grid sm:grid-cols-3 sm:gap-3",
        )}
      >
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={active}
              onClick={() => onToggle(opt)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors",
                active
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background hover:border-accent",
              )}
            >
              <span
                className={cn(
                  "inline-flex size-4 items-center justify-center rounded-full border",
                  active ? "border-accent-foreground/50 bg-accent-foreground/15" : "border-muted-foreground/50",
                )}
              >
                {active && <span className="size-2 rounded-full bg-accent-foreground" />}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      <FieldError message={error} />
    </div>
  );
}

function CheckboxRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl px-1 py-1 text-sm transition-colors hover:text-accent-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-0.5 size-4 shrink-0 accent-primary"
      />
      <span>{label}</span>
    </label>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-2 text-sm font-medium text-destructive">{message}</p>;
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/30",
    hasError ? "border-destructive" : "border-border",
  );
}

function FooterNote() {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
      <p>
        Academy English Course · {ADMIN_EMAIL} · 0859-2655-1780
      </p>
    </footer>
  );
}

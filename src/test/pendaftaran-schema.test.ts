import { describe, expect, it } from "vitest";

import { formSchema } from "@/routes/pendaftaran";

const base = {
  nama: "Test Persoon",
  tempatLahir: "Kendari",
  tanggalLahir: "1990-01-02",
  alamat: "Jl. Mawar 12",
  whatsapp: "085123456789",
  kelurahan: "Lahuto",
  kecamatan: "Poasia",
  kota: "Kendari",
  pekerjaan: "Karyawan",
  kategori: ["SMP"],
  jamBelajar: ["08.00–09.00"],
  jadwal: [] as string[],
  teacher: "Mr. Antonius Martin S.Pd",
  pembayaran: "Tunai/Cash",
};

describe("Jadwal belajar requires at least 4 days", () => {
  it("rejects fewer than 4 selected days", () => {
    const three = formSchema.safeParse({ ...base, jadwal: ["Senin", "Selasa", "Rabu"] });
    expect(three.success).toBe(false);
    if (!three.success) {
      const jadwalIssue = three.error.issues.find((i) => i.path[0] === "jadwal");
      expect(jadwalIssue?.message).toBe("Pilih minimal 4 hari (Senin sampai Sabtu)");
    }
  });

  it("accepts exactly 4 selected days", () => {
    const four = formSchema.safeParse({
      ...base,
      jadwal: ["Senin", "Selasa", "Rabu", "Kamis"],
    });
    expect(four.success).toBe(true);
  });
});

import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/site";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Ketentuan Layanan",
  description: `Ketentuan Layanan untuk penggunaan situs dan program mitra reseller ${SITE.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Ketentuan Layanan"
      intro={`Dengan mengakses dan menggunakan situs ${SITE.name}, Anda menyetujui Ketentuan Layanan berikut.`}
    >
      <h2>1. Penggunaan Situs</h2>
      <p>
        Anda setuju menggunakan situs ini hanya untuk tujuan yang sah dan tidak melakukan
        tindakan yang dapat merusak, menonaktifkan, atau mengganggu situs maupun pengguna
        lain.
      </p>

      <h2>2. Produk &amp; Program Mitra</h2>
      <p>
        Informasi produk, harga, komisi, dan estimasi penghasilan yang ditampilkan dapat
        berubah sewaktu-waktu. Estimasi penghasilan bersifat ilustratif dan bukan jaminan;
        hasil aktual dapat bervariasi tergantung usaha masing-masing mitra.
      </p>

      <h2>3. Akun &amp; Login Facebook</h2>
      <p>
        Jika Anda masuk menggunakan Facebook, Anda bertanggung jawab menjaga keamanan akun
        Anda. Penggunaan data Anda diatur dalam{" "}
        <a href="/privacy">Kebijakan Privasi</a> kami.
      </p>

      <h2>4. Hak Kekayaan Intelektual</h2>
      <p>
        Seluruh konten di situs ini — termasuk merek, logo, teks, dan gambar — adalah milik{" "}
        {SITE.name} dan tidak boleh digunakan tanpa izin tertulis.
      </p>

      <h2>5. Batasan Tanggung Jawab</h2>
      <p>
        Situs dan layanan disediakan &quot;sebagaimana adanya&quot;. Sejauh diizinkan oleh
        hukum, kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari
        penggunaan situs ini.
      </p>

      <h2>6. Perubahan Ketentuan</h2>
      <p>
        Kami dapat memperbarui Ketentuan ini sewaktu-waktu. Versi terbaru akan selalu
        tersedia di halaman ini.
      </p>

      <h2>7. Hukum yang Berlaku</h2>
      <p>Ketentuan ini diatur oleh hukum yang berlaku di Republik Indonesia.</p>

      <h2>8. Kontak</h2>
      <p>
        Pertanyaan tentang Ketentuan ini dapat dikirim ke{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> atau WhatsApp{" "}
        {CONTACT.whatsappDisplay}.
      </p>
    </LegalShell>
  );
}

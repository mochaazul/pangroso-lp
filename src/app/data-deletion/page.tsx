import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/site";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Instruksi Penghapusan Data",
  description: `Cara meminta penghapusan data pribadi Anda dari ${SITE.name}, termasuk data dari login Facebook.`,
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <LegalShell
      title="Instruksi Penghapusan Data"
      intro={`Anda berhak meminta agar ${SITE.name} menghapus data pribadi yang kami simpan tentang Anda, termasuk data yang diterima melalui Login Facebook.`}
    >
      <h2>Cara Meminta Penghapusan Data</h2>
      <p>Ada dua langkah untuk menghapus data Anda sepenuhnya:</p>

      <h3>1. Cabut akses aplikasi di Facebook</h3>
      <ul>
        <li>Buka Facebook → <strong>Pengaturan &amp; Privasi → Pengaturan</strong>.</li>
        <li>
          Pilih <strong>Aplikasi dan Situs Web</strong>.
        </li>
        <li>
          Temukan aplikasi <strong>{SITE.name}</strong> pada daftar, lalu pilih{" "}
          <strong>Hapus</strong>. Ini mencabut akses kami ke data Facebook Anda.
        </li>
      </ul>

      <h3>2. Minta penghapusan data yang kami simpan</h3>
      <p>
        Untuk menghapus data yang sudah tersimpan di sistem kami, kirim permintaan kepada
        kami dengan menyertakan nama dan alamat email/akun yang Anda gunakan:
      </p>
      <ul>
        <li>
          Email: <a href={`mailto:${CONTACT.email}?subject=Permintaan%20Penghapusan%20Data`}>{CONTACT.email}</a>
        </li>
        <li>WhatsApp: {CONTACT.whatsappDisplay}</li>
      </ul>
      <p>
        Tuliskan subjek <strong>&quot;Permintaan Penghapusan Data&quot;</strong>. Kami akan
        memproses permintaan Anda dan menghapus data pribadi terkait dalam waktu paling lama{" "}
        <strong>30 hari</strong>, kecuali kami diwajibkan menyimpan sebagian data oleh hukum
        yang berlaku. Kami akan mengonfirmasi setelah penghapusan selesai.
      </p>

      <h2>Pertanyaan?</h2>
      <p>
        Jika Anda butuh bantuan, hubungi kami di{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> atau WhatsApp{" "}
        {CONTACT.whatsappDisplay}.
      </p>
    </LegalShell>
  );
}

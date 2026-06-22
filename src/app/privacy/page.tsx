import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/site";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: `Kebijakan Privasi ${SITE.name} — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda, termasuk data dari login Facebook.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Kebijakan Privasi"
      intro={`Kebijakan Privasi ini menjelaskan bagaimana ${SITE.name} ("kami") mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda ketika Anda mengunjungi situs kami, menghubungi kami, atau masuk menggunakan akun Facebook Anda.`}
    >
      <h2>1. Informasi yang Kami Kumpulkan</h2>
      <p>Kami dapat mengumpulkan jenis informasi berikut:</p>
      <ul>
        <li>
          <strong>Informasi yang Anda berikan langsung</strong> — seperti nama, nomor
          WhatsApp, alamat, dan detail pesanan ketika Anda menghubungi kami atau mendaftar
          sebagai mitra reseller.
        </li>
        <li>
          <strong>Informasi dari Login Facebook</strong> — jika Anda memilih untuk masuk
          atau menghubungkan akun Facebook, kami menerima informasi profil publik dasar yang
          Anda izinkan, yang dapat mencakup nama, alamat email, foto profil, dan ID pengguna
          Facebook Anda. Kami hanya mengakses data yang Anda setujui saat proses login.
        </li>
        <li>
          <strong>Informasi teknis otomatis</strong> — seperti alamat IP, jenis perangkat
          dan browser, serta data penggunaan dasar yang dikumpulkan melalui cookies atau
          alat analitik untuk membantu kami meningkatkan layanan.
        </li>
      </ul>

      <h2>2. Bagaimana Kami Menggunakan Informasi</h2>
      <p>Kami menggunakan informasi Anda untuk:</p>
      <ul>
        <li>Memproses dan mengelola pesanan serta pendaftaran mitra reseller;</li>
        <li>Mengautentikasi dan mengidentifikasi Anda saat login melalui Facebook;</li>
        <li>Berkomunikasi dengan Anda terkait produk, pesanan, atau pertanyaan;</li>
        <li>Meningkatkan kualitas situs, produk, dan layanan kami;</li>
        <li>Memenuhi kewajiban hukum yang berlaku.</li>
      </ul>

      <h2>3. Login Facebook &amp; Data Facebook</h2>
      <p>
        Saat Anda menghubungkan akun Facebook, kami hanya menerima data yang Anda izinkan
        melalui dialog izin Facebook. Kami tidak memposting ke akun Facebook Anda tanpa
        persetujuan Anda. Anda dapat mencabut akses aplikasi kami kapan saja melalui{" "}
        <strong>Pengaturan Facebook → Aplikasi dan Situs Web</strong>.
      </p>

      <h2>4. Berbagi Informasi</h2>
      <p>
        Kami <strong>tidak menjual</strong> data pribadi Anda. Kami hanya membagikan
        informasi dalam keadaan terbatas, yaitu: dengan penyedia layanan tepercaya yang
        membantu kami menjalankan bisnis (misalnya layanan pengiriman atau pembayaran), atau
        jika diwajibkan oleh hukum.
      </p>

      <h2>5. Penyimpanan &amp; Keamanan Data</h2>
      <p>
        Kami menyimpan informasi Anda selama diperlukan untuk tujuan yang dijelaskan dalam
        kebijakan ini, dan menerapkan langkah-langkah yang wajar untuk melindunginya dari
        akses, perubahan, atau penghapusan yang tidak sah.
      </p>

      <h2>6. Penghapusan Data</h2>
      <p>
        Anda berhak meminta penghapusan data pribadi Anda. Lihat halaman{" "}
        <a href="/data-deletion">Instruksi Penghapusan Data</a> untuk langkah-langkahnya,
        atau hubungi kami langsung.
      </p>

      <h2>7. Hak Anda</h2>
      <p>
        Anda berhak untuk mengakses, memperbarui, atau meminta penghapusan data pribadi
        Anda. Untuk menggunakan hak ini, silakan hubungi kami melalui kontak di bawah.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Situs kami dapat menggunakan cookies untuk fungsi dasar dan analitik. Anda dapat
        mengatur browser Anda untuk menolak cookies, meskipun beberapa fitur situs mungkin
        tidak berfungsi optimal.
      </p>

      <h2>9. Perubahan Kebijakan</h2>
      <p>
        Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan
        ditampilkan pada halaman ini dengan tanggal &quot;Terakhir diperbarui&quot; yang baru.
      </p>

      <h2>10. Hubungi Kami</h2>
      <p>
        Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau data Anda, hubungi
        kami:
      </p>
      <ul>
        <li>
          Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </li>
        <li>WhatsApp: {CONTACT.whatsappDisplay}</li>
        <li>
          Instagram: <a href={CONTACT.instagramUrl}>@{CONTACT.instagram}</a>
        </li>
      </ul>
    </LegalShell>
  );
}

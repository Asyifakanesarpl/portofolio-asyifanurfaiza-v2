export default function TentangPage() {
  return (
    <div className="min-h-screen bg-[#F0F7ED] text-slate-800">
     
      {/* Konten Utama */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-[#0B192C] mb-8">Perkenalan</h2>

        {/* Kotak 1: Tentang Saya */}
        <section className="bg-white rounded-xl p-6 shadow-sm mb-6 border border-slate-100">
          <h3 className="font-bold text-lg text-slate-900 mb-2">Tentang Saya</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
          </p>
        </section>

        {/* Grid 2 Kolom: Hobi & Cita-cita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Hobi */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-900 mb-4">Hobi</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
              <li>Menyanyi</li>
              <li>Meendengarkan Musik</li>
              <li>Membaca Buku</li>
            </ul>
          </div>

          {/* Cita-cita */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Cita-cita</h3>
            <p className="text-slate-600 text-sm mb-3">
              Menjadi <span className="font-semibold text-slate-900">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-600 text-sm">
              <li>Menuntaskan Kelas Industri UBIG sampai tuntas</li>
              <li>Magang di perusahaan teknologi</li>
              <li>Bekerja sebagai Web Developer</li>
            </ol>
          </div>
        </div>

        {/* Kotak Tabel: Jadwal Belajar */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-12">
          <h3 className="font-bold text-lg text-slate-900 mb-4">Jadwal Belajar</h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B192C] text-white">
                  <th className="py-3 px-4 font-semibold">Hari</th>
                  <th className="py-3 px-4 font-semibold">Waktu</th>
                  <th className="py-3 px-4 font-semibold">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-3 px-4">Senin</td>
                  <td className="py-3 px-4">19.00 - 20.00</td>
                  <td className="py-3 px-4">Membaca ulang modul</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Selasa</td>
                  <td className="py-3 px-4">19.00 - 21.00</td>
                  <td className="py-3 px-4">Mengerjakan tugas praktik</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Rabu</td>
                  <td className="py-3 px-4">19.30 - 20.30</td>
                  <td className="py-3 px-4">Merekam video dan menulis laporan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

{/* Footer */}
      <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-200">
        © 2026 Asyifa Nurfaiza. Dibuat dengan Next.js di Kelas Industri UBIG.
      </footer>
    </div>
  );
}
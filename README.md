# 🌟 Maulana LinkTree

Aplikasi LinkTree modern dan responsif yang dibuat dengan Next.js dan TailwindCSS. Aplikasi ini menampilkan profil dan kumpulan link penting dalam satu halaman yang menarik dan mudah diakses.

![Maulana LinkTree Preview](https://maulana-linktree.vercel.app/)

## ✨ Fitur

- 🎨 Desain modern dan responsif
- 🔄 Animasi halus dengan Framer Motion
- 🌙 Tampilan yang bersih dan profesional
- 📱 Tampilan yang optimal di perangkat mobile dan desktop
- 🔗 Kartu link dengan efek hover yang menarik
- 👤 Kartu profil dengan foto, nama, dan bio

## 🛠️ Teknologi

- [Next.js 15](https://nextjs.org/) - Framework React dengan fitur SSR dan optimasi
- [React 19](https://react.dev/) - Library JavaScript untuk membangun antarmuka pengguna
- [TailwindCSS 4](https://tailwindcss.com/) - Framework CSS utility-first
- [Framer Motion](https://www.framer.com/motion/) - Library animasi untuk React
- [Tabler Icons](https://tabler-icons.io/) - Set ikon SVG yang elegan

## 🚀 Cara Penggunaan

### Prasyarat

- Node.js versi 18.0.0 atau lebih tinggi
- npm atau yarn

### Instalasi

1. Clone repositori ini

```bash
git clone https://github.com/maulana-tech/maulana-linktree.git
cd maulana-linktree
```

2. Instal dependensi

```bash
npm install
# atau
yarn install
```

3. Jalankan server pengembangan

```bash
npm run dev
# atau
yarn dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda

## 📝 Kustomisasi

Untuk mengubah data profil dan link, edit file `src/data/data.json`:

```json
{
  "profile": {
    "name": "Nama Anda",
    "username": "@username_anda",
    "bio": "Deskripsi singkat tentang Anda",
    "avatarUrl": "/images/profile.png"
  },
  "links": [
    {
      "title": "Judul Link",
      "url": "https://example.com",
      "icon": "nama_icon"
    }
  ]
}
```

Icon yang tersedia: `github`, `linkedin`, `twitter`, `instagram`, dan `world`.

## 🏗️ Build untuk Produksi

```bash
npm run build
# atau
yarn build
```

## 🚀 Deploy

Cara termudah untuk men-deploy aplikasi Next.js adalah menggunakan [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari pembuat Next.js.

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file LICENSE untuk detail lebih lanjut.

---

Dibuat dengan ❤️ oleh [Maulana](https://github.com/maulana-tech)

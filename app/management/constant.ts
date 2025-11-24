export type Member = {
  id: number;
  name: string;
  position: string;
  image: string;
  detail?: string;
};

export const members: Member[] = [
  {
    id: 1,
    name: "Anton Budidjaja",
    position: "Komisaris",
    image: "/profile/anton.png",
    detail:
      "Lahir di Jakarta pada tanggal 27 November 1967, warga negara Indonesia. Beliau juga sebagai Founder and Group Chairman Reliance Group.\n\nSebelum menjabat sebagai Komisaris Perusahaan, beliau menjabat sebagai Komisaris PT Jababeka Tbk (2000-2018), Managing Partner di Victoria Investindo Advisory (2000-2002) dan Vice President di Panin Group (1993-2000).\n\nMemulai karir pada beberapa bank lokal sejak tahun 1992. Beliau memperoleh gelar Bachelor of Science in Business Administration dari California State.",
  },
 {
  id: 2,
  name: "Jessica Fransisca Ulibasa Tambunan",
  position: "Direktur Utama",
  image: "/profile/jessica.png",
  detail: `Warga Negara Indonesia, lahir di Jakarta pada tanggal 12 Oktober 1982.

Sebelum menjabat sebagai Direktur Utama Perusahaan, beliau memulai karir di MHN Trading Pte. Ltd dan Hanama Collection Pte. Ltd menjabat sebagai Commercial & HR Operation Manager, beliau menjabat sebagai HR Head Inditex Brands di PT Mitra Adi Perkasa, selanjutnya menjabat sebagai Head of Human Resources Manager di PT Reliance Capital Management.

Beliau meraih gelar Bachelor of Arts in Media and Cultures Studies di Macquarie University dan Master Management in Human Resources Management di Central Queensland University, Sydney Australia.`,
},
{
  id: 3,
  name: "Yoyo Herdiyanto",
  position: "Direktur",
  image: "/profile/yoyo.png",
  detail: `Warga Negara Indonesia, lahir di Tasikmalaya, 16 Juli 1964.

Sebelum menjabat sebagai Direktur, beliau memulai karir di Biro Administrasi Efek PT Sirca Datapro Perdana dan PT Sinartama Gunita, kemudian bergabung dengan PT Bank CIMB Niaga Tbk pada bagian Corporate Secretary.

Setelah memasuki masa purna karya, yang bersangkutan melanjutkan karir sebagai nara sumber di lembaga training dan sebagai Konsultan Senior bidang Corporate Secretary dan Asean Corporate Governance Scorecard pada beberapa Lembaga Konsultan (PT Kharisma Integrasi Manajemen dan PT Bumi Pertiwi Mandiri). Kemudian sejak akhir Desember 2020 bergabung di PT Reliance Capital Management.

Beliau meraih gelar Sarjana Hukum dari Universitas Krisnadwipayana, Jakarta.`,
},
  {
    id: 4,
    name: "Leonard Adi Putra",
    position: "Ketua Komite Audit",
    image: "/profile/dummy.png",
    detail: undefined
  },
  {
    id: 5,
    name: "Nike Felina",
    position: "Anggota Komite Audit",
    image: "/profile/dummy.png",
    detail: undefined
  },
  {
    id: 6,
    name: "Naradina",
    position: "Internal Audit",
    image: "/profile/dummy.png",
    detail: undefined
  },
];
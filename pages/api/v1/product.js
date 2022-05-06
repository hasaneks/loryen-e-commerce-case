const products = [
  {
    id: 0,
    name: 'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth Uzun Başlık Örneği',
    category: {
      id: 1
    },
    price: 399.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/z6-akilli-saat-kamerali-min.png'
    ],
    isFreeDelivery: true
  },
  {
    id: 1,
    name: 'Calvin Klein Euphoria EDP 100 ml Kadın Parfüm',
    category: {
      id: 11
    },
    price: 145.61,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/calvin-klein-edp-100ml-min.png'
    ],
    isFreeDelivery: false
  },
  {
    id: 2,
    name: 'Gold Çizgili Vazoda 2 Dal Orkide Çiçeği',
    category: {
      id: 7
    },
    price: 249.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/gold-cizgili-vazoda-2-dal-min.png'
    ],
    isFreeDelivery: true
  },
  {
    id: 3,
    name: '925 Ayar Gümüş Çeyreklik Bileklik (Y)',
    category: {
      id: 9
    },
    price: 329.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/925-ayar-gumus-ceyreklik-min.png'
    ],
    isFreeDelivery: false
  },
  {
    id: 4,
    name: 'Sailor SD-3160 Siyah Dağcı Seyahat Sırt Çantası 55 LT Outdoor-Trekking',
    category: {
      id: 10
    },
    price: 499.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/sailor-sd-3160-siyah-dagci-min.png'
    ],
    isFreeDelivery: true
  },
  {
    id: 5,
    name: 'Büyük Boy Metal Osmanlı Bizans Satranç Takımı Parlak ve Ceviz',
    category: {
      id: 5
    },
    price: 19.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/buyuk-boy-metal-osmanli-bizans-satranc-takimi-min.png'
    ],
    isFreeDelivery: true
  },
  {
    id: 6,
    name: '130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
    category: {
      id: 5
    },
    price: 89.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/130cm-papyonlu-buyuk-ayi-min.png'
    ],
    isFreeDelivery: true
  },
  {
    id: 7,
    name: '925 Ayar Gümüş Dualı İsimli Nazar İgnesi',
    category: {
      id: 9
    },
    price: 29.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/925-ayar-gumus-duali-isimli-nazar-min.png'
    ],
    isFreeDelivery: true
  },
  {
    id: 8,
    name: 'Özel Tatlar Çikolata Kutusu 300 gr',
    category: {
      id: 8
    },
    price: 59.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/ozel-tatlar-cikolata-kutusu-min.png'
    ],
    isFreeDelivery: true
  },
  {
    id: 9,
    name: 'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
    category: {
      id: 7
    },
    price: 199.9,
    img: [
      'https://hasaneksi.net/wp-content/uploads/2022/01/kucak-dolusu-25-kirmizi-buket-min.png'
    ],
    isFreeDelivery: false
  },
  {
    id: 10,
    name: 'Panda Tasarımlı Telefon Kılıfı',
    category: {
      id: 9
    },
    price: 34.9,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kc571658-1/L/panda-tasarimli-kisiye-ozel-telefon-kilifi--tum-modeller-mevcuttur--kc571658-1-fbfb8d85329141b3909362076cc82a99.jpg'
    ],
    isFreeDelivery: true
  },
  {
    id: 11,
    name: 'Trio Otantik Serisi Kokulu Lavanta ve Howartia',
    category: {
      id: 7
    },
    price: 109.9,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kc6979297-1/L/trio-otantic-serisi-kokulu-lavanta-ve-howartia-kc6979297-1-dc888f2ecb254fbe9c43ad6e052a8be3.jpg'
    ],
    isFreeDelivery: false
  },
  {
    id: 12,
    name: 'Premium Kutuda 9\'lu Kırmızı Gül',
    category: {
      id: 7
    },
    price: 109.9,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/at3583-1/L/at3583-1-8d8231d0a8d8e43-347c3c6d.jpg'
    ],
    isFreeDelivery: true
  },
  {
    id: 13,
    name: 'Alara Çaydanlık Takımı',
    category: {
      id: 2
    },
    price: 374.25,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kcm91635740-1/L/korkmaz-alara-caydanlik-takimi-kcm91635740-1-154079cd6b9843b78761d195a0e3464e.jpg'
    ],
    isFreeDelivery: false
  },
  {
    id: 14,
    name: 'Xiomi Haylou LS-2021',
    category: {
      id: 1
    },
    price: 499.9,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kc7266764-1/L/xiaomi-haylou-ls01-nabiz-olcer-android-os-smart-akilli-saat-siyah-silikon-kc7266764-1-089a7025e423490dbed48164443e7ff1.jpg'
    ],
    isFreeDelivery: true
  },
  {
    id: 15,
    name: 'Sun Care Çok Yönlü Koruyucu Güneş Kremi',
    category: {
      id: 12
    },
    price: 99.9,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kcm27292621-1/L/sebamed-sun-care-cok-yonlu-koruyucu-gunes-kremi-spf50-75-ml-kcm27292621-1-f2ba3e9e91fd45d2892a6e6d95fb45fd.jpg'
    ],
    isFreeDelivery: true
  },
  {
    id: 16,
    name: 'Champion Kuzu Etli Köpek Maması',
    category: {
      id: 13
    },
    price: 169.9,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kc7876113-1/L/champion-kuzu-etli-kopek-mamasi-15-kg-kc7876113-1-e6d1ed201c4f4db7b4545a75726805b2.jpg'
    ],
    isFreeDelivery: true
  },
  {
    id: 17,
    name: 'AYT Matematik',
    category: {
      id: 4
    },
    price: 88,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kcm41686108-1/L/3d-yayinlari-ayt-fen-bilimleri-ayt-matematik-denemesi-2022-kcm41686108-1-e1bd70e385ab4eeaab09308a51406f66.jpg'
    ],
    isFreeDelivery: true
  },
  {
    id: 18,
    name: 'Dikişli Futbol Topu',
    category: {
      id: 6
    },
    price: 239,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kcm93441685-1/L/mikasa-regateador5-g-siyah-yesil-futbol-topu-kcm93441685-1-afa6753dd5cb4a3d983f3cfe774930b4.jpg'
    ],
    isFreeDelivery: true
  },
  {
    id: 19,
    name: 'Genç Koşu Ayakkabısı',
    category: {
      id: 9
    },
    price: 299,
    img: [
      'https://cdn03.ciceksepeti.com/cicek/kc2783453-20/L/adidas-genc-kosu-ayakkabisi-spor-siyah-f36549-runfalcon-k-kc2783453-20-00c3338e6c2d49769d76d534a9c3ea8a.jpg'
    ],
    isFreeDelivery: true
  }
]

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET': {
      try {
        res.status(200).json(products)
        break
      } catch (e) {
        res.status(500).json({ message: 'Error', e })
      }
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

const banners = [
    {
        id: 1,
        title: '75 TL Üzerine Teslimat Ücreti Bizden',
        link: 'https://loryen.com',
        img: 'https://hasaneksi.net/wp-content/uploads/2022/01/moto-kurye-min.png',
        buttonText: 'Detaylı Bilgi',
        style: { backgroundColor: '#FFEAE8' }
    },
    {
        id: 2,
        title: 'Hediye Kategorisi için Sepette %15 İndirim',
        link: 'https://loryen.com',
        img: 'https://hasaneksi.net/wp-content/uploads/2022/01/hediye-urunler-min.png',
        buttonText: 'Hediye Ürünleri',
        style: { backgroundColor: '#E8F1FF' }
    },
    {
        id: 3,
        title: 'Kırtasiye Kategorisi için Sepette %15 İndirim',
        link: 'https://loryen.com',
        img: 'https://hasaneksi.net/wp-content/uploads/2022/01/kirtasiye-urunleri-min.png',
        buttonText: 'Detaylı Bilgi',
        style: { backgroundColor: '#E2F8E1' }
    }
]

export default async (req, res) => {
    const {
        method
    } = req

    switch (method){
        case "GET":{
            try {
                res.status(200).json(banners)
                break;
            }
            catch (e){
                res.status(500).json({message:"Error", e})
            }

        }
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

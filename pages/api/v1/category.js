const allCategories = [
  {
    "id": 0,
    "name": "Tüm Kategoriler"
  },
  {
    "id": 1,
    "name": "Elektronik"
  },
  {
    "id": 2,
    "name": "Ev ve Yaşam"
  },
  {
    "id": 3,
    "name": "Evcil Hayvan"
  },
  {
    "id": 4,
    "name": "Kitap"
  },
  {
    "id": 5,
    "name": "Oyuncak"
  },
  {
    "id": 6,
    "name": "Spor"
  },
  {
    "id": 7,
    "name": "Çiçek"
  },
  {
    "id": 8,
    "name": "Hediye"
  },
  {
    "id": 9,
    "name": "Moda, Aksesuar"
  },
  {
    "id": 10,
    "name": "Ofis, Kırtasiye"
  },
  {
    "id": 11,
    "name": "Parfüm"
  },
  {
    "id": 12,
    "name": "Kişisel Bakım"
  },
  {
    "id": 13,
    "name": "Petshop"
  }
]

export default async (req, res) => {
  const {
    method
  } = req

  switch (method){
    case "GET":{
      try {
        res.status(200).json(allCategories)
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

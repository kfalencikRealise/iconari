export default {
  slideshow: {
    slides: [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'
    ]
  },
  prices: [
    {
      title: '12" x 20"',
      action: 0.5,
      price: 0,
      thickness: [
        {
          title: 'Normal - .75"',
          action: 6,
          price: 0
        },
        {
          title: 'Big - 1.50"',
          action: 8,
          price: 15
        }
      ],
      edge: [
        {
          title: 'Folded',
          action: 'background',
          price: 0
        },
        {
          title: 'White',
          action: '#fff',
          price: 5
        },
        {
          title: 'Black',
          action: '#000',
          price: 5
        }
      ],
      frame: [
        {
          title: 'None',
          action: 'transparent',
          price: 0
        },
        {
          title: 'White',
          action: '#fff',
          price: 15
        },
        {
          title: 'Black',
          action: '#000',
          price: 15
        }
      ]
    },
    {
      title: '20" x 30"',
      action: 0.55,
      price: 10,
      thickness: [
        {
          title: 'Normal - .75"',
          action: 6,
          price: 0
        },
        {
          title: 'Big - 1.50"',
          action: 8,
          price: 15
        }
      ],
      edge: [
        {
          title: 'Folded',
          action: 'background',
          price: 0
        },
        {
          title: 'White',
          action: '#fff',
          price: 5
        },
        {
          title: 'Black',
          action: '#000',
          price: 5
        }
      ],
      frame: [
        {
          title: 'None',
          action: 'transparent',
          price: 0
        },
        {
          title: 'White',
          action: '#fff',
          price: 30
        },
        {
          title: 'Black',
          action: '#000',
          price: 30
        }
      ]
    },
    {
      title: '36" x 48"',
      action: 0.6,
      price: 50,
      edge: [
        {
          title: 'Folded',
          action: 'background',
          price: 0
        },
        {
          title: 'White',
          action: '#fff',
          price: 5
        },
        {
          title: 'Black',
          action: '#000',
          price: 5
        }
      ]
    },
    {
      title: '40" x 60"',
      action: 0.7,
      price: 100,
      edge: [
        {
          title: 'Folded',
          action: 'background',
          price: 0
        },
        {
          title: 'White',
          action: '#fff',
          price: 5
        },
        {
          title: 'Black',
          action: '#000',
          price: 5
        }
      ]
    },
  ],
  products: [
    {
      "id": 1,
      "title": "Apple",
      "slug": "apple",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["inspirational"],
      "image": "apple.jpg",
      "canvasImage": "apple-preview.jpg",
      "price": 178,
      "discount": 50,
      "landscape": true,
      "bought": 3,
      "date": "2019-12-03",
      "tags": ["fruit", "apple", "food", "inspirational", "simple"]
    },
    {
      "id": 2,
      "title": "Focus",
      "slug": "focus-red",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["inspirational", "abstract"],
      "image": "focus.jpg",
      "canvasImage": "focus-preview.jpg",
      "price": 178,
      "landscape": false,
      "discount": 10,
      "bought": 10,
      "date": "2019-12-05",
      "tags": ["red", "oragne", "purple", "inspirational", "abstract"]
    },
    {
      "id": 3,
      "title": "Friday the 13th",
      "slug": "friday-13",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["movies"],
      "image": "friday13.jpg",
      "canvasImage": "friday13-preview.jpg",
      "price": 178,
      "discount": 0,
      "landscape": true,
      "bought": 1,
      "date": "2019-12-02",
      "tags": ["scary", "dark", "horror", "movie", "friday"]
    },
    {
      "id": 4,
      "title": "I love Chicago I",
      "slug": "i-love-chicago-i",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["city-landscape"],
      "image": "lovechicago1.jpg",
      "canvasImage": "lovechicago1-preview.jpg",
      "price": 178,
      "discount": 30,
      "landscape": true,
      "bought": 20,
      "date": "2019-12-11",
      "tags": ["skyline", "architecture", "love", "city", "chicago"]
    },
    {
      "id": 5,
      "title": "Apple 2",
      "slug": "apple",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["inspirational"],
      "image": "apple.jpg",
      "canvasImage": "apple-preview.jpg",
      "price": 178,
      "discount": 50,
      "landscape": true,
      "bought": 0,
      "date": "2019-12-12",
      "tags": ["fruit", "apple", "food", "inspirational", "simple"]
    },
    {
      "id": 6,
      "title": "Lady",
      "slug": "lady",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["inspirational", "abstract"],
      "image": "lady.jpg",
      "canvasImage": "lady-preview.jpg",
      "price": 178.99,
      "discount": 40,
      "bought": 32,
      "date": "2019-12-06",
      "tags": ["red", "oragne", "purple", "inspirational", "abstract"]
    },
    {
      "id": 7,
      "title": "Friday the 13th 2",
      "slug": "friday-13 2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["movies"],
      "image": "friday13.jpg",
      "canvasImage": "friday13-preview.jpg",
      "price": 178,
      "discount": 50,
      "landscape": true,
      "bought": 0,
      "date": "2019-12-02",
      "tags": ["scary", "dark", "horror", "movie", "friday"]
    },
    {
      "id": 8,
      "title": "I love Chicago I 2",
      "slug": "i-love-chicago-i",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["city-landscape"],
      "image": "lovechicago1.jpg",
      "canvasImage": "lovechicago1-preview.jpg",
      "price": 178,
      "discount": 20,
      "landscape": true,
      "bought": 0,
      "date": "2019-12-03",
      "tags": ["skyline", "architecture", "love", "city", "chicago"]
    },
    {
      "id": 9,
      "title": "Apple 3",
      "slug": "apple",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["inspirational"],
      "image": "apple.jpg",
      "canvasImage": "apple-preview.jpg",
      "price": 178,
      "discount": 30,
      "landscape": true,
      "bought": 0,
      "date": "2019-12-02",
      "tags": ["fruit", "apple", "food", "inspirational", "simple"]
    },
    {
      "id": 10,
      "title": "Focus 3",
      "slug": "focus-red",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["inspirational", "abstract"],
      "image": "focus.jpg",
      "canvasImage": "focus-preview.jpg",
      "price": 178,
      "discount": 20,
      "bought": 0,
      "date": "2019-12-10",
      "tags": ["red", "oragne", "purple", "inspirational", "abstract"]
    },
    {
      "id": 11,
      "title": "Friday the 13th 3",
      "slug": "friday-13 2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["movies"],
      "image": "friday13.jpg",
      "canvasImage": "friday13-preview.jpg",
      "price": 148,
      "discount": 50,
      "landscape": true,
      "bought": 0,
      "date": "2020-01-12",
      "tags": ["scary", "dark", "horror", "movie", "friday"]
    },
    {
      "id": 12,
      "title": "I love Chicago I 3",
      "slug": "i-love-chicago-i",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "categories": ["city-landscape"],
      "image": "lovechicago1.jpg",
      "canvasImage": "lovechicago1-preview.jpg",
      "price": 178,
      "discount": 50,
      "landscape": true,
      "bought": 0,
      "date": "2019-12-14",
      "tags": ["skyline", "architecture", "love", "city", "chicago"]
    }
  ],
  categories: [
    {
      title: 'Art',
      slug: 'art'
    },
    {
      title: 'Inspirational',
      slug: 'inspirational'
    },
    {
      title: 'City landscape',
      slug: 'city-landscape'
    },
    {
      title: 'Abstract',
      slug: 'abstract'
    },
    {
      title: 'Money',
      slug: 'money'
    },
    {
      title: 'Quotes',
      slug: 'quotes'
    },
    {
      title: 'Photography',
      slug: 'photography'
    },
    {
      title: 'Movies',
      slug: 'movies'
    },
    {
      title: 'Comics',
      slug: 'comics'
    },
    {
      title: 'Retro',
      slug: 'retro'
    },
    {
      title: '3D',
      slug: '3d'
    }
  ],
}

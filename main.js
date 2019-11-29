var app = new Vue ({
  el: '#app',
  data: {
    product: 'Смартфоны',
    image: 'iPhone7-gold.png',
    inStock: true,
    details: [
      "смартфон с iOS 10",
      "экран 4.7\", разрешение 1334x750",
      "камера 12 МП, автофокус",
      "память 32 Гб, без слота для карт памяти",
      "3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC, GPS, ГЛОНАСС",
      "объем оперативной памяти 2 Гб",
      "аккумулятор 1960 мА⋅ч",
      "вес 138 г, ШxВxТ 67.10x138.30x7.10 мм"
    ],
    variants: [
      {
        variantId: 2234,
        variantColor: "gold",
        variantImage: '/iPhone7-gold.png'
      },
      {
        variantId: 2235,
        variantColor: "black",
        variantImage: '/iPhone7-black.png'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct: function (variantImage) {
      this.image = variantImage
    }
  }
})
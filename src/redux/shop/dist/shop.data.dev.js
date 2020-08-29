"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var SHOP_DATA = {
  oils: {
    id: 1,
    title: "Oils",
    routeName: "oils",
    items: [{
      id: 1,
      name: "Almond Oil",
      imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
      price: 130,
      routeName: "almond_oil",
      products: [{
        id: 1,
        size: "Almond Oil: 30 ml",
        imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
        price: 130
      }, {
        id: 2,
        size: "Almond Oil: 60 ml",
        imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
        price: 220
      }, {
        id: 3,
        size: "Almond Oil: 100 ml",
        imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
        price: 330
      }, {
        id: 4,
        size: "Almond Oil: 200 ml",
        imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
        price: 560
      }, {
        id: 5,
        size: "Almond Oil: 500 ml",
        imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
        price: 1300
      }, {
        id: 6,
        size: "Almond Oil: 1 litre",
        imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
        price: 2600
      }]
    }, {
      id: 2,
      name: "Walnut Oil",
      imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
      price: 130,
      routeName: "walnut_oil",
      products: [{
        id: 7,
        size: "Walnut Oil: 30 ml",
        imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
        price: 130
      }, {
        id: 8,
        size: "Walnut Oil: 60 ml",
        imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
        price: 220
      }, {
        id: 9,
        size: "Walnut Oil: 100 ml",
        imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
        price: 330
      }, {
        id: 10,
        size: "Walnut Oil: 200 ml",
        imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
        price: 560
      }, {
        id: 11,
        size: "Walnut Oil: 500 ml",
        imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
        price: 1300
      }, {
        id: 12,
        size: "Walnut Oil: 1 litre",
        imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
        price: 2600
      }]
    }, {
      id: 3,
      name: "Groundnut Oil",
      imageUrl: "https://i.ibb.co/8z8DvY6/Groundnut-Oil.jpg",
      price: 190,
      routeName: "groundnut_oil",
      products: [{
        id: 13,
        size: "Groundnut Oil: 1 litre",
        imageUrl: "https://i.ibb.co/8z8DvY6/Groundnut-Oil.jpg",
        price: 190
      }, {
        id: 14,
        size: "Groundnut Oil: 5 litres",
        imageUrl: "https://i.ibb.co/8z8DvY6/Groundnut-Oil.jpg",
        price: 900
      }, {
        id: 15,
        size: "Groundnut Oil: 15 litres",
        imageUrl: "https://i.ibb.co/8z8DvY6/Groundnut-Oil.jpg",
        price: 2300
      }]
    }, {
      id: 4,
      name: "Mustard Oil",
      imageUrl: "https://i.ibb.co/c1bkZPh/Mustard-Oil.png",
      price: 80,
      routeName: "mustard_oil",
      products: [{
        id: 16,
        size: "Mustard Oil: 200 ml",
        imageUrl: "https://i.ibb.co/c1bkZPh/Mustard-Oil.png",
        price: 80
      }, {
        id: 17,
        size: "Mustard Oil: 500 ml",
        imageUrl: "https://i.ibb.co/c1bkZPh/Mustard-Oil.png",
        price: 130
      }, {
        id: 18,
        size: "Mustard Oil: 1 litre",
        imageUrl: "https://i.ibb.co/c1bkZPh/Mustard-Oil.png",
        price: 190
      }]
    }, {
      id: 5,
      name: "Coconut Oil",
      imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
      price: 110,
      routeName: "coconut_oil",
      products: [{
        id: 19,
        size: "Coconut Oil: 200 ml",
        imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
        price: 110
      }, {
        id: 20,
        size: "Coconut Oil: 500 ml",
        imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
        price: 180
      }, {
        id: 21,
        size: "Coconut Oil: 1 litre",
        imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
        price: 320
      }, {
        id: 22,
        size: "Coconut Oil: 5 litres",
        imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
        price: 1525
      }]
    }, {
      id: 6,
      name: "Flaxseed Oil",
      imageUrl: "https://i.ibb.co/Xz8MgDY/Flaxseed-Oil.png",
      price: 120,
      routeName: "flaxseed_oil",
      products: [{
        id: 23,
        size: "Flaxseed Oil: 200 ml",
        imageUrl: "https://i.ibb.co/Xz8MgDY/Flaxseed-Oil.png",
        price: 120
      }, {
        id: 24,
        size: "Flaxseed Oil: 500 ml",
        imageUrl: "https://i.ibb.co/Xz8MgDY/Flaxseed-Oil.png",
        price: 200
      }]
    }, {
      id: 7,
      name: "Black Til (Sesame) Oil",
      imageUrl: "https://i.ibb.co/GTW0BDQ/Black-Sesame-Oil.png",
      price: 120,
      routeName: "black_til_oil",
      products: [{
        id: 25,
        size: "Black Til (Sesame) Oil: 200 ml",
        imageUrl: "https://i.ibb.co/GTW0BDQ/Black-Sesame-Oil.png",
        price: 120
      }]
    }, {
      id: 8,
      name: "White Til (Sesame) Oil",
      imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
      price: 110,
      routeName: "white_til_oil",
      products: [{
        id: 26,
        size: "White Til (Sesame) Oil: 200 ml",
        imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
        price: 110
      }, {
        id: 27,
        size: "White Til (Sesame) Oil: 500 ml",
        imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
        price: 170
      }, {
        id: 28,
        size: "White Til (Sesame) Oil: 1 litre",
        imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
        price: 300
      }, {
        id: 29,
        size: "White Til (Sesame) Oil: 5 litres",
        imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
        price: 1400
      }, {
        id: 30,
        size: "White Til (Sesame) Oil: 15 litres",
        imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
        price: 3520
      }]
    }, {
      id: 9,
      name: "Diva Til Oil",
      imageUrl: "https://i.ibb.co/VLPzqLL/Diva-Til-Oil.jpg",
      price: 95,
      routeName: "diva_til_oil",
      products: [{
        id: 31,
        size: "Diva Til (Sesame) Oil: 500 ml",
        imageUrl: "https://i.ibb.co/VLPzqLL/Diva-Til-Oil.jpg",
        price: 95
      }, {
        id: 32,
        size: "Diva Til (Sesame) Oil: 1 litre",
        imageUrl: "https://i.ibb.co/VLPzqLL/Diva-Til-Oil.jpg",
        price: 180
      }]
    }, {
      id: 10,
      name: "Kardai (Safflower) Oil",
      imageUrl: "https://i.ibb.co/880spJS/Kardi-Oil.png",
      price: 200,
      routeName: "kardai_oil",
      products: [{
        id: 33,
        size: "Kardai (Safflower) Oil: 1 litre",
        imageUrl: "https://i.ibb.co/880spJS/Kardi-Oil.png",
        price: 200
      }, {
        id: 34,
        size: "Kardai (Safflower) Oil: 5 litres",
        imageUrl: "https://i.ibb.co/880spJS/Kardi-Oil.png",
        price: 950
      }, {
        id: 35,
        size: "Kardai (Safflower) Oil: 15 litres",
        imageUrl: "https://i.ibb.co/880spJS/Kardi-Oil.png",
        price: 2350
      }]
    }]
  },
  scrubs: {
    id: 2,
    title: "Scrubs",
    routeName: "scrubs",
    items: [{
      id: 11,
      name: "Almond and Walnut Scrub",
      imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
      price: 40,
      routeName: "almond_and_walnut_scrub",
      products: [{
        id: 36,
        size: "Almond and Walnut Scrub: 100 grams",
        imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
        price: 40
      }]
    }, {
      id: 12,
      name: "Coconut Scrub",
      imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
      price: 30,
      routeName: "coconut_scrub",
      products: [{
        id: 37,
        size: "Coconut Scrub: 100 grams",
        imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
        price: 30
      }]
    }]
  },
  flours: {
    id: 3,
    title: "Flours",
    routeName: "flours",
    items: [{
      id: 13,
      name: "Almond Flour",
      imageUrl: "https://i.ibb.co/jHbfZH1/Almond-Flour.jpg",
      price: 35,
      routeName: "almond_flour",
      products: [{
        id: 38,
        size: "Almond Flour: 200 grams",
        imageUrl: "https://i.ibb.co/jHbfZH1/Almond-Flour.jpg",
        price: 35
      }, {
        id: 39,
        size: "Almond Flour: 500 grams",
        imageUrl: "https://i.ibb.co/jHbfZH1/Almond-Flour.jpg",
        price: 75
      }]
    }, {
      id: 14,
      name: "Coconut Flour",
      imageUrl: "https://i.ibb.co/bX6s51n/Coconut-Flour.jpg",
      price: 25,
      routeName: "coconut_flour",
      products: [{
        id: 40,
        size: "Coconut Flour: 200 grams",
        imageUrl: "https://i.ibb.co/bX6s51n/Coconut-Flour.jpg",
        price: 25
      }]
    }, {
      id: 15,
      name: "Flaxseed Flour",
      imageUrl: "https://i.ibb.co/p45fT9B/Flaxseed-Flour.jpg",
      price: 25,
      routeName: "flaxseed_flour",
      products: [{
        id: 41,
        size: "Flaxseed Flour: 200 grams",
        imageUrl: "https://i.ibb.co/p45fT9B/Flaxseed-Flour.jpg",
        price: 25
      }]
    }]
  },
  other: {
    id: 4,
    title: "Other",
    routeName: "other",
    items: [{
      id: 16,
      name: "Awala Ginger",
      imageUrl: "https://i.ibb.co/5Mj06jn/Awala-Ginger.jpg",
      price: 25,
      routeName: "awala_ginger",
      products: [{
        id: 42,
        size: "Awala Ginger 100 grams",
        imageUrl: "https://i.ibb.co/5Mj06jn/Awala-Ginger.jpg",
        price: 25
      }]
    }, {
      id: 17,
      name: "Jaggery Powder",
      imageUrl: "https://i.ibb.co/SQLqvkK/Jaggery-Powder.jpg",
      price: 55,
      routeName: "jaggery_powder",
      products: [{
        id: 43,
        size: "Jaggery Powder 500 grams",
        imageUrl: "https://i.ibb.co/SQLqvkK/Jaggery-Powder.jpg",
        price: 55
      }, {
        id: 44,
        size: "Jaggery Powder 750 grams",
        imageUrl: "https://i.ibb.co/SQLqvkK/Jaggery-Powder.jpg",
        price: 80
      }]
    }, {
      id: 18,
      name: "Raw Sesame Seeds",
      imageUrl: "https://i.ibb.co/yWfN41n/Raw-Sesame-Seed.jpg",
      price: 30,
      routeName: "raw_sesame_seeds",
      products: [{
        id: 45,
        size: "Raw Sesame Seeds 100 grams",
        imageUrl: "https://i.ibb.co/yWfN41n/Raw-Sesame-Seed.jpg",
        price: 30
      }, {
        id: 46,
        size: "Raw Sesame Seeds 200 grams",
        imageUrl: "https://i.ibb.co/yWfN41n/Raw-Sesame-Seed.jpg",
        price: 60
      }, {
        id: 47,
        size: "Raw Sesame Seeds 500 grams",
        imageUrl: "https://i.ibb.co/yWfN41n/Raw-Sesame-Seed.jpg",
        price: 120
      }]
    }, {
      id: 19,
      name: "Roasted Flax Seed Turmeric",
      imageUrl: "https://i.ibb.co/CHb8rhf/Roasted-Flaxseed-Turmeric.jpg",
      price: 65,
      routeName: "roasted_flaxseed_turmeric",
      products: [{
        id: 48,
        size: "Roasted Flax Seed Turmeric 100 grams",
        imageUrl: "https://i.ibb.co/CHb8rhf/Roasted-Flaxseed-Turmeric.jpg",
        price: 65
      }]
    }, {
      id: 20,
      name: "Rock Salt (Saindhav)",
      imageUrl: "https://i.ibb.co/xH2k4ks/Rock-Salt.jpg",
      price: 50,
      routeName: "rock_salt",
      products: [{
        id: 49,
        size: "Rock Salt (Saindhav) 200 grams",
        imageUrl: "https://i.ibb.co/xH2k4ks/Rock-Salt.jpg",
        price: 50
      }, {
        id: 50,
        size: "Rock Salt (Saindhav) 500 grams",
        imageUrl: "https://i.ibb.co/xH2k4ks/Rock-Salt.jpg",
        price: 90
      }]
    }]
  }
};
var _default = SHOP_DATA;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var PRODUCT_DATA = {
  almondOil: {
    id: 1,
    name: "Almond Oil",
    imageUrl: "https://i.ibb.co/bRYN3Bx/Almond-Oil.png",
    price: 130,
    routeName: "almondOil",
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
  },
  walnutOil: {
    id: 2,
    name: "Walnut Oil",
    imageUrl: "https://i.ibb.co/mG3cFn6/Walnut-Oil.jpg",
    price: 130,
    routeName: "walnutOil",
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
  },
  groundnutOil: {
    id: 3,
    name: "Groundnut Oil",
    imageUrl: "https://i.ibb.co/8z8DvY6/Groundnut-Oil.jpg",
    price: 190,
    routeName: "groundnutOil",
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
  },
  mustardOil: {
    id: 4,
    name: "Mustard Oil",
    imageUrl: "https://i.ibb.co/c1bkZPh/Mustard-Oil.png",
    price: 80,
    routeName: "mustardOil",
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
  },
  coconutOil: {
    id: 5,
    name: "Coconut Oil",
    imageUrl: "https://i.ibb.co/cb17y30/Coconut-Oil.png",
    price: 110,
    routeName: "coconutOil",
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
  },
  flaxseedOil: {
    id: 6,
    name: "Flaxseed Oil",
    imageUrl: "https://i.ibb.co/Xz8MgDY/Flaxseed-Oil.png",
    price: 120,
    routeName: "flaxseedOil",
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
  },
  blackTilOil: {
    id: 7,
    name: "Black Til (Sesame) Oil",
    imageUrl: "https://i.ibb.co/GTW0BDQ/Black-Sesame-Oil.png",
    price: 120,
    routeName: "blackTilOil",
    products: [{
      id: 25,
      size: "Black Til (Sesame) Oil: 200 ml",
      imageUrl: "https://i.ibb.co/GTW0BDQ/Black-Sesame-Oil.png",
      price: 120
    }]
  },
  whiteTilOil: {
    id: 8,
    name: "White Til (Sesame) Oil",
    imageUrl: "https://i.ibb.co/CQMmWwH/White-Sesame-Oil.png",
    price: 110,
    routeName: "whiteTilOil",
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
  },
  divaTilOil: {
    id: 9,
    name: "Diva Til Oil",
    imageUrl: "https://i.ibb.co/VLPzqLL/Diva-Til-Oil.jpg",
    price: 95,
    routeName: "divaTilOil",
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
  },
  kardaiOil: {
    id: 10,
    name: "Kardai (Safflower) Oil",
    imageUrl: "https://i.ibb.co/880spJS/Kardi-Oil.png",
    price: 200,
    routeName: "kardaiOil",
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
  },
  almondAndWalnutScrub: {
    id: 11,
    name: "Almond and Walnut Scrub",
    imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
    price: 40,
    routeName: "almondAndWalnutScrub",
    products: [{
      id: 36,
      size: "Almond and Walnut Scrub: 100 grams",
      imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
      price: 40
    }]
  },
  coconutScrub: {
    id: 12,
    name: "Coconut Scrub",
    imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
    price: 30,
    routeName: "coconutScrub",
    products: [{
      id: 37,
      size: "Coconut Scrub: 100 grams",
      imageUrl: "https://i.ibb.co/0MYw2Ms/Almond-Walnut-Scrub.jpg",
      price: 30
    }]
  }
};
var _default = PRODUCT_DATA;
exports["default"] = _default;
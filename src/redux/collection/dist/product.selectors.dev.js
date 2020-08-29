"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectProduct = exports.selectProducts = void 0;

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.memoize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PRODUCT_ID_MAP = {
  almondOil: 1,
  walnutOil: 2,
  groundnutOil: 3,
  mustardOil: 4,
  coconutOil: 5,
  flaxseedOil: 6,
  blackTilOil: 7,
  whiteTilOil: 8,
  divaTilOil: 9,
  kardaiOil: 10,
  almondAndWalnutScrub: 11,
  coconutScrub: 12,
  almondFlour: 13,
  coconutFlour: 14,
  flaxseedFlour: 15,
  awalaGinger: 16,
  jaggeryPowder: 17,
  rawSesameSeeds: 18,
  roastedFlaxseedTurmeric: 19,
  rockSalt: 20
};

var selectCollection = function selectCollection(state) {
  return state.collection;
};

var selectProducts = (0, _reselect.createSelector)([selectCollection], function (collection) {
  return collection.products;
});
exports.selectProducts = selectProducts;
var selectProduct = (0, _lodash["default"])(function (productUrlParam) {
  return (0, _reselect.createSelector)([selectProducts], function (products) {
    return products[productUrlParam];
  });
});
exports.selectProduct = selectProduct;
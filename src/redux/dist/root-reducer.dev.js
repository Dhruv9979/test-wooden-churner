"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cart = _interopRequireDefault(require("./cart/cart.reducer"));

var _redux = require("redux");

var _directory = _interopRequireDefault(require("../redux/directory/directory.reducer"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _user = _interopRequireDefault(require("./user/user.reducer"));

var _shop = _interopRequireDefault(require("./shop/shop.reducer"));

var _collection = _interopRequireDefault(require("./collection/collection.reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: "root",
  storage: _storage["default"],
  whitelist: ['cart']
};
var rootReducer = (0, _redux.combineReducers)({
  user: _user["default"],
  cart: _cart["default"],
  directory: _directory["default"],
  shop: _shop["default"],
  collection: _collection["default"]
});

var _default = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);

exports["default"] = _default;
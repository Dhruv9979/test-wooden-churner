import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// const PRODUCT_ID_MAP = {
// 	almondoil: 1,
// 	walnutoil: 2,
// 	groundnutoil: 3,
// 	mustardoil: 4,
// 	coconutoil: 5,
// 	flaxseedoil: 6,
// 	blacktiloil: 7,
// 	whitetiloil: 8,
// 	divatiloil: 9,
// 	kardaioil: 10,
// 	almondandwalnutscrub: 11,
// 	coconutscrub: 12,
// 	// almondflour: 13,
// 	// coconutflour: 14,
// 	// flaxseedflour: 15,
// 	// awalafinger: 16,
// 	// jaggerypowder: 17,
// 	// rawsesameseeds: 18,
// 	// roastedflaxseedturmeric: 19,
// 	// rocksalt: 20,
// };

const selectCollection = (state) => state.collection;

export const selectProducts = createSelector([selectCollection], (collection) => collection.items);

export const selectProduct = memoize((productUrlParam) =>
	createSelector([selectProducts], (products) => products[productUrlParam]));

// export const selectProduct = (productUrlParam) =>
// 	createSelector([selectProducts], (products) =>
// 		products.find((product) => product.id === PRODUCT_ID_MAP[productUrlParam])
// 	);
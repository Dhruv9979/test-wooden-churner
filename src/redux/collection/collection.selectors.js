import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const PRODUCT_ID_MAP = {
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
	// almondFlour: 13,
	// coconutFlour: 14,
	// flaxseedFlour: 15,
	// awalaGinger: 16,
	// jaggeryPowder: 17,
	// rawSesameSeeds: 18,
	// roastedFlaxseedTurmeric: 19,
	// rockSalt: 20,
};

const selectCollection = (state) => state.collection;

export const selectProducts = createSelector([selectCollection], (collection) => collection.items);

export const selectProduct = (productUrlParam) =>
	createSelector([selectProducts], (products) =>
		products.find((product) => product.id === PRODUCT_ID_MAP[productUrlParam])
	);

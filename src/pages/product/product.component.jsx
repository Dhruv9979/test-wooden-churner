import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectProducts } from "../../redux/collection/collection.selectors";

import './product.styles.scss'

const ProductPage = ({items}) => {
	console.log(items);
	// const { size, products } = items;
	// console.log(products);
    return (
		<div className="product-page">
			<h2 className="title">Category Page</h2>
			<div className="products">
				{items.map((product) => (
					<CollectionItem key={product.id} item={product} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	items: selectProducts,
});

// const mapStateToProps = (state) => ({
// 	products: selectProducts(1)(state),
// });

export default connect(mapStateToProps)(ProductPage);
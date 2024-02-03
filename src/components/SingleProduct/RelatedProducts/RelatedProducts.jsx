import React from "react";
import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({ productId, categoryId }) => {
  const url = `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`;

  const { data } = useFetch(url);

  return (
    <div className="related-products">
      <Products headingText="Related Products" products={ data } />
    </div>
  );
};

export default RelatedProducts;

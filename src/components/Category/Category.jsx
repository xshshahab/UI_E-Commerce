import React from "react";
import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

  const categoryTitle = data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title;

  return (
    <div className="category-main">
      <div className="layout">
        <div className="category-title">{categoryTitle}</div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;

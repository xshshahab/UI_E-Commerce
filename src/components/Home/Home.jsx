import React, { useEffect, useContext } from "react";
import { Context } from "../../utils/context";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "./../Products/Products";
import "./Home.scss";

import { fetchData } from "../../utils/api";

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    getCategories();

    getProducts();
  }, []);

  const getCategories = () => {
    fetchData("/api/categories?populate=*").then((response) => {
      console.log(response);
      setCategories(response);
    });
  };

  const getProducts = () => {
    fetchData("/api/products?populate=*").then((response) => {
      console.log(response);
      setProducts(response);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories}/>
          <Products headingText="Popular Products" products={products}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

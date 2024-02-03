import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) data = null;

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          value={query}
          type="text"
          autoFocus
          placeholder="Search for products"
          onChange={(e) => setQuery(e.target.value)}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div key={item.id} className="search-result-item" onClick={() => {
              navigate('/product/' + item.id);
              setShowSearch(false);
            }}>
              <div className="img-container">
                <img src={import.meta.env.VITE_APP_DEV_URL +
                item.attributes.img.data[0].attributes.url} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

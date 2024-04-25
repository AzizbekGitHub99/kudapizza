import { Fragment } from "react";

import ProductCard from "../../../../components/product-card/ProductCard";

import { categories } from "../../../../data/categories";
import { products } from "../../../../data/products";

import locationImg from "../../../../assets/images/location.png";

import "./products.scss";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__adress">
          <p>Проверить адрес доставки</p>
          <label htmlFor="adress">
            <img src={locationImg} alt="location logo" />
            <input type="text" id="adress" placeholder="Адрес" />
          </label>
          <button>Проверить</button>
        </div>
        {categories.map((category, i) => {
          return (
            <Fragment key={i}>
              <h1 id={category.name} className="products__title" key={i}>
                {category.name}
              </h1>
              <div className="products__products-rows">
                {products
                  .filter((el) => el.category === category.name)
                  .map((pr) => {
                    return <ProductCard key={pr.id} {...pr} />;
                  })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Products;

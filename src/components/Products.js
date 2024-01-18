import React from 'react'

import prod1 from '../assets/img/product1.png';
import prod2 from '../assets/img/product2.png';
import prod3 from '../assets/img/product3.png';
import prod4 from '../assets/img/product4.png';
import prod5 from '../assets/img/product5.png';
import prod6 from '../assets/img/product6.png';

function Products() {
  return (
    <section className="product section container" id="products">
        <h2 className="section__title-center">
            Check out our <br /> products
        </h2>
        <p className="product__description">
            Here are some selected plants from our showroom, all are in excellent shape
            and has a long life span. Buy and enjoy best quality.
        </p>
        <div className="product__container grid">
            <article className="product__card">
            <div className="product__circle" />
            <img src={prod1} alt="" className="product__img" />
            <h3 className="product__title">Cacti Plant</h3>
            <span className="product_price">$19.99</span>
            <button className="button--flex product__button">
                <i className="ri-shopping-bag-line" />
            </button>
            </article>
            <article className="product__card">
            <div className="product__circle" />
            <img src={prod2} alt="" className="product__img" />
            <h3 className="product__title">Cactus Plant</h3>
            <span className="product_price">$11.99</span>
            <button className="button--flex product__button">
                <i className="ri-shopping-bag-line" />
            </button>
            </article>
            <article className="product__card">
            <div className="product__circle" />
            <img src={prod3} alt="" className="product__img" />
            <h3 className="product__title">Aloe Vera Plant</h3>
            <span className="product_price">$7.99</span>
            <button className="button--flex product__button">
                <i className="ri-shopping-bag-line" />
            </button>
            </article>
            <article className="product__card">
            <div className="product__circle" />
            <img src={prod4} alt="" className="product__img" />
            <h3 className="product__title">Succulent Plant</h3>
            <span className="product_price">$5.99</span>
            <button className="button--flex product__button">
                <i className="ri-shopping-bag-line" />
            </button>
            </article>
            <article className="product__card">
            <div className="product__circle" />
            <img src={prod5} alt="" className="product__img" />
            <h3 className="product__title">Succulent Plant</h3>
            <span className="product_price">$10.99</span>
            <button className="button--flex product__button">
                <i className="ri-shopping-bag-line" />
            </button>
            </article>
            <article className="product__card">
            <div className="product__circle" />
            <img src={prod6} alt="" className="product__img" />
            <h3 className="product__title">Green Plant</h3>
            <span className="product_price">$8.99</span>
            <button className="button--flex product__button">
                <i className="ri-shopping-bag-line" />
            </button>
            </article>
        </div>
        </section>

  )
}

export default Products
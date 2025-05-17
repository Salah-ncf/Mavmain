// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import BannerImage from '../assets/images/promo.png';
import axios from 'axios';

const OnSales = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/onSales");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching sales products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-[50px] overflow-x-hidden font-sans text-gray-900 bg-white">

      {/* 🖤 Promo Banner - black & white version */}
      <div className="relative">
        <div className="relative h-[60vh] w-full">
          <img
            src={BannerImage}
            alt="Sales Banner"
            className="absolute inset-0 object-cover w-full h-full z-0 grayscale"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/40">
          <h1 className="text-5xl font-extrabold drop-shadow-xl tracking-widest uppercase">Exclusive Collection</h1>
          <p className="text-lg mt-2 font-light text-gray-200">Up to <span className="text-white font-semibold">50% OFF</span> on selected styles</p>
          <p className="text-md mt-1 opacity-90 italic text-gray-300">Limited time offer while supplies last</p>
          <button className="mt-6 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl text-md font-medium tracking-wide transition-all duration-200 shadow-lg border border-white">
            Discover Now
          </button>
        </div>
      </div>

      {/* 🛍️ Sales Products Grid */}
      <motion.div className="p-6 sm:p-8 md:p-10 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
<h2 className="text-2xl font-extrabold text-left mb-6 tracking-wide uppercase text-gray-800">
  Featured Offers
</h2>


        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Card 
                  id={product._id}
                  img={product.available[0].path}
                  name={product.name}
                  price={product.price}
                  rated={product.rating}
                  isOnSale={product.isOnSale}
                />
                {product.isOnSale && (
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] sm:text-xs px-2 py-1 rounded-full shadow-sm border border-white">
                    -{product.amount}%
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OnSales;
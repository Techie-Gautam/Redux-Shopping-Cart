import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";

function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      if (data) {
        setProducts(data);
        setError(null);
      } else {
        setProducts([]);
        setError(data.message);
      }
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-[90%] m-auto">
      {loading ? (
        <div className="min-h-[80vh] flex justify-center items-center">
          
          <DNA
            visible={true}
            height="150"
            width="150"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          
        </div>
      ) : error ? (
        <h1>Error: {error}</h1>
      ) : products && products.length > 0 ? (
        <div className="min-h-[90vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3 ">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      ) : ""}
    </div>
  );
}

export default Home;

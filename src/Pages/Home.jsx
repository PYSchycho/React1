import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('asc')
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Errors", error);
        setCart([]);
      }
    } else {
      setCart([]);
    }
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products', {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        });
        if (!response.ok) {
          throw Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
      }
      finally {
        setLoading(false)
      }
    };
    fetchProducts();
  }, []);
  const handleCart = (id, name, price) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex(item => item.id === id);
    if (productIndex !== -1) {
      newCart[productIndex].quantity += 1;
    } else {
      newCart.push({ id, price, name, quantity: 1 })
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleSort = (e) => {
    setSort(e.target.value)
  }
  const filterProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
    .sort((a, b) => {
      if (sort === "asc") {
        return a.price - b.price;
      } else if(sort === "desc"){
        return b.price - a.price;
      }else{
        return a.price + b.price;
      }
    })
  return (
    <div>
      <Navbar />
      <section className="justify-center items-center bg-blue-400 p-2 mt-2">
        <h1 className="font-bold text-center bg-blue-400 text-white text-2xl">WELCOME TO E-COMMERCE WEBSITE</h1>
        <p className="font-bold bg-blue-400 text-white text-center"><b>Discover Amazing Products At Unbeatable Prices!</b></p>
      </section>
        <div className='flex p-2 my-2 bg-blue-300'>
          <div className='flex w-full p-1 '>
          <input className='font-normal border-2 border-black bg-slate-200 rounded-lg px-2 h-8 w-full sm:w-full lg:w-1/3'
            type='text'
            placeholder='Search Your Products here...'
            value={search}
            onChange={handleSearch}>
          </input>
          </div>
          <div className='flex justify-end bg-slate-300 rounded-lg'>
            <select className='border-2 my-1 rounded-lg bg-slate-200'
              value={sort}
              onChange={handleSort}>
              <option value="asc" > Sort by price: Low to High</option>
              <option value="desc" > Sort by price: High to Low</option>
              <option value="all"> Select all</option>
            </select>
          </div>
        </div>
      {loading ?
        <div className="text-center">
          <div role="status">
            <svg aria-hidden="true" className="inline w-60 h-60 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        :
        <div className="py-3 grid lg:grid-cols-6 gap-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-2 xl-grid-cols-4 2xl:grid-cols-5 shadow-xl  ">
          {filterProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-48  h-48 border-2 mb-4 rounded-md " />
              <h2 className="font-semibold text-lg line-clamp-1">{product.title}</h2>
              <p className="text-sm py-2 line-clamp-1">{product.description.substring(0, 10)}...</p>
              <div className='flex justify-between mt-2 items-center'>
                <p className="font-bold text-xs">${product.price}</p>
                <button className='bg-blue-200 hover:bg-blue-50 p-1 rounded-lg font-bold' onClick={() => handleCart(product.id, product.title, product.price)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}
export default Home;

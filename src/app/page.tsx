import { ProductType } from '../types/ProductTypes';
import ProductCard from './components/ProductCard';
import productsData from '../database/products.json';

// async function getProducts(){
//   const res = await fetch('https://fakestoreapi.com/products')

//   if(!res.ok) {
//     throw new Error('Failed to fetch data')
//     }
//       return res.json();
  
// }

export default async function Home() {

  const productsList = productsData;
  console.log(productsList)


  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
      {productsList.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

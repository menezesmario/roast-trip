import Image from "next/image";

type Product = {
    id: number;
    name: string;
    price: number;
    original_price: number;
    discount: string;
    launch: boolean;
    rating: number;
    reviews_count: number;
    weight: string;
    brand: string;
    category: string;
    image: string;
  };
  
  type ProductCardProps = {
    product: Product;
  };
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white border">
        <div className="relative">
          {product.launch && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
              LANÇAMENTO
            </div>
          )}
          <div className="absolute top-2 right-2 bg-red-100 text-red-500 text-xs font-bold py-1 px-2 rounded">
            {product.discount}
          </div>
          <Image
            //src={product.image}
            src="/../../../public/images/3coracoesgourmet.png"
            alt={product.name} 
            width={300}
            height={300}
            className="w-full object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 text-center">{product.name}</div>
          <p className="text-center text-gray-600 text-sm">
            <span className="line-through text-gray-400">R$ {product.original_price.toFixed(2)}</span>{' '}
            <span className="font-bold text-xl text-red-500">R$ {product.price.toFixed(2)}</span>
          </p>
          <div className="flex items-center justify-center mt-2">
            {Array.from({ length: product.rating }, (_, i) => (
              <span key={i} className="px-1">⭐</span>
            ))}
            <span className="text-gray-600 text-sm ml-1">({product.reviews_count})</span>
          </div>
        </div>
        <div className="px-6 pt-4 pb-6">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-orange-600">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
import { products } from "@/seed/seed"
import { ProductCard } from "@/components/product/product-Card/ProductCard"
export const ProductGrid = ()=> {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map(product => (
        <ProductCard product={product} key={product.productId}/>
      ))}
    </div>
  )
}


import { Product } from "@/interfaces/product.interface"
import Image from "next/image"
import Link from "next/link"
interface Props{
  product: Product
}
export const  ProductCard = ({product}: Props) =>{
  return (
    <Link href={`/product/${product.productURL}`} 
    className="rounded-md overflow-hidden fade-in hover:shadow-xl transition-all hover:-translate-y-3">
      <Image src={`/products-images/${product.imageURL}`} 
      alt={product.productName}
      className="w-full h-full object-cover"
      width={300}
      height={300}
      />
    </Link>
  )
}

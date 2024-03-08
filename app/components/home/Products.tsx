import Heading from "../general/Heading"
import ProductCard from "./ProductCard"
import { products } from "@/ultils/Product"

const Products = () => {
    return (
        <div className="container">
            <Heading text="All Products" />
            <div className="flex items-center flex-wrap gap-3 px-3 md:px-10  md:gap-10">
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products
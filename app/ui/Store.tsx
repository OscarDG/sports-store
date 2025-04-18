import {useState, useEffect} from "react"
import {ProductsSkeleton} from "./Skeletons"
import { Products } from "@/app/types"
import StoreHeader from "@/app/ui/StoreHeader"
import ProductsSect from "@/app/ui/Products"
import { CartProvider } from "@/app/context/CartContext"

export default function StoreCard() {
        
        const [products, setProducts] = useState<Products[]>([]);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<string | null>(null);
            
        useEffect(() => {
            async function fetchProducts() {
                try{
                    const response = await fetch("/api/products");
                    if(!response.ok){
                        throw new Error("Failed to fetch products");
                    }
        
                    const data: Products[] = await response.json();
    
                    const availableProducts = data.filter((product) => product.available === true)
    
                    setProducts(availableProducts);
                }catch(error){
                    console.error(error)
                    setError(error instanceof Error? error.message : "Unknown error");
                }finally{
                    setLoading(false);
                }
            }
        
            fetchProducts();
        }, [])
    
        if(loading) return (
        <>
            <ProductsSkeleton />
        </>
    )
        if(error) return error

    return (
        <main>
            <CartProvider>
                <StoreHeader products={products}/>
                <ProductsSect products={products} />
            </CartProvider>
        </main>
    )
}
import {useState, useEffect} from "react"
import {CartProvider} from '@/app/context/ProductsContext'
import {ProductsSkeleton} from "./Skeletons"
import { Products } from "@/app/types"
import StoreHeader from "./StoreHeader"
import ProductsSect from "@/app/ui/Products"

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
    
                    const avalableProducts = data.filter((product) => product.available === true)
    
                    setProducts(avalableProducts);
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
            <StoreHeader products={products}/>
            <CartProvider>
                <ProductsSect products={products} />
            </CartProvider>
        </main>
    )
}
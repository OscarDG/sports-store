'use client';
import { FiltersProvider } from "../context/filterContext";
import StoreHeader from "@/app/ui/StoreHeader";
import ProductsSect from "@/app/ui/Products";
import { ProductsSkeleton } from "@/app/ui/Skeletons";
import { useState, useEffect } from "react";

export default function Store(){
    interface Product {
        id: number,
        name: string,
        tag: string,
        price: number,
        category: string,
        thumb: string,
        available: boolean
        description: string
    }
    
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
        
    useEffect(() => {
        async function fetchProducts() {
            try{
                const response = await fetch("/api/products");
                if(!response.ok){
                    throw new Error("Failed to fetch products");
                }
    
                const data: Product[] = await response.json();

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

    return(
        <FiltersProvider>
            <StoreHeader products={products}/>
            <ProductsSect products={products}/>
        </FiltersProvider>
    )
}
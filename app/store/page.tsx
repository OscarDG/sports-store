'use client';
import { useEffect, useState } from "react";
import { FiltersProvider } from "../context/filterContext";
import StoreHeader from "@/app/ui/StoreHeader";
import ProductsSect from "@/app/ui/Products";

interface Product {
    id: number,
    name: string,
    price: number,
    category: string,
    thumb: string,
    available: boolean
}

export default function Store(){

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
                    setProducts(data);
                }catch(error){
                    console.error(error)
                    setError(error instanceof Error? error.message : "Unknown error");
                }finally{
                    setLoading(false);
                }
            }
    
            fetchProducts();
        }, [])
    
        if(loading) return <p className="fixed inset-0 flex justify-center items-center top-[50%] left-[40%] w-[15%] h-[10%] text-mainwhite bg-mainred/50 rounded-[100px]">Loading products...</p>
        if(error) return <p>Error: {error}</p>

    return(
        <FiltersProvider>
        <main className="flex flex-col min-h-screen gap-6 pt-[0%] md:pt-[0%]">
            <StoreHeader products={products}/>
            <ProductsSect products={products}/>
        </main>
        </FiltersProvider>
    )
}
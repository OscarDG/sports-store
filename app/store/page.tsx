'use client';
import StoreHeader from "@/app/ui/StoreHeader";
import ProductsSect from "@/app/ui/Products";
import products from '@/app/api/products.json'

export default function Store(){
    return(
        <>
            <StoreHeader products={products}/>
            <ProductsSect products={products}/>
        </>
    )
}